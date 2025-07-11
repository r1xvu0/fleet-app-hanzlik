// app/partners/uber/page.js
import EarningsCalculator from "@/components/EarningsCalculator";
import Link from "next/link";
import {
  ShoppingBagIcon,
  ClockIcon,
  CurrencyEuroIcon,
  UserIcon,
  DevicePhoneMobileIcon,
  CheckIcon,
  ArrowRightIcon,
  StarIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

export default function UberPage() {
  return (
    <>
      {/* Hero Section - Uber Black */}
      <section className="relative bg-[#000000] text-white py-24 md:py-32 px-4 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-[#3FC3C6]"></div>
          <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-[#3FC3C6]"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="bg-white/10 p-6 rounded-full w-24 h-24 mx-auto mb-8 backdrop-blur-sm flex items-center justify-center">
            <ShoppingBagIcon className="h-16 w-16 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Spolupracujte s Uberem přes naši flotilu
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-gray-300">
            Nejvyšší výdělky v Praze s prémiovou podporou
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:space-x-6">
            <Link
              href="/contact"
              className="border-2 border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl text-lg font-semibold transition-all"
            >
              Připojit se k Uberu
              <ArrowRightIcon className="w-5 h-5 ml-2 inline-block" />
            </Link>
            <Link
              href="/how-it-works"
              className="border-2 border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl text-lg font-semibold transition-all"
            >
              Více informací
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section - Uber Blue */}
      {/* <section className="bg-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Proč spolupracovat s Uber
          </h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
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
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="bg-gray-50 p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <stat.icon className={`h-10 w-10 ${stat.color}`} />
                </div>
                <div className={`text-3xl font-bold mb-3 ${stat.color}`}>
                  {stat.value}
                </div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* How It Works */}
      {/* <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Jak začít s Uber
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Registrace", "Schválení", "Školení", "Jízdy"].map(
              (step, index) => (
                <div key={step} className="text-center p-6 relative">
                  <div className="bg-[#3FC3C6] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white font-bold text-2xl">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900">
                    {step}
                  </h3>
                  Line connector between steps
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/3 left-[60%] w-[80%] h-0.5 bg-gray-200"></div>
                  )}
                </div>
              ),
            )}
          </div>
        </div>
      </section> */}

      {/* Requirements & Benefits */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Co potřebujete a co získáte
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] text-white p-8 rounded-2xl shadow-xl transition-transform hover:scale-[1.02]">
              <div className="mb-6 flex items-center">
                <div className="bg-white/10 p-3 rounded-xl mr-4">
                  <CheckIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Požadavky pro řidiče</h3>
              </div>
              <ul className="space-y-5">
                {[
                  // "Vůz do 8 let stáří",
                  "Řidičský průkaz skupiny B",
                  "Profesní průkaz řidiče (žlutá karta)",
                  "Chytrý telefon s datovým připojením",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckIcon className="w-5 h-5 flex-shrink-0 text-white mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#000000] to-[#1A1A1A] text-white p-8 rounded-2xl shadow-xl transition-transform hover:scale-[1.02]">
              <div className="mb-6 flex items-center">
                <div className="bg-white/10 p-3 rounded-xl mr-4">
                  <StarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Výhody s námi</h3>
              </div>
              <ul className="space-y-5">
                {[
                  "Pravidelné týdenní výplaty",
                  // "24/7 podpora",
                  "Komplexní pojištění vozidla",
                  "Zcela flexibilní pracovní doba",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckIcon className="w-5 h-5 flex-shrink-0 text-white mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <section className="py-20 px-4 bg-gray-50">
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
      <section className="relative bg-gradient-to-br from-[#000000] to-[#1A1A1A] text-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#3FC3C6] rounded-full"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-[#3FC3C6] rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <DevicePhoneMobileIcon className="h-16 w-16 mx-auto mb-6 text-white" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Začněte vydělávat již dnes!
          </h2>
          <p className="text-gray-300 mb-10 max-w-2xl mx-auto">
          Připojte se k našemu týmu profesionálních řidičů a využijte všech výhod, které Bolt ve spolupráci s naší flotilou nabízí.
          </p>
          <Link
            href="/contact"
            className="border-2 border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl text-lg font-semibold transition-all inline-flex items-center"
          >
            Připojit se k Uberu
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
