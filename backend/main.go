package main

import (
	"crypto/sha256"
	"encoding/hex"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"os"
	"strconv"
	"strings"
	"time"

	"github.com/gorilla/mux"
	"github.com/rs/cors"
	"gorm.io/driver/sqlite"
	"gorm.io/gorm"
)

// ANSI color codes for terminal output
const (
	ColorReset  = "\033[0m"
	ColorRed    = "\033[31m"
	ColorGreen  = "\033[32m"
	ColorYellow = "\033[33m"
	ColorBlue   = "\033[34m"
	ColorPurple = "\033[35m"
	ColorCyan   = "\033[36m"
	ColorWhite  = "\033[37m"
	ColorBold   = "\033[1m"
)

// Custom logger functions
func logInfo(message string) {
	timestamp := time.Now().Format("15:04:05")
	fmt.Printf("%s[%s]%s %s[INFO]%s  %s\n", ColorCyan, timestamp, ColorReset, ColorGreen, ColorReset, message)
}

func logSuccess(message string) {
	timestamp := time.Now().Format("15:04:05")
	fmt.Printf("%s[%s]%s %s[SUCCESS]%s %s\n", ColorCyan, timestamp, ColorReset, ColorGreen+ColorBold, ColorReset, message)
}

func logWarning(message string) {
	timestamp := time.Now().Format("15:04:05")
	fmt.Printf("%s[%s]%s %s[WARNING]%s %s\n", ColorCyan, timestamp, ColorReset, ColorYellow+ColorBold, ColorReset, message)
}

func logError(message string) {
	timestamp := time.Now().Format("15:04:05")
	fmt.Printf("%s[%s]%s %s[ERROR]%s   %s\n", ColorCyan, timestamp, ColorReset, ColorRed+ColorBold, ColorReset, message)
}

func logRequest(method, path, status string, duration time.Duration) {
	timestamp := time.Now().Format("15:04:05")
	
	// Color code based on HTTP method
	var methodColor string
	switch method {
	case "GET":
		methodColor = ColorBlue
	case "POST":
		methodColor = ColorGreen
	case "PUT":
		methodColor = ColorYellow
	case "DELETE":
		methodColor = ColorRed
	default:
		methodColor = ColorWhite
	}
	
	// Color code based on status
	var statusColor string
	if strings.HasPrefix(status, "2") {
		statusColor = ColorGreen
	} else if strings.HasPrefix(status, "4") {
		statusColor = ColorYellow
	} else if strings.HasPrefix(status, "5") {
		statusColor = ColorRed
	} else {
		statusColor = ColorWhite
	}
	
	fmt.Printf("%s[%s]%s %s[HTTP]%s    %s%s%s %s%-20s%s %s%s%s %s(%v)%s\n", 
		ColorCyan, timestamp, ColorReset,
		ColorPurple+ColorBold, ColorReset,
		methodColor+ColorBold, method, ColorReset,
		ColorWhite, path, ColorReset,
		statusColor+ColorBold, status, ColorReset,
		ColorCyan, duration.Round(time.Millisecond), ColorReset)
}

func printBanner() {
	fmt.Printf("\n%s", ColorCyan+ColorBold)
	fmt.Println("╔══════════════════════════════════════════════════════════════╗")
	fmt.Println("║                     🚗 FLOTILA PRAHA 🚗                     ║")
	fmt.Println("║                    Go Backend Server                         ║")
	fmt.Println("╚══════════════════════════════════════════════════════════════╝")
	fmt.Printf("%s\n", ColorReset)
}

// Models
type Car struct {
	ID           uint      `json:"id" gorm:"primaryKey"`
	Name         string    `json:"name" gorm:"not null"`
	Price        string    `json:"price" gorm:"not null"`
	Year         int       `json:"year" gorm:"not null"`
	FuelType     string    `json:"fuelType" gorm:"not null"`
	Power        string    `json:"power" gorm:"not null"`
	Seats        int       `json:"seats" gorm:"not null"`
	Features     string    `json:"features" gorm:"type:text"` // JSON string
	Image        string    `json:"image"`
	Available    string    `json:"available" gorm:"default:Dostupné"`
	Description  string    `json:"description" gorm:"type:text"`
	Engine       string    `json:"engine"`
	Consumption  string    `json:"consumption"`
	Transmission string    `json:"transmission"`
	Type         string    `json:"type" gorm:"default:''"`  // Added to fix database constraint
	CreatedAt    time.Time `json:"createdAt"`
	UpdatedAt    time.Time `json:"updatedAt"`
}

