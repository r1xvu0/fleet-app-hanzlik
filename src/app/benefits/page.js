// app/benefits/page.js
import {
  CurrencyEuroIcon,
  HeartIcon,
  ClockIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  ArrowsRightLeftIcon,
  CheckIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";
import Layout from "@/components/Layout";

export default function BenefitsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-950 text-white py-32 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-400 rounded-full"></div>
          <div className="absolute left-0 bottom-0 -mb-10 -ml-10 w-40 h-40 bg-indigo-400 rounded-full"></div>
          <div className="absolute right-1/3 top-1/4 w-24 h-24 bg-indigo-500 rounded-full"></div>
          <div className="absolute left-1/4 bottom-1/3 w-16 h-16 bg-indigo-600 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Výhody spolupráce s námi</h1>
          <p className="text-xl text-indigo-100">
            Proč se řidiči vracejí a doporučují nás dalším
          </p>
        </div>
      </section>

      {/* Key Benefits Grid */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            {
              icon: CurrencyEuroIcon,
              title: "Nejvyšší výdělky",
              description: "Až o 30% vyšší příjmy díky prémiovým tarifům",
            },
            {
              icon: HeartIcon,
              title: "Zdravotní pojištění",
              description: "Příspěvek na zdravotní pojištění pro stálé řidiče",
            },
            {
              icon: ClockIcon,
              title: "Flexibilní rozvrh",
              description: "Vybírejte si směny podle svých možností",
            },
            {
              icon: ShieldCheckIcon,
              title: "Kompletní pojištění",
              description: "Všechna vozidla mají havarijní pojištění",
            },
            {
              icon: UserGroupIcon,
              title: "Komunita řidičů",
              description: "Pravidelné meetupy a sdílení zkušeností",
            },
            {
              icon: ArrowsRightLeftIcon,
              title: "Multiplatforma",
              description: "Ježdění přes více aplikací současně",
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="p-8 border rounded-xl hover:border-indigo-200 transition-colors"
            >
              <benefit.icon className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold mb-3 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Section */}
      <section className="bg-indigo-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">
            Proč zvolit nás?
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left py-4 text-gray-900"></th>
                  <th className="text-left py-4 text-gray-900">Naše flotila</th>
                  <th className="text-left py-4 text-gray-900">Samostatný řidič</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    feature: "Provize z jízdného",
                    us: "10-15%",
                    others: "20-30%",
                  },
                  {
                    feature: "Dostupná podpora",
                    us: "24/7",
                    others: "Jen v pracovní dny",
                  },
                  {
                    feature: "Pojištění vozidla",
                    us: "V ceně",
                    others: "Vlastní",
                  },
                  { feature: "Přístup k vozům", us: "Ano", others: "Ne" },
                  { feature: "Bonusové programy", us: "Ano", others: "Ne" },
                ].map((row, index) => (
                  <tr key={index} className="border-t">
                    <td className="py-4 font-semibold text-gray-800">{row.feature}</td>
                    <td className="py-4 text-green-600 font-medium">{row.us}</td>
                    <td className="py-4 text-gray-500">{row.others}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
            {[
              { number: '98%', label: 'Spokojených řidičů' },
              { number: '24h', label: 'Nejrychlejší aktivace' },
              { number: '150+', label: 'Dostupných vozů' },
              { number: '10min', label: 'Průměrná reakce podpory' }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-4xl font-bold text-indigo-900 mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section> */}

      {/* Testimonials */}
      <section className="bg-indigo-900 text-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Co říkají naši řidiči</h2>
            <div className="space-y-12">
              {[
                {
                  text: "Nejlepší rozhodnutí v mé kariéře řidiče. Výdělky jsou stabilní a podpora vždy pomůže.",
                  author: "Petr Novák, řidič od 2020",
                },
                {
                  text: "Díky možnosti kombinovat aplikace mám vždy dost zakázek. Flexibilita přesně podle mých potřeb.",
                  author: "Jan Dvořák, kurýr od 2021",
                },
              ].map((testimonial, index) => (
                <div key={index} className="relative pl-10">
                  <ChatBubbleBottomCenterTextIcon className="w-8 h-8 absolute left-0 top-1 text-indigo-200" />
                  <p className="text-lg mb-2 text-white">{testimonial.text}</p>
                  <p className="text-indigo-200">{testimonial.author}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 rounded-xl h-96"></div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Přidejte se k nejlepším</h2>
          <p className="mb-8 text-lg text-gray-600">
            Začněte vydělávat již zítra
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-indigo-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition-colors">
              Začít registraci
            </button>
            <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-50 transition-colors">
              Povídat s operátorem
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
