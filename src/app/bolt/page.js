// app/drivers/bolt/page.js
import EarningsCalculator from "@/components/EarningsCalculator";
import Link from "next/link";
import {
  BoltIcon,
  ChartBarIcon,
  UserGroupIcon,
  PhoneIcon,
  ClockIcon,
  CheckIcon,
  InformationCircleIcon,
  ArrowRightIcon,
  StarIcon,
} from "@heroicons/react/24/outline";

export default function BoltPage() {
  return (
    <>
      {/* Hero Section - Bolt Black & Green */}
      <section className="relative bg-gradient-to-br from-[#34BB78] to-[#219359] text-white py-24 md:py-32 px-4 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#8CFF00]"></div>
          <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-[#8CFF00]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="bg-white/10 p-6 rounded-full w-24 h-24 mx-auto mb-8 backdrop-blur-sm flex items-center justify-center">
            <BoltIcon className="h-16 w-16 text-[#8CFF00]" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Spolupracujte s Bolt přes naši flotilu
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto">
            Nejvyšší výdělky v Praze s prémiovou podporou
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6 sm:space-x-6">
            <Link href="/contact" className="bg-[#212121] hover:bg-[#3a3a3a] text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
              Přihlásit se k Bolt
              <ArrowRightIcon className="w-5 h-5 ml-2 inline-block" />
            </Link>
            <Link href="/how-it-works" className="border-2 border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl text-lg font-semibold transition-all">
              Více informací
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      {/* <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Výhody spolupráce s Bolt
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: ChartBarIcon,
                title: "Až o 25% vyšší výdělky",
                text: "Exkluzivní prémiové tarify pro naše řidiče",
                color: "text-[#34BB78]",
              },
              {
                icon: UserGroupIcon,
                title: "24/7 Česká podpora",
                text: "Specializovaný tým pro všechny naše řidiče",
                color: "text-[#34BB78]",
              },
              {
                icon: PhoneIcon,
                title: "Dedikovaná aplikace",
                text: "Optimalizovaná pro efektivní řízení flotily",
                color: "text-[#34BB78]",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="text-center p-8 border rounded-xl hover:shadow-lg transition-all bg-white hover:border-[#34BB78]"
              >
                <div className="bg-[#f0fdf4] p-4 rounded-full w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <item.icon className={`h-10 w-10 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* How It Works */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Jak začít s Bolt
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Registrace", "Schválení", "Školení", "Výdělek"].map(
              (step, index) => (
                <div key={step} className="text-center p-6 relative">
                  <div className="bg-[#34BB78] w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <span className="text-white font-bold text-2xl">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-xl text-gray-900">{step}</h3>
                  {/* Line connector between steps */}
                  {index < 3 && (
                    <div className="hidden md:block absolute top-1/3 left-[60%] w-[80%] h-0.5 bg-gray-200"></div>
                  )}
                </div>
              ),
            )}
          </div>
        </div>
      </section>

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
                  <CheckIcon className="w-8 h-8 text-[#3FC3C6]" />
                </div>
                <h3 className="text-2xl font-bold">Požadavky pro řidiče</h3>
              </div>
              <ul className="space-y-5">
                {[
                  "Vůz do 8 let stáří",
                  "Řidičský průkaz skupiny B",
                  "Profesní průkaz řidiče",
                  "Smartphone s datovým připojením",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckIcon className="w-5 h-5 flex-shrink-0 text-[#3FC3C6] mr-3" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-[#34BB78] to-[#219359] text-white p-8 rounded-2xl shadow-xl transition-transform hover:scale-[1.02]">
              <div className="mb-6 flex items-center">
                <div className="bg-white/10 p-3 rounded-xl mr-4">
                  <StarIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Výhody s námi</h3>
              </div>
              <ul className="space-y-5">
                {[
                  "Nejnižší provize na trhu",
                  "24/7 podpora v češtině",
                  "Komplexní pojištění vozidla",
                  "Zcela flexibilní pracovní rozvrh",
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
      <section className="py-20 px-4 bg-white">
        <EarningsCalculator
          brandColors={{
            text: "text-[#34BB78]",
            accent: "[#34BB78]",
          }}
          rates={{
            perRide: 45, // Kč per ride
            bonus: 2000, // Weekly bonus
          }}
        />
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-r from-[#34BB78] to-[#219359] py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 w-64 h-64 bg-[#8CFF00] rounded-full"></div>
          <div className="absolute left-0 bottom-0 w-64 h-64 bg-[#8CFF00] rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Začněte vydělávat již dnes!
          </h2>
          <div className="max-w-xl mx-auto mb-10 text-white/80">
            <p>Připojte se k našemu týmu profesionálních řidičů a využijte všech výhod, které Bolt ve spolupráci s naší flotilou nabízí.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-900 transition-all shadow-lg hover:shadow-xl">
            Přihlásit se k Bolt
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </>
  );
}
