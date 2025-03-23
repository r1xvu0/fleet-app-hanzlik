// app/how-it-works/page.js
import { 
    DocumentTextIcon, 
    ShieldCheckIcon, 
    AcademicCapIcon, 
    TruckIcon, 
    ClockIcon, 
    QuestionMarkCircleIcon,
    CheckIcon
  } from '@heroicons/react/24/outline';
  import Layout from '@/components/Layout';
  
  export default function HowItWorks() {
    return (
      <>
        {/* Hero Section */}
        <section className="bg-indigo-900 text-white py-32 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Jak se stát řidičem naší flotily</h1>
            <p className="text-xl">Jednoduchý proces od registrace po první výdělek</p>
          </div>
        </section>
  
        {/* Process Timeline */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-indigo-100 transform -translate-x-1/2 -z-10"></div>
  
              {/* Steps */}
              <div className="space-y-24 md:space-y-0">
                {[
                  {
                    icon: DocumentTextIcon,
                    title: "Online Registrace",
                    description: "Vyplňte základní údaje ve formuláři",
                    time: "5 minut"
                  },
                  {
                    icon: ShieldCheckIcon,
                    title: "Ověření Dokumentů",
                    description: "Kontrola řidičského průkazu a dalších dokumentů",
                    time: "24h proces"
                  },
                  {
                    icon: AcademicCapIcon,
                    title: "Školení",
                    description: "Online kurz a praktický nácvik",
                    time: "2-4 hodiny"
                  },
                  {
                    icon: TruckIcon,
                    title: "Start Práce",
                    description: "Přijímání první zakázky přes aplikaci",
                    time: "Okamžitý start"
                  }
                ].map((step, index) => (
                  <div 
                    key={index} 
                    className={`relative md:flex ${index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'} mb-24 md:mb-32`}
                  >
                    {/* Timeline Dot */}
                    <div className="hidden md:block absolute left-1/2 -ml-2.5 top-12 w-5 h-5 bg-indigo-600 rounded-full"></div>
  
                    <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                        {/* Icon Container */}
                        <div className="bg-indigo-100 w-16 h-16 rounded-full flex-shrink-0 flex items-center justify-center">
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
                          <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                          <p className="text-gray-600">{step.description}</p>
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
        <section className="bg-gray-50 py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Co potřebujete k začátku</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Dokumenty</h3>
                <ul className="space-y-4">
                  {[
                    'Platný řidičský průkaz',
                    'Průkaz profesní způsobilosti',
                    'Doklad totožnosti',
                    'Žádost o registraci'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-sm">
                <h3 className="text-xl font-bold mb-4">Vybavení</h3>
                <ul className="space-y-4">
                  {[
                    'Chytrý telefon s internetem',
                    'Vlastní nebo půjčené vozidlo',
                    'Aktivní účet v aplikaci',
                    'Platební metoda pro výběr peněz'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
  
        {/* FAQ Section */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center flex items-center justify-center">
              <QuestionMarkCircleIcon className="w-8 h-8 mr-3 text-indigo-600" />
              Často kladené dotazy
            </h2>
            <div className="space-y-6">
              {[
                {
                  question: "Jak často vyplácíte výdělky?",
                  answer: "Výdělky vyplácíme každý týden, vždy v pátek dopoledne"
                },
                {
                  question: "Musím mít vlastní auto?",
                  answer: "Není nutné - nabízíme možnost pronájmu vozidel"
                },
                {
                  question: "Je školení placené?",
                  answer: "Základní školení poskytujeme zdarma všem novým řidičům"
                },
                {
                  question: "Jak funguje pojištění?",
                  answer: "Všechna vozidla mají kompletní pojištění v ceně pronájmu"
                }
              ].map((faq, index) => (
                <div key={index} className="border rounded-lg p-6 hover:border-indigo-100 transition-colors">
                  <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="bg-indigo-900 text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Jste připraveni začít?</h2>
            <p className="mb-8 text-lg">Registrace zabere méně než 5 minut</p>
            <div className="flex flex-col md:flex-row justify-center gap-4">
              <button className="bg-white text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
                Začít registraci
              </button>
              <button className="border border-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                Kontaktovat podporu
              </button>
            </div>
          </div>
        </section>
      </>
    );
  }