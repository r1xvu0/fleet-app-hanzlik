import CarRental from "@/components/CarRental";
import ContactSection from "@/components/ContactSection";
import {
  CheckIcon,
  BoltIcon,
  TruckIcon,
  UserIcon,
  DevicePhoneMobileIcon,
  ArrowRightIcon,
  StarIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-950 text-white py-24 md:py-36 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-400 rounded-full"></div>
          <div className="absolute left-0 bottom-0 -mb-10 -ml-10 w-40 h-40 bg-indigo-400 rounded-full"></div>
          <div className="absolute right-1/3 top-1/4 w-24 h-24 bg-indigo-500 rounded-full"></div>
          <div className="absolute left-1/4 bottom-1/3 w-16 h-16 bg-indigo-600 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Staň se součástí moderní flotily
            <span className="block bg-clip-text text-transparent bg-gradient-to-r from-indigo-200 to-sky-200">
              Flotila Praha
            </span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto text-indigo-100">
            Ať už jsi ostřílený řidič, nebo teprve začínáš, ve flotile tě rádi přivítáme!<br />
            Stačí vyplnit kontaktní formulář, napsat nebo zavolat.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-6">
            <Link href="/contact" className="bg-indigo-500 hover:bg-indigo-400 px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl">
              Přidejte se k nám
              <ArrowRightIcon className="w-5 h-5 ml-2 inline-block" />
            </Link>
            <Link href="/how-it-works" className="border-2 border-white/30 backdrop-blur-sm bg-white/10 hover:bg-white/20 px-8 py-4 rounded-xl text-lg font-semibold transition-all">
              Více informací
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gradient-to-b from-white to-indigo-50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-indigo-900">Proč jezdit s námi?</h2>
          <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
            Proč si jako řidič vybrat právě naši flotilu?
          </p>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: <StarIcon className="w-10 h-10 text-indigo-500" />,
                title: "Ověření partneři",
                description: "Spolupracujeme s platformami jako Bolt a Uber",
              },
              {
                icon: <CurrencyDollarIcon className="w-10 h-10 text-indigo-500" />,
                title: "Moderní vozidla",
                description: "Každý z nás jezdí s prověřeným autem v perfektním stavu. Žádné starosti s opravami, jen sedneš a jedeš",
              },
              {
                icon: <ClockIcon className="w-10 h-10 text-indigo-500" />,
                title: "Flexibilita",
                description: "Jezdi kdy chceš. V týdnu nebo o víkendu, přes den nebo noc.",
              },
              // {
              //   icon: <ChartBarIcon className="w-10 h-10 text-indigo-500" />,
              //   title: "Podpora a zázemí",
              //   description: "Nefunguje něco? Máš dotaz? Narozdíl od jiných, jsme tu skutečně pro tebe.",
              // }
            ].map((feature, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all">
                <div className="bg-indigo-50 w-16 h-16 mx-auto mb-6 rounded-lg flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-indigo-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 text-indigo-900">
              Hledáte novou pracovní příležitost jako řidič?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              U nás si můžete vyzkoušet práci řidiče. A
              zjistíte, která z mobilních aplikací vám nejvíce vyhovuje.
              Spolupracujeme jak s Boltem, tak i s Uberem.
            </p>
            <div className="space-y-4">
              {[
                "Proč jezdit s námi?",
                "Mohu si od vás půjčit auto?",
                "Kam vám můžu napsat?",
                "Jak funguje spolupráce s naší flotilou?",
              ].map((question, index) => (
                <div key={index} className="flex items-center bg-indigo-50 p-3 rounded-lg hover:bg-indigo-100 transition-colors">
                  <CheckIcon className="w-6 h-6 text-indigo-600 mr-3 flex-shrink-0" />
                  <span className="text-lg text-gray-700">{question}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-3xl shadow-lg p-6 h-96 flex items-center justify-center">
            <img 
              src="https://placehold.co/600x400/indigo/white?text=Car+Image" 
              alt="Taxi fleet" 
              className="w-full h-auto max-h-80 object-cover rounded-2xl shadow-inner"
            />
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Co budete potřebovat k jízdě?
          </h2>

          <div className="grid md:grid-cols-1 gap-8 mb-12">
            {/* Taxi Driver Requirements */}
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transition-transform hover:scale-[1.02]">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-600/20 p-3 rounded-xl">
                  <TruckIcon className="w-8 h-8 text-indigo-200" />
                </div>
                <h3 className="text-2xl font-bold ml-4">Řidič TAXI</h3>
              </div>
              <ul className="space-y-5">
                {[
                  // "Vlastní auto max 20 let staré nebo od nás půjčené",
                  "Řidičský průkaz a žlutou kartu",
                  "Mít alespoň 21 let",
                  "Aplikace BOLT a UBER",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-400 mr-3 mt-1" />
                    <span className="text-indigo-100">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          {/* Courier Requirements
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 transition-transform hover:scale-[1.02]">
            <div className="flex items-center mb-6">
              <div className="bg-indigo-600/20 p-3 rounded-xl">
                <BoltIcon className="w-8 h-8 text-indigo-200" />
              </div>
              <h3 className="text-2xl font-bold ml-4">Kurýr JÍDLA</h3>
            </div>
            <ul className="space-y-5">
              {[
                "Dopravní prostředek bez omezení (kolo, koloběžka, skútr, auto)",
                "Mít alespoň 15 let",
                "Aplikaci BOLT FOOD, WOLT, FOODORA*",
              ].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-400 mr-3 mt-1" />
                  <span className="text-indigo-100">{item}</span>
                </li>
              ))}
            </ul>
          </div> */}
          </div>

          {/* Note Section */}
          <div className="bg-indigo-600/30 border border-indigo-400/30 p-6 rounded-xl max-w-3xl mx-auto">
            <div className="flex items-start">
              <DevicePhoneMobileIcon className="w-6 h-6 mr-3 flex-shrink-0 text-indigo-300" />
              <p className="text-indigo-100">
                *Nemáte aplikace, nebo vám nefungují? Nevadí! Zdarma vám je
                pomůžeme zaregistrovat a zprovoznit. Napište nám zprávu!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      {/* <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-16 text-indigo-900">
            Join Our Growing Community
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "500+", label: "Active Drivers" },
              { number: "35K+", label: "Rides Monthly" },
              { number: "98%", label: "Customer Satisfaction" },
              { number: "24/7", label: "Support Available" },
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <CarRental />
      <ContactSection />
    </>
  );
}