type ContactForm struct {
	ID                   uint      `json:"id" gorm:"primaryKey"`
	Name                 string    `json:"name" gorm:"not null"`
	Email                string    `json:"email" gorm:"not null"`
	Nationality          string    `json:"nationality"`
	PhoneNumber          string    `json:"phoneNumber"`
	Languages            string    `json:"languages" gorm:"type:text"` // JSON string
	Message              string    `json:"message" gorm:"type:text"`
	EUDriverLicense      bool      `json:"euDriverLicense"`
	LicenseIssuanceDate  string    `json:"licenseIssuanceDate"`
	Gender               string    `json:"gender"`
	Newsletter           bool      `json:"newsletter" gorm:"default:true"`
	Status               string    `json:"status" gorm:"default:new"` // new, contacted, closed
	CreatedAt            time.Time `json:"createdAt"`
	UpdatedAt            time.Time `json:"updatedAt"`
}

type Admin struct {
	ID        uint      `json:"id" gorm:"primaryKey"`
	Username  string    `json:"username" gorm:"unique;not null"`
	Password  string    `json:"-" gorm:"not null"` // Hidden in JSON
	Email     string    `json:"email"`
	Role      string    `json:"role" gorm:"default:admin"` // admin, superadmin
	Active    bool      `json:"active" gorm:"default:true"`
	CreatedAt time.Time `json:"createdAt"`
	UpdatedAt time.Time `json:"updatedAt"`
}

var db *gorm.DB

// Password hashing functions
func hashPassword(password string) string {
	hash := sha256.Sum256([]byte(password))
	return hex.EncodeToString(hash[:])
}

func verifyPassword(password, hash string) bool {
	return hashPassword(password) == hash
}

// Get environment variable with default
func getEnv(key, defaultValue string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return defaultValue
}

// HTTP logging middleware
func loggingMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		
		// Skip logging for OPTIONS requests to reduce noise
		if r.Method == "OPTIONS" {
			next.ServeHTTP(w, r)
			return
		}
		
		// Create a response writer wrapper to capture status code
		wrapped := &responseWriter{ResponseWriter: w, statusCode: 200}
		
		next.ServeHTTP(wrapped, r)
		
		duration := time.Since(start)
		status := fmt.Sprintf("%d", wrapped.statusCode)
		
		logRequest(r.Method, r.URL.Path, status, duration)
	})
}

// Response writer wrapper to capture status code
type responseWriter struct {
	http.ResponseWriter
	statusCode int
}

func (rw *responseWriter) WriteHeader(code int) {
	rw.statusCode = code
	rw.ResponseWriter.WriteHeader(code)
}

