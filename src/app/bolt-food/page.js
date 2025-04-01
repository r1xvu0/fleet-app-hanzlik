// app/partners/bolt-food/page.js
import {
  ShoppingBagIcon,
  ClockIcon,
  CurrencyEuroIcon,
  UserIcon,
  DevicePhoneMobileIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import Layout from "@/components/Layout";
import FoodDeliveryCalculator from "@/components/FoodDeliveryCalculator";

export default function BoltFoodPage() {
  return (
    <>
      {/* Hero Section - Bolt Black & Pink */}
      <section className="bg-black text-white py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <ShoppingBagIcon className="h-20 w-20 mx-auto mb-6 text-white" />
          <h1 className="text-4xl font-bold mb-6">Spolupracujte s Bolt Food</h1>
          <p className="text-xl">Leader v rychlém doručování jídla</p>
        </div>
      </section>

      {/* Stats Section */}
      {/* <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: CurrencyEuroIcon,
              value: "35-55 Kč",
              label: "Průměrný výdělek/dodávku",
              color: "text-black",
            },
            {
              icon: ClockIcon,
              value: "<25min",
              label: "Rychlost doručení",
              color: "text-[#ff3d69]",
            },
            {
              icon: UserIcon,
              value: "94%",
              label: "Spokojených partnerů",
              color: "text-black",
            },
          ].map((stat, index) => (
            <div key={index} className="p-6 border rounded-lg">
              <stat.icon className={`h-12 w-12 mx-auto mb-4 ${stat.color}`} />
              <div className={`text-3xl font-bold mb-2 ${stat.color}`}>
                {stat.value}
              </div>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* How It Works */}
      {/* <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            4 kroky k výdělkům
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Registrace", "Školení", "Aktivace", "Doručování"].map(
              (step, index) => (
                <div key={step} className="text-center p-4">
                  <div className="bg-[#ff3d69] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-black">{step}</h3>
                </div>
              ),
            )}
          </div>
        </div>
      </section> */}

      {/* Requirements */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-black text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Požadavky</h3>
            <ul className="space-y-4">
              {[
                "Dopravní prostředek",
                "Smartphone",
                "18+ let",
                "Časová flexibilita",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-white mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-black text-white p-8 rounded-xl shadow-lg">
            <h3 className="text-xl font-bold mb-4">Výhody</h3>
            <ul className="space-y-4">
              {[
                "Bonusové programy",
                "Flexibilní rozvrh",
                "Garantované výdělky",
                "VIP podpora",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-white mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <FoodDeliveryCalculator
          brandColors={{
            text: "text-black",
            accent: "[#8CFF00]",
            border: "border-black",
          }}
          rates={{
            perDelivery: 35,
            bonusThreshold: 100, // deliveries/week
            bonus: 1500,
          }}
        />
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <DevicePhoneMobileIcon className="h-12 w-12 mx-auto mb-6 text-white" />
          <h2 className="text-3xl font-bold mb-6">
            Začněte vydělávat ještě dnes!
          </h2>
          <button className="bg-[#ff3d69] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#e62d5f] transition-colors">
            Připojit se k Bolt Food
          </button>
        </div>
      </section>
    </>
  );
}
