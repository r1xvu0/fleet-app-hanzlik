// app/partners/uber/page.js
import EarningsCalculator from "@/components/EarningsCalculator";
import {
  ShoppingBagIcon,
  ClockIcon,
  CurrencyEuroIcon,
  UserIcon,
  DevicePhoneMobileIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

export default function UberPage() {
  return (
    <>
      {/* Hero Section - Uber Black */}
      <section className="bg-[#000000] text-white py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <ShoppingBagIcon className="h-20 w-20 mx-auto mb-6 text-[#3FC3C6]" />
          <h1 className="text-4xl font-bold mb-6">
            Spolupracujte s Uber přes naši flotilu
          </h1>
          <p className="text-xl">Největší síť řidičů v České republice</p>
        </div>
      </section>

      {/* Stats Section - Uber Blue */}
      {/* <div className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: CurrencyEuroIcon,
              value: "40-60 Kč",
              label: "Průměrný výdělek/jízdu",
              color: "text-[#09091A]",
            },
            {
              icon: ClockIcon,
              value: "<25min",
              label: "Čekací doba na zákazníka",
              color: "text-[#3FC3C6]",
            },
            {
              icon: UserIcon,
              value: "97%",
              label: "Spokojených partnerů",
              color: "text-[#09091A]",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
            >
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
      {/* <section className="bg-[#F8F9FA] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-[#09091A]">
            Jak začít s Uber
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Registrace", "Schválení", "Školení", "Jízdy"].map(
              (step, index) => (
                <div key={step} className="text-center p-4">
                  <div className="bg-[#3FC3C6] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-[#09091A]">
                    {step}
                  </h3>
                </div>
              ),
            )}
          </div>
        </div>
      </section> */}

      {/* Requirements & Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-[#000000] text-white p-8 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold mb-4">Požadavky pro řidiče</h3>
            <ul className="space-y-4">
              {[
                "Vůz do 8 let",
                "ŘP skupiny B",
                "Profesní průkaz",
                "Smartphone",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-[#3FC3C6] mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#000000] text-white p-8 rounded-xl shadow-xl">
            <h3 className="text-xl font-bold mb-4">Výhody s námi</h3>
            <ul className="space-y-4">
              {[
                "Nejnižší provize",
                "24/7 podpora",
                "Pojištění vozidla",
                "Flexibilní rozvrh",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <CheckIcon className="w-5 h-5 text-[#09091A] mr-2" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <EarningsCalculator
          brandColors={{
            text: "text-[#3FC3C6]",
            accent: "[#3FC3C6]",
          }}
          rates={{
            perRide: 40,
            bonus: 1500,
          }}
        />
      </section>

      {/* CTA Section */}
      <section className="bg-[#000000] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <DevicePhoneMobileIcon className="h-12 w-12 mx-auto mb-6 text-[#3FC3C6]" />
          <h2 className="text-3xl font-bold mb-6">
            Začněte vydělávat již dnes!
          </h2>
          <button className="bg-white text-[#000000] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#35ADB0] transition-colors">
            Připojit se k Uber
          </button>
        </div>
      </section>
    </>
  );
}