func main() {
	printBanner()
	
	logInfo("Initializing database connection...")
	// Initialize database
	var err error
	db, err = gorm.Open(sqlite.Open("fleet.db"), &gorm.Config{})
	if err != nil {
		logError(fmt.Sprintf("Failed to connect to database: %v", err))
		log.Fatal("Database connection failed")
	}
	logSuccess("Database connected successfully")

	logInfo("Running database migrations...")
	// Auto migrate
	db.AutoMigrate(&Car{}, &ContactForm{}, &Admin{})
	logSuccess("Database migrations completed")

	logInfo("Seeding initial data...")
	// Seed initial data
	seedData()

	logInfo("Setting up routes...")
	// Setup routes
	r := mux.NewRouter()

	// Add logging middleware
	r.Use(loggingMiddleware)

	// API routes
	api := r.PathPrefix("/api").Subrouter()
	api.HandleFunc("/contact", handleContact).Methods("POST", "OPTIONS")
	api.HandleFunc("/cars", handleGetCars).Methods("GET", "OPTIONS")
	api.HandleFunc("/cars/{id}", handleGetCar).Methods("GET", "OPTIONS")

	// Admin routes
	admin := r.PathPrefix("/admin").Subrouter()
	admin.HandleFunc("/login", handleAdminLogin).Methods("POST", "OPTIONS")
	admin.HandleFunc("/cars", handleAdminCars).Methods("GET", "POST", "OPTIONS")
	admin.HandleFunc("/cars/{id}", handleAdminCarUpdate).Methods("PUT", "DELETE", "OPTIONS")
	admin.HandleFunc("/contacts", handleAdminContacts).Methods("GET", "OPTIONS")
	admin.HandleFunc("/contacts/{id}", handleAdminContactUpdate).Methods("PUT", "OPTIONS")
	admin.HandleFunc("/users", handleAdminUsers).Methods("GET", "POST", "OPTIONS")
	admin.HandleFunc("/users/{id}", handleAdminUserUpdate).Methods("PUT", "DELETE", "OPTIONS")

	// Serve admin interface
	r.PathPrefix("/admin/").Handler(http.StripPrefix("/admin/", http.FileServer(http.Dir("./admin/"))))
	r.HandleFunc("/admin", func(w http.ResponseWriter, r *http.Request) {
		http.ServeFile(w, r, "./admin/index.html")
	})

	logSuccess("Routes configured successfully")

	logInfo("Configuring CORS...")
	// CORS
	c := cors.New(cors.Options{
		AllowedOrigins: []string{
			"http://localhost:3000",
			"http://localhost:3001", 
			"https://flotila-praha.eu",
			"http://flotila-praha.eu",
			"https://www.flotila-praha.eu",
			"http://www.flotila-praha.eu",
			"https://flotila-praha.eu:3000",
			"http://flotila-praha.eu:3000",
		},
		AllowedMethods: []string{"GET", "POST", "PUT", "DELETE", "OPTIONS"},
		AllowedHeaders: []string{"*"},
		AllowCredentials: true,
	})

	handler := c.Handler(r)

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	logSuccess("🚀 Server ready!")
	logInfo(fmt.Sprintf("🌐 API: http://localhost:%s/api/", port))
	logInfo(fmt.Sprintf("⚙️  Admin: http://localhost:%s/admin", port))
	logInfo(fmt.Sprintf("👤 Login: admin / admin123"))
	fmt.Printf("\n%s[LISTENING]%s Server running on port %s%s%s\n\n", 
		ColorGreen+ColorBold, ColorReset, ColorCyan+ColorBold, port, ColorReset)
	
	log.Fatal(http.ListenAndServe(":"+port, handler))
}

