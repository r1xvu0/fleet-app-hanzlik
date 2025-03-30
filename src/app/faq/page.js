// app/faq/page.js
import {
  QuestionMarkCircleIcon,
  ChatBubbleBottomCenterTextIcon,
  PhoneIcon,
  EnvelopeIcon,
} from "@heroicons/react/24/outline";

export default function FAQPage() {
  const faqCategories = [
    {
      name: "Registrace a dokumenty",
      items: [
        {
          question: "Jaké dokumenty potřebuji k registraci?",
          answer:
            "Stačí platný řidičský průkaz, občanský průkaz a žádost o registraci. Pro taxi navíc potřebujete profesní průkaz.",
        },
        {
          question: "Jak dlouho trvá schválení registrace?",
          answer: "Maximálně 24 hodin po doručení všech dokumentů.",
        },
      ],
    },
    {
      name: "Finanční otázky",
      items: [
        {
          question: "Jak často vyplácíte výdělky?",
          answer: "Výdělky vyplácíme každý týden v pátek na váš bankovní účet.",
        },
        {
          question: "Jaké jsou poplatky flotily?",
          answer:
            "Základní poplatek je 15% z jízdného, s možností snížení na 12% při vyšším počtu jízd.",
        },
      ],
    },
    {
      name: "Technické otázky",
      items: [
        {
          question: "Co když mi nefunguje aplikace?",
          answer:
            "Naše technická podpora je dostupná 24/7 na telefonu +420 123 456 789.",
        },
        {
          question: "Mohu používat více aplikací současně?",
          answer:
            "Ano, naše flotila podporuje kombinaci Bolt, Uber a Liftago v rámci jednoho účtu.",
        },
      ],
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-indigo-900 text-white py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <QuestionMarkCircleIcon className="h-16 w-16 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-6">Často kladené dotazy</h1>
          <p className="text-xl">Rychlé odpovědi na vaše nejčastější otázky</p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          {/* Search Box */}
          <div className="mb-16">
            <div className="relative max-w-2xl mx-auto">
              <input
                type="text"
                placeholder="Hledat v dotazech..."
                className="w-full p-4 pl-12 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
              <svg
                className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>

          {/* FAQ Categories */}
          <div className="space-y-16">
            {faqCategories.map((category, index) => (
              <div key={index} className="border-b pb-12 last:border-b-0">
                <h2 className="text-2xl font-bold mb-8 flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 w-8 h-8 rounded-full flex items-center justify-center mr-4">
                    {index + 1}
                  </span>
                  {category.name}
                </h2>
                <div className="space-y-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="group">
                      <h3 className="text-lg font-semibold mb-2 flex items-center">
                        <QuestionMarkCircleIcon className="w-5 h-5 text-indigo-600 mr-3 group-hover:text-indigo-800" />
                        {item.question}
                      </h3>
                      <p className="text-gray-600 ml-8 pl-2 border-l-2 border-indigo-200">
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
      <section className="bg-indigo-50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <ChatBubbleBottomCenterTextIcon className="h-12 w-12 text-indigo-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-6">Nenašli jste odpověď?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Náš tým vám rád pomůže s jakýmkoliv dotazem
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="tel:+420123456789"
              className="bg-white px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center"
            >
              <PhoneIcon className="w-5 h-5 text-indigo-600 mr-3" />
              +420 123 456 789
            </a>
            <a
              href="mailto:podpora@driverhome.cz"
              className="bg-white px-6 py-4 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center"
            >
              <EnvelopeIcon className="w-5 h-5 text-indigo-600 mr-3" />
              podpora@driverhome.cz
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
