// app/partners/wolt/page.js
"use client";
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

export default function WoltPage() {
  return (
    <>
      {/* Hero Section - Wolt Blue */}
      <section className="bg-[#00C1E8] text-white py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <ShoppingBagIcon className="h-20 w-20 mx-auto mb-6 text-[#00A1C2]" />
          <h1 className="text-4xl font-bold mb-6">
            Spolupracujte s Wolt přes naši flotilu
          </h1>
          <p className="text-xl">
            Nejflexibilnější doručování potravin v Praze
          </p>
        </div>
      </section>

      {/* Stats - Wolt Secondary Colors */}
      {/* <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: CurrencyEuroIcon,
              value: "35-45 Kč",
              label: "Průměrný výdělek/dodávku",
              color: "text-[#003dae]",
            },
            {
              icon: ClockIcon,
              value: "<30min",
              label: "Průměrný čas doručení",
              color: "text-[#6ad6ff]",
            },
            {
              icon: UserIcon,
              value: "95%",
              label: "Spokojených partnerů",
              color: "text-[#003dae]",
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
      {/* <section className="bg-[#f5f9ff] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#003dae]">
            Jak začít s Wolt
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Registrace", "Školení", "Aktivace", "Doručování"].map(
              (step, index) => (
                <div key={step} className="text-center p-4">
                  <div className="bg-[#6ad6ff] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-[#003dae]">
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
          <div className="bg-[#00C1E8] text-white p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Co potřebujete</h3>
            <ul className="space-y-4">
              {[
                "Dopravní prostředek",
                "Smartphone",
                "18+ let",
                "Časová flexibilita",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-[#00A1C2] mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#00C1E8] text-white p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4">Výhody s námi</h3>
            <ul className="space-y-4">
              {[
                "Bonusové programy",
                "Flexibilní rozvrh",
                "Garantované výdělky",
                "Podpora 24/7",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-[#00A1C2] mr-2" />
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
            text: "text-[#6ad6ff]",
            accent: "[#6ad6ff]",
            border: "border-[#6ad6ff]",
          }}
          rates={{
            perDelivery: 32,
            bonusThreshold: 110,
            bonus: 1800,
          }}
        />
      </section>

      {/* CTA */}
      <section className="bg-[#00C1E8] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <DevicePhoneMobileIcon className="h-12 w-12 mx-auto mb-6 text-[#00A1C2]" />
          <h2 className="text-3xl font-bold mb-6">
            Začněte doručovat již dnes!
          </h2>
          <button className="bg-[#00B6DB] text-[#003dae] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#00819C] transition-colors">
            Připojit se k Wolt
          </button>
        </div>
      </section>
    </>
  );
}