func seedData() {
	// Create default admin user from environment variables
	var adminCount int64
	db.Model(&Admin{}).Count(&adminCount)
	if adminCount == 0 {
		defaultUsername := getEnv("ADMIN_USERNAME", "admin")
		defaultPassword := getEnv("ADMIN_PASSWORD", "admin123")
		defaultEmail := getEnv("ADMIN_EMAIL", "admin@flotila-praha.eu")
		
		admin := Admin{
			Username: defaultUsername,
			Password: hashPassword(defaultPassword),
			Email:    defaultEmail,
			Role:     "superadmin",
			Active:   true,
		}
		db.Create(&admin)
		logSuccess(fmt.Sprintf("Default admin created: %s", defaultUsername))
		if defaultPassword == "admin123" {
			logWarning("⚠️  Using default password! Set ADMIN_PASSWORD environment variable!")
		}
		logInfo(fmt.Sprintf("📧 Admin email: %s", defaultEmail))
	} else {
		logInfo("Admin user already exists")
	}

	// Seed cars if none exist
	var carCount int64
	db.Model(&Car{}).Count(&carCount)
	if carCount == 0 {
		logInfo("Creating sample cars...")
		cars := []Car{
			{
				Name:         "Škoda Octavia 1.6 TDI",
				Price:        "3,990 Kč",
				Year:         2022,
				FuelType:     "Diesel",
				Power:        "116 HP",
				Seats:        5,
				Features:     `["Klimatizace", "Parkovací senzory", "Navigace", "Bluetooth"]`,
				Image:        "/images/skoda-octavia.jpg",
				Available:    "Dostupné",
				Description:  "Škoda Octavia je ideálním vozem pro každodenní provoz taxi služeb. Nabízí dostatek prostoru pro pohodlné cestování a zavazadla, nízkou spotřebu paliva a spolehlivý výkon.",
				Engine:       "1.6 TDI",
				Consumption:  "4.5 l/100km",
				Transmission: "Manuální, 6-stupňová",
			},
			{
				Name:         "Škoda Octavia 1.4 TSI",
				Price:        "4,490 Kč",
				Year:         2023,
				FuelType:     "Benzín",
				Power:        "150 HP",
				Seats:        5,
				Features:     `["Klimatizace", "Parkovací senzory", "Navigace", "Bluetooth", "Start/Stop"]`,
				Image:        "/images/skoda-octavia.jpg",
				Available:    "Rezervováno",
				Description:  "Moderní benzínová verze oblíbené Škody Octavia s turbodmychadlem. Ideální pro městský provoz s dynamickým výkonem a nízkou spotřebou.",
				Engine:       "1.4 TSI",
				Consumption:  "5.8 l/100km",
				Transmission: "Automatická DSG, 7-stupňová",
			},
			{
				Name:         "Toyota Corolla Hybrid",
				Price:        "6,490 Kč",
				Year:         2023,
				FuelType:     "Hybrid",
				Power:        "122 HP",
				Seats:        5,
				Features:     `["Klimatizace", "Autonomní brzdění", "Adaptivní tempomat", "Android Auto/Apple CarPlay"]`,
				Image:        "/images/toyota-corolla.jpg",
				Available:    "Dostupné",
				Description:  "Toyota Corolla Hybrid kombinuje spolehlivost, nízké provozní náklady a ekologický provoz. Hybridní pohon nabízí plynulou jízdu, nízkou spotřebu a tichý chod ve městě.",
				Engine:       "1.8 Hybrid",
				Consumption:  "3.8 l/100km",
				Transmission: "Automatická e-CVT",
			},
			{
				Name:         "Tesla Model 3",
				Price:        "9,990 Kč",
				Year:         2023,
				FuelType:     "Elektro",
				Power:        "283 HP",
				Seats:        5,
				Features:     `["Autopilot", "Dojezd 580 km", "15\" dotykový displej", "Prémiové audio"]`,
				Image:        "/images/tesla-model3.jpg",
				Available:    "Nedostupné",
				Description:  "Revoluční elektromobil s výjimečným výkonem a dojezdem. Tesla Model 3 nabízí minimalistický design, pokročilé asistenční systémy a přístup k rozsáhlé síti Superchargerů.",
				Engine:       "Elektrický motor",
				Consumption:  "15.5 kWh/100km",
				Transmission: "Automatická, 1-stupňová",
			},
		}
		
		for _, car := range cars {
			db.Create(&car)
		}
		logSuccess(fmt.Sprintf("Created %d sample cars", len(cars)))
	} else {
		logInfo(fmt.Sprintf("Found %d existing cars in database", carCount))
	}
}

// API Handlers
func handleContact(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	
	if r.Method == "OPTIONS" {
		return
	}

	// Parse the request body into a map first to handle the languages array
	var requestData map[string]interface{}
	if err := json.NewDecoder(r.Body).Decode(&requestData); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]string{
			"error": "Invalid JSON format",
		})
		return
	}

	// Convert languages array to JSON string if it exists
	if languages, ok := requestData["languages"].([]interface{}); ok {
		languagesJSON, _ := json.Marshal(languages)
		requestData["languages"] = string(languagesJSON)
	} else if requestData["languages"] == nil {
		requestData["languages"] = "[]"
	}

	// Convert the map back to JSON and then decode into ContactForm struct
	requestJSON, _ := json.Marshal(requestData)
	var contact ContactForm
	if err := json.Unmarshal(requestJSON, &contact); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]string{
			"error": "Failed to parse contact data",
		})
		return
	}

	// Save to database
	if err := db.Create(&contact).Error; err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		json.NewEncoder(w).Encode(map[string]string{
			"error": "Failed to save contact form",
		})
		return
	}

	response := map[string]interface{}{
		"message":    "Děkujeme za vaši zprávu! Brzy se vám ozveme.",
		"subscribed": contact.Newsletter,
	}

	json.NewEncoder(w).Encode(response)
}

func handleGetCars(w http.ResponseWriter, r *http.Request) {
	var cars []Car
	// Show all cars, not just available ones
	db.Find(&cars)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(cars)
}

