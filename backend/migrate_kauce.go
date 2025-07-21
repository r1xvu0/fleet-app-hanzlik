package main

import (
	"fmt"
	"log"
	"strings"

	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

// Migration script to add Kauce field to existing cars
func main() {
	fmt.Println("🔄 Starting Kauce field migration...")

	// Connect to database
	db, err := gorm.Open(sqlite.Open("fleet.db"), &gorm.Config{})
	if err != nil {
		log.Fatal("Failed to connect to database:", err)
	}

	// Add Kauce column if it doesn't exist
	fmt.Println("📝 Adding Kauce column to cars table...")
	err = db.Exec("ALTER TABLE cars ADD COLUMN kauce TEXT DEFAULT '10,000 Kč'").Error
	if err != nil {
		// Column might already exist, check if it's a duplicate column error
		if strings.Contains(err.Error(), "duplicate column name") {
			fmt.Println("✅ Kauce column already exists")
		} else {
			log.Printf("Warning: %v", err)
		}
	} else {
		fmt.Println("✅ Kauce column added successfully")
	}

	// Update existing cars with default Kauce values
	fmt.Println("🔄 Updating existing cars with Kauce values...")
	
	// Get all cars that don't have Kauce set
	var cars []struct {
		ID    uint
		Name  string
		Price string
		Kauce string
	}
	
	db.Table("cars").Select("id, name, price, kauce").Where("kauce IS NULL OR kauce = ''").Find(&cars)
	
	if len(cars) == 0 {
		fmt.Println("✅ All cars already have Kauce values set")
	} else {
		fmt.Printf("📊 Found %d cars without Kauce values\n", len(cars))
		
		for _, car := range cars {
			// Set different Kauce values based on car type/price
			var kauceValue string
			
			// Parse price to determine appropriate Kauce
			if strings.Contains(car.Price, "9,") || strings.Contains(car.Price, "10,") {
				kauceValue = "25,000 Kč" // Premium cars
			} else if strings.Contains(car.Price, "6,") || strings.Contains(car.Price, "7,") || strings.Contains(car.Price, "8,") {
				kauceValue = "15,000 Kč" // Mid-range cars
			} else if strings.Contains(car.Price, "4,") || strings.Contains(car.Price, "5,") {
				kauceValue = "12,000 Kč" // Standard cars
			} else {
				kauceValue = "10,000 Kč" // Economy cars
			}
			
			// Update the car
			err = db.Table("cars").Where("id = ?", car.ID).Update("kauce", kauceValue).Error
			if err != nil {
				log.Printf("Failed to update car %d: %v", car.ID, err)
			} else {
				fmt.Printf("✅ Updated %s with Kauce: %s\n", car.Name, kauceValue)
			}
		}
	}

	fmt.Println("🎉 Migration completed successfully!")
	fmt.Println("💡 You can now restart your backend server to see the changes")
}