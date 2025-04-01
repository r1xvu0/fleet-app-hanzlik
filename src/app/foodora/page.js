// app/partners/foodora/page.js
import EarningsCalculator from "@/components/EarningsCalculator";
import FoodDeliveryCalculator from "@/components/FoodDeliveryCalculator";
import {
  ShoppingBagIcon,
  ClockIcon,
  CurrencyEuroIcon,
  UserIcon,
  DevicePhoneMobileIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

export default function FoodoraPage() {
  return (
    <>
      {/* Hero Section - Foodora Red */}
      <section className="bg-[#DF1067] text-white py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <ShoppingBagIcon className="h-20 w-20 mx-auto mb-6 text-[#f8a735]" />
          <h1 className="text-4xl font-bold mb-6">Doručujte s Foodora</h1>
          <p className="text-xl">Leader v prémiovém doručování</p>
        </div>
      </section>

      {/* Stats - Foodora Colors */}
      {/* <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: CurrencyEuroIcon,
              value: "40-60 Kč",
              label: "Průměrný výdělek/dodávku",
              color: "text-[#d70f64]",
            },
            {
              icon: ClockIcon,
              value: "<35min",
              label: "Průměrný čas doručení",
              color: "text-[#f8a735]",
            },
            {
              icon: UserIcon,
              value: "92%",
              label: "Spokojených partnerů",
              color: "text-[#d70f64]",
            },
          ].map((stat, index) => (
            <div key={index} className="p-6">
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
      {/* <section className="bg-[#fef2f5] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#d70f64]">
            Jak začít
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Registrace", "Školení", "Aktivace", "Doručování"].map(
              (step, index) => (
                <div key={step} className="text-center p-4">
                  <div className="bg-[#f8a735] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-[#d70f64]">
                    {step}
                  </h3>
                </div>
              ),
            )}
          </div>
        </div>
      </section> */}

      {/* Requirements */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-[#DF1067] text-white p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Požadavky</h3>
            <ul className="space-y-4">
              {[
                "Dopravní prostředek",
                "Smartphone",
                "18+ let",
                "Flexibilita",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-[#f8a735] mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#DF1067] text-white p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Výhody</h3>
            <ul className="space-y-4">
              {[
                "Prémiové tarify",
                "VIP podpora",
                "Bonusové programy",
                "Flexibilní rozvrh",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-[#d70f64] mr-2" />
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
            text: "text-[#DF1067]",
            accent: "[#DF1067]",
            border: "border-[#DF1067]",
          }}
          rates={{
            perDelivery: 30,
            bonusThreshold: 120,
            bonus: 2000,
          }}
        />
      </section>

      {/* CTA */}
      <section className="bg-[#DF1067] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <DevicePhoneMobileIcon className="h-12 w-12 mx-auto mb-6 text-[#f8a735]" />
          <h2 className="text-3xl font-bold mb-6">Začněte ihned!</h2>
          <button className="bg-[#f8a735] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#e8972a] transition-colors">
            Připojit se k Foodora
          </button>
        </div>
      </section>
    </>
  );
}