func handleGetCar(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	vars := mux.Vars(r)
	id := vars["id"]

	var car Car
	if err := db.First(&car, id).Error; err != nil {
		w.WriteHeader(http.StatusNotFound)
		json.NewEncoder(w).Encode(map[string]string{
			"error": "Car not found",
		})
		return
	}

	json.NewEncoder(w).Encode(car)
}

// Admin Handlers
func handleAdminLogin(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	
	if r.Method == "OPTIONS" {
		return
	}

	var credentials struct {
		Username string `json:"username"`
		Password string `json:"password"`
	}

	if err := json.NewDecoder(r.Body).Decode(&credentials); err != nil {
		w.WriteHeader(http.StatusBadRequest)
		json.NewEncoder(w).Encode(map[string]string{
			"error": "Invalid JSON format",
		})
		return
	}

	var admin Admin
	if err := db.Where("username = ? AND active = ?", credentials.Username, true).First(&admin).Error; err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(map[string]string{
			"error": "Invalid credentials",
		})
		return
	}

	// Verify password using hash
	if !verifyPassword(credentials.Password, admin.Password) {
		w.WriteHeader(http.StatusUnauthorized)
		json.NewEncoder(w).Encode(map[string]string{
			"error": "Invalid credentials",
		})
		return
	}

	response := map[string]interface{}{
		"success": true,
		"message": "Login successful",
		"token":   "simple-token", // In production, use proper JWT
		"user": map[string]interface{}{
			"id":       admin.ID,
			"username": admin.Username,
			"email":    admin.Email,
			"role":     admin.Role,
		},
	}

	json.NewEncoder(w).Encode(response)
}

func handleAdminCars(w http.ResponseWriter, r *http.Request) {
	switch r.Method {
	case "GET":
		var cars []Car
		db.Find(&cars)
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(cars)

	case "POST":
		var car Car
		if err := json.NewDecoder(r.Body).Decode(&car); err != nil {
			http.Error(w, "Invalid JSON", http.StatusBadRequest)
			return
		}

		if err := db.Create(&car).Error; err != nil {
			http.Error(w, "Failed to create car", http.StatusInternalServerError)
			return
		}

		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(car)
	}
}

func handleAdminCarUpdate(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	switch r.Method {
	case "PUT":
		var car Car
		if err := db.First(&car, id).Error; err != nil {
			http.Error(w, "Car not found", http.StatusNotFound)
			return
		}

		if err := json.NewDecoder(r.Body).Decode(&car); err != nil {
			http.Error(w, "Invalid JSON", http.StatusBadRequest)
			return
		}

		db.Save(&car)
		w.Header().Set("Content-Type", "application/json")
		json.NewEncoder(w).Encode(car)

	case "DELETE":
		if err := db.Delete(&Car{}, id).Error; err != nil {
			http.Error(w, "Failed to delete car", http.StatusInternalServerError)
			return
		}

		w.WriteHeader(http.StatusNoContent)
	}
}

func handleAdminContacts(w http.ResponseWriter, r *http.Request) {
	var contacts []ContactForm
	
	// Get query parameters for filtering
	status := r.URL.Query().Get("status")
	page := r.URL.Query().Get("page")
	
	query := db.Model(&ContactForm{})
	
	if status != "" {
		query = query.Where("status = ?", status)
	}
	
	// Pagination
	if page != "" {
		if p, err := strconv.Atoi(page); err == nil && p > 0 {
			offset := (p - 1) * 20
			query = query.Offset(offset).Limit(20)
		}
	}
	
	query.Order("created_at DESC").Find(&contacts)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(contacts)
}

func handleAdminContactUpdate(w http.ResponseWriter, r *http.Request) {
	vars := mux.Vars(r)
	id := vars["id"]

	var contact ContactForm
	if err := db.First(&contact, id).Error; err != nil {
		http.Error(w, "Contact not found", http.StatusNotFound)
		return
	}

	var update struct {
		Status string `json:"status"`
	}

	if err := json.NewDecoder(r.Body).Decode(&update); err != nil {
		http.Error(w, "Invalid JSON", http.StatusBadRequest)
		return
	}

	contact.Status = update.Status
	db.Save(&contact)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(contact)
}

