// app/faq/page.js
import {
  QuestionMarkCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  PhoneIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function FAQPage() {
  const faqCategories = [
    {
      name: "Registrace a dokumenty",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      items: [
        {
          question: "Jaké dokumenty potřebuji k registraci?",
          answer:
            "Stačí platný řidičský průkaz, občanský průkaz a žádost o registraci. Pro taxi navíc potřebujete žlutou kartu.",
        },
        {
          question: "Jak dlouho trvá schválení registrace?",
          answer: "Maximálně 24 hodin po doručení všech dokumentů.",
        },
      ],
    },
    {
      name: "Finanční otázky",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
      items: [
        {
          question: "Jak často vyplácíte výdělky?",
          answer: "Výdělky vyplácíme každý týden, vždy v pátek dopoledne. Peníze se připíší na váš účet během následujícího pracovního dne.",
        },
        {
          question: "Jaké jsou poplatky flotily?",
          answer:
            "Základní poplatek je 15% z jízdného, s možností snížení na 12% při vyšším počtu jízd.",
        },
        {
          question: "Můžu změnit tarif později?",
          answer: "Ano, tarif můžete změnit kdykoliv s měsíční výpovědní lhůtou",
        },
        {
          question: "Jsou nějaké skryté poplatky?",
          answer: "Ne, všechny poplatky jsou jasně uvedeny v ceníku",
        },
        {
          question: "Co když nebudu spokojen?",
          answer: "Nabízíme 14-denní garanci vrácení peněz",
        },
        {
          question: "Musím mít vlastní auto?",
          answer: "Není nutné - nabízíme možnost pronájmu vozidel včetně kompletního pojištění a údržby.",
        },
        {
          question: "Jak funguje pojištění?",
          answer: "Všechna naše vozidla mají kompletní pojištění v ceně pronájmu, včetně havarijního pojištění a pojištění odpovědnosti.",
        },
      ],
    },
    {
      name: "Technické otázky",
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      items: [
        {
          question: "Co když mi nefunguje aplikace?",
          answer:
            "Naše technická podpora je dostupná pět dní v týdnu od 8:00 do 16:00 hodin na .",
        },
        {
          question: "Mohu používat více aplikací současně?",
          answer:
            "Ano, naše flotila podporuje kombinaci Bolt a Uber v rámci jednoho účtu.",
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-950 text-white py-24 md:py-32 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-400 rounded-full"></div>
          <div className="absolute left-0 bottom-0 -mb-10 -ml-10 w-40 h-40 bg-indigo-400 rounded-full"></div>
          <div className="absolute right-1/3 top-1/4 w-24 h-24 bg-indigo-500 rounded-full"></div>
          <div className="absolute left-1/4 bottom-1/3 w-16 h-16 bg-indigo-600 rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="bg-white/10 p-6 rounded-full w-24 h-24 mx-auto mb-8 backdrop-blur-sm flex items-center justify-center">
            <QuestionMarkCircleIcon className="h-14 w-14" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Často kladené dotazy
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto text-indigo-100">
            Rychlé odpovědi na vaše nejčastější otázky
          </p>
          
          {/* Search Box - Hero Version */}
          <div className="max-w-2xl mx-auto relative mt-10">
            <input
              type="text"
              placeholder="Hledat v dotazech..."
              className="w-full p-4 pl-12 border-2 border-white/30 bg-white/10 backdrop-blur-sm rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent"
            />
            <MagnifyingGlassIcon className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/70" />
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Categories Nav */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {faqCategories.map((category, index) => (
              <a 
                key={index} 
                href={`#category-${index}`}
                className="bg-indigo-50 hover:bg-indigo-100 text-indigo-800 px-6 py-3 rounded-xl flex items-center transition-colors"
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </a>
            ))}
          </div>

          {/* FAQ Categories */}
          <div className="space-y-16">
            {faqCategories.map((category, index) => (
              <div id={`category-${index}`} key={index} className="scroll-mt-24 border-b border-gray-100 pb-12 last:border-b-0">
                <h2 className="text-2xl font-bold mb-8 flex items-center text-gray-900">
                  <div className="bg-indigo-100 text-indigo-800 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    {category.icon}
                  </div>
                  {category.name}
                </h2>
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                      <h3 className="text-lg font-semibold mb-3 flex items-center text-gray-900">
                        <ChevronRightIcon className="w-5 h-5 text-indigo-600 mr-3 flex-shrink-0" />
                        {item.question}
                      </h3>
                      <p className="text-gray-600 ml-8 pl-2 border-l-2 border-indigo-100">
                        {item.answer}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Support CTA */}
      <section className="relative bg-gradient-to-br from-indigo-50 to-white py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute right-1/4 top-1/4 w-64 h-64 bg-indigo-300 rounded-full"></div>
          <div className="absolute left-1/4 bottom-1/4 w-64 h-64 bg-indigo-300 rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <div className="bg-indigo-100 p-4 rounded-xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
            <ChatBubbleBottomCenterTextIcon className="h-10 w-10 text-indigo-600" />
          </div>
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Nenašli jste odpověď?</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Náš tým vám rád pomůže s jakýmkoliv dotazem, kontaktujte nás
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:+420774982052"
              className="bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center border border-gray-100"
            >
              <div className="bg-indigo-50 p-2 rounded-lg mr-3">
                <PhoneIcon className="w-5 h-5 text-indigo-600" />
              </div>
              <span className="font-medium text-gray-800">+420 774 982 052</span>
            </a>
            <a
              href="mailto:podpora@driverhome.cz"
              className="bg-white px-6 py-4 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center border border-gray-100"
            >
              <div className="bg-indigo-50 p-2 rounded-lg mr-3">
                <EnvelopeIcon className="w-5 h-5 text-indigo-600" />
              </div>
              <span className="font-medium text-gray-800">flotila.praha1@gmail.com</span>
            </a>
          </div>
          
          <div className="mt-12">
            <Link
              href="/contact"
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-block"
            >
              Kontaktujte nás
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
