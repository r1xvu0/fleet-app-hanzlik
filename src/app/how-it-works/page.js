// app/how-it-works/page.js
import {
  DocumentTextIcon,
  ShieldCheckIcon,
  TruckIcon,
  ClockIcon,
  QuestionMarkCircleIcon,
  CheckIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import EarningsCalculator from '@/components/EarningsCalculator';

export default function HowItWorks() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-950 text-white py-12 md:py-16 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-400 rounded-full"></div>
          <div className="absolute left-0 bottom-0 -mb-10 -ml-10 w-40 h-40 bg-indigo-400 rounded-full"></div>
          <div className="absolute right-1/3 top-1/4 w-24 h-24 bg-indigo-500 rounded-full"></div>
          <div className="absolute left-1/4 bottom-1/3 w-16 h-16 bg-indigo-600 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Jak se stát řidičem naší flotily
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto text-indigo-100">
            Jednoduchý proces od registrace po první výdělek
          </p>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
            Cesta k úspěšné spolupráci
          </h2>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-100 transform -translate-x-1/2 -z-10"></div>

            {/* Steps */}
            <div className="space-y-12 md:space-y-0">
              {[
                {
                  icon: DocumentTextIcon,
                  title: "Online registrace",
                  description: "Vyplňte základní údaje ve formuláři a přiložte potřebné dokumenty",
                  time: "5 minut"
                },
                {
                  icon: ShieldCheckIcon,
                  title: "Ověření dokumentů",
                  description: "Náš tým zkontroluje váš řidičský průkaz, profesní průkaz a další potřebné dokumenty",
                  time: "24h proces"
                },
                {
                  icon: TruckIcon,
                  title: "Start práce",
                  description: "Začněte přijímat zakázky přímo v aplikaci a vydělávat s naší flotilou",
                  time: "Okamžitý start"
                }
              ].map((step, index) => (
                <div
                  key={index}
                  className={`relative md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} mb-12 md:mb-16`}
                >
                  {/* Timeline Dot */}
                  <div className="hidden md:block absolute left-1/2 -ml-3 top-12 w-6 h-6 bg-indigo-600 rounded-full shadow-md"></div>

                  <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
                      <div className="flex flex-col md:flex-row items-start gap-6">
                        {/* Icon Container */}
                        <div className="bg-indigo-100 w-16 h-16 rounded-xl flex-shrink-0 flex items-center justify-center">
                          <step.icon className="w-8 h-8 text-indigo-600" />
                        </div>

                        {/* Content */}
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-sm font-semibold bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full">
                              Krok {index + 1}
                            </span>
                            <span className="text-gray-500 text-sm flex items-center">
                              <ClockIcon className="w-4 h-4 mr-1" />
                              {step.time}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold mb-2 text-gray-900">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Requirements Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Co potřebujete k začátku</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className="bg-indigo-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <DocumentTextIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Dokumenty</h3>
              <ul className="space-y-4">
                {[
                  'Platný řidičský průkaz',
                  'Průkaz profesní způsobilosti řidiče',
                  'Doklad totožnosti (OP nebo pas)',
                  // 'Výpis z rejstříku trestů (ne starší 3 měsíců)'
                ].map((item, index) => (
                  <li key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100">
              <div className="bg-indigo-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <TruckIcon className="w-8 h-8 text-indigo-600" />
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Vybavení</h3>
              <ul className="space-y-4">
                {[
                  'Chytrý telefon s datovým připojením',
                  'Půjčené vozidlo od naší flotily',
                  'Aktivní účet v aplikaci partnerů (Bolt/Uber)',
                  // 'Bankovní účet pro výplaty výdělků'
                ].map((item, index) => (
                  <li key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                    <CheckIcon className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>



      {/* Earnings Calculator Section */}
      {/* <EarningsCalculator /> */}

      {/* CTA Section */}
      {/* <section className="relative bg-gradient-to-br from-indigo-600 to-indigo-800 py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute right-1/4 top-1/4 w-64 h-64 bg-white rounded-full"></div>
            <div className="absolute left-1/4 bottom-1/4 w-64 h-64 bg-white rounded-full"></div>
          </div>
          
          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">
              Jste připraveni začít?
            </h2>
            <p className="text-indigo-100 mb-10 max-w-2xl mx-auto">
              Registrace zabere méně než 5 minut a můžete začít vydělávat ještě tento týden!
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link 
                href="/contact"
                className="bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-flex items-center justify-center"
              >
                Začít registraci
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white hover:bg-white/10 px-8 py-4 rounded-xl text-lg font-semibold text-white transition-all inline-flex items-center justify-center"
              >
                Kontaktovat podporu
              </Link>
            </div>
          </div>
        </section> */}
    </>
  );
}