// Admin User Management Handlers
func handleAdminUsers(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	
	switch r.Method {
	case "GET":
		var users []Admin
		db.Find(&users)
		json.NewEncoder(w).Encode(users)

	case "POST":
		var newUser struct {
			Username string `json:"username"`
			Password string `json:"password"`
			Email    string `json:"email"`
			Role     string `json:"role"`
		}
		
		if err := json.NewDecoder(r.Body).Decode(&newUser); err != nil {
			w.WriteHeader(http.StatusBadRequest)
			json.NewEncoder(w).Encode(map[string]string{
				"error": "Invalid JSON format",
			})
			return
		}

		// Validate required fields
		if newUser.Username == "" || newUser.Password == "" {
			w.WriteHeader(http.StatusBadRequest)
			json.NewEncoder(w).Encode(map[string]string{
				"error": "Username and password are required",
			})
			return
		}

		// Check if username already exists
		var existingUser Admin
		if err := db.Where("username = ?", newUser.Username).First(&existingUser).Error; err == nil {
			w.WriteHeader(http.StatusConflict)
			json.NewEncoder(w).Encode(map[string]string{
				"error": "Username already exists",
			})
			return
		}

		// Set default role if not provided
		if newUser.Role == "" {
			newUser.Role = "admin"
		}

		admin := Admin{
			Username: newUser.Username,
			Password: hashPassword(newUser.Password),
			Email:    newUser.Email,
			Role:     newUser.Role,
			Active:   true,
		}

		if err := db.Create(&admin).Error; err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			json.NewEncoder(w).Encode(map[string]string{
				"error": "Failed to create user",
			})
			return
		}

		logSuccess(fmt.Sprintf("New admin user created: %s", admin.Username))
		json.NewEncoder(w).Encode(admin)
	}
}

func handleAdminUserUpdate(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	vars := mux.Vars(r)
	id := vars["id"]

	switch r.Method {
	case "PUT":
		var user Admin
		if err := db.First(&user, id).Error; err != nil {
			w.WriteHeader(http.StatusNotFound)
			json.NewEncoder(w).Encode(map[string]string{
				"error": "User not found",
			})
			return
		}

		var updateData struct {
			Username string `json:"username"`
			Password string `json:"password"`
			Email    string `json:"email"`
			Role     string `json:"role"`
			Active   *bool  `json:"active"` // Pointer to handle false values
		}

		if err := json.NewDecoder(r.Body).Decode(&updateData); err != nil {
			w.WriteHeader(http.StatusBadRequest)
			json.NewEncoder(w).Encode(map[string]string{
				"error": "Invalid JSON format",
			})
			return
		}

		// Update fields if provided
		if updateData.Username != "" {
			user.Username = updateData.Username
		}
		if updateData.Password != "" {
			user.Password = hashPassword(updateData.Password)
		}
		if updateData.Email != "" {
			user.Email = updateData.Email
		}
		if updateData.Role != "" {
			user.Role = updateData.Role
		}
		if updateData.Active != nil {
			user.Active = *updateData.Active
		}

		if err := db.Save(&user).Error; err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			json.NewEncoder(w).Encode(map[string]string{
				"error": "Failed to update user",
			})
			return
		}

		logSuccess(fmt.Sprintf("Admin user updated: %s", user.Username))
		json.NewEncoder(w).Encode(user)

	case "DELETE":
		// Prevent deletion of the last superadmin
		var superAdminCount int64
		db.Model(&Admin{}).Where("role = ? AND active = ?", "superadmin", true).Count(&superAdminCount)
		
		var userToDelete Admin
		if err := db.First(&userToDelete, id).Error; err != nil {
			w.WriteHeader(http.StatusNotFound)
			json.NewEncoder(w).Encode(map[string]string{
				"error": "User not found",
			})
			return
		}

		if userToDelete.Role == "superadmin" && superAdminCount <= 1 {
			w.WriteHeader(http.StatusBadRequest)
			json.NewEncoder(w).Encode(map[string]string{
				"error": "Cannot delete the last superadmin user",
			})
			return
		}

		if err := db.Delete(&Admin{}, id).Error; err != nil {
			w.WriteHeader(http.StatusInternalServerError)
			json.NewEncoder(w).Encode(map[string]string{
				"error": "Failed to delete user",
			})
			return
		}

		logWarning(fmt.Sprintf("Admin user deleted: %s", userToDelete.Username))
		w.WriteHeader(http.StatusNoContent)
	}
}