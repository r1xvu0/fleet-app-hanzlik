import CarRental from "@/components/CarRental";
import ContactSection from "@/components/ContactSection";
import Layout from "@/components/Layout";
import {
  CheckIcon,
  BoltIcon,
  TruckIcon,
  UserIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-indigo-900 text-white py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join Prague's Leading Taxi Fleet
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Maximize your earnings with our advanced booking system, premium
            rates, and 24/7 driver support
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-indigo-500 hover:bg-indigo-400 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Join Now
            </button>
            <button className="border border-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="bg-indigo-50 py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
          {[
            { number: '300+', title: 'Vozidel', description: 'v provozu' },
            { number: '315+', title: 'Řidičů', description: 'DriverHome' },
            { number: '700+', title: 'Kurýrů', description: 'DriverHome' },
            { number: '5.000+', title: 'Přepravených', description: 'zákazníků týdně' },
          ].map((stat, index) => (
            <div key={index} className="p-6">
              <div className="text-4xl font-bold text-indigo-900 mb-2">{stat.number}</div>
              <h3 className="text-xl font-semibold mb-1">{stat.title}</h3>
              <p className="text-gray-600 text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Opportunity Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Hledáte novou pracovní příležitost jako řidič nebo kurýr?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              U nás si můžete vyzkoušet jak práci řidiče, tak i kurýra. A
              zjistit, která z mobilních aplikací vám nejvíce vyhovuje.
              Spolupracujeme totiž se všemi! Aplikace můžete u nás i kombinovat
              a vydělat si tak nadstandardní peníze a zároveň pracovat kdy se
              vám to hodí!
            </p>
            <div className="space-y-4">
              {[
                "Proč jezdit s námi?",
                "Mohu si od vás půjčit auto?",
                "Kam vám můžu napsat?",
                "Jak funguje spolupráce s naší flotilou?",
              ].map((question, index) => (
                <div key={index} className="flex items-center">
                  <CheckIcon className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-lg">{question}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 h-96 rounded-xl"></div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="py-20 px-4 bg-indigo-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Co budete potřebovat k jízdě?
          </h2>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Taxi Driver Requirements */}
            <div className="bg-white text-gray-900 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <TruckIcon className="w-8 h-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-bold">Řidič TAXI</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Vlastní auto max 20 let staré nebo od nás půjčené",
                  "Řidičský průkaz a žlutou kartu",
                  "Mít alespoň 21 let",
                  "Aplikace BOLT, UBER, LIFTAGO*",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Courier Requirements */}
            <div className="bg-white text-gray-900 p-8 rounded-xl">
              <div className="flex items-center mb-6">
                <BoltIcon className="w-8 h-8 text-indigo-600 mr-3" />
                <h3 className="text-xl font-bold">Kurýr JÍDLA</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Dopravní prostředek bez omezení (kolo, koloběžka, skútr, auto)",
                  "Mít alespoň 15 let",
                  "Aplikaci BOLT FOOD, WOLT, FOODORA*",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-2 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Note Section */}
          <div className="bg-indigo-100 text-indigo-900 p-6 rounded-lg">
            <div className="flex items-start">
              <DevicePhoneMobileIcon className="w-6 h-6 mr-3 flex-shrink-0" />
              <p>
                *Nemáte aplikace nebo vám nefungují? Nevadí! Zdarma vám je
                pomůžeme zaregistrovat a zprovoznit. Napište nám zprávu!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Začněte pracovat již zítra!</h2>
          <p className="mb-8 text-lg text-gray-600">Stačí vyplnit jednoduchý formulář a my se vám ozveme do 24 hodin</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">
              Přihlásit se jako řidič
            </button>
            <button className="bg-gray-800 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-700 transition-colors">
              Přihlásit se jako kurýr
            </button>
          </div>
        </div>
      </section> */}

      <CarRental />
      <ContactSection />
    </>
  );
}
