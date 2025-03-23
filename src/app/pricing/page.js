// app/pricing/page.js
import { 
    CurrencyEuroIcon,
    TruckIcon,
    UserGroupIcon,
    CheckIcon,
    ArrowRightIcon
  } from '@heroicons/react/24/outline';
  import Layout from '@/components/Layout';
  
  export default function PricingPage() {
    return (
      <>
        {/* Hero Section */}
        <section className="bg-indigo-900 text-white py-32 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Transparentní ceník</h1>
            <p className="text-xl">Platíte pouze za to, co skutečně využíváte</p>
          </div>
        </section>
  
        {/* Pricing Plans */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Standard",
                price: "15%",
                description: "Pro příležitostné řidiče",
                features: [
                  "Přístup k 1 aplikaci",
                  "Základní podpora",
                  "Pojištění vozidla",
                  "Max 40 hodin/týden"
                ]
              },
              {
                title: "Professional",
                price: "12%",
                description: "Pro aktivní řidiče",
                features: [
                  "Přístup ke 3 aplikacím",
                  "Prioritní podpora",
                  "Bonusové programy",
                  "Neomezený přístup"
                ],
                popular: true
              },
              {
                title: "Enterprise",
                price: "Individuální",
                description: "Pro firemní flotily",
                features: [
                  "Vlastní aplikace",
                  "Dedikovaný manažer",
                  "Hromadné pojištění",
                  "Firemní školení"
                ]
              }
            ].map((plan, index) => (
              <div key={index} className={`p-8 border rounded-xl ${plan.popular ? 'border-indigo-600' : ''}`}>
                {plan.popular && (
                  <div className="bg-indigo-600 text-white px-4 py-1 rounded-full text-sm mb-4 inline-block">
                    Nejoblíbenější
                  </div>
                )}
                <h3 className="text-2xl font-bold mb-2">{plan.title}</h3>
                <div className="text-4xl font-bold mb-4">{plan.price}</div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold ${
                  plan.popular 
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}>
                  Vybrat plán
                  {plan.popular && <ArrowRightIcon className="w-4 h-4 ml-2 inline-block" />}
                </button>
              </div>
            ))}
          </div>
        </section>
  
        {/* Comparison Table */}
        <section className="bg-indigo-50 py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Podrobné srovnání</h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left py-4">Funkce</th>
                    <th className="text-left py-4">Standard</th>
                    <th className="text-left py-4">Professional</th>
                    <th className="text-left py-4">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'Počet aplikací', standard: 1, pro: 3, enterprise: 'Neomezený' },
                    { feature: 'Podpora', standard: 'Email', pro: '24/7 Chat', enterprise: 'Dedikovaný manažer' },
                    { feature: 'Pojištění', standard: 'Základní', pro: 'Komplexní', enterprise: 'Premium' },
                    { feature: 'Výběr výdělku', standard: 'Týdenní', pro: 'Denní', enterprise: 'Okamžitý' }
                  ].map((row, index) => (
                    <tr key={index} className="border-t">
                      <td className="py-4 font-semibold">{row.feature}</td>
                      <td className="py-4">{row.standard}</td>
                      <td className="py-4">{row.pro}</td>
                      <td className="py-4">{row.enterprise}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
  
        {/* FAQ */}
        <section className="py-20 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Časté dotazy</h2>
            <div className="space-y-6">
              {[
                {
                  question: "Můžu změnit tarif později?",
                  answer: "Ano, tarif můžete změnit kdykoliv s měsíční výpovědní lhůtou"
                },
                {
                  question: "Jsou nějaké skryté poplatky?",
                  answer: "Ne, všechny poplatky jsou jasně uvedeny v ceníku"
                },
                {
                  question: "Co když nebudu spokojen?",
                  answer: "Nabízíme 14-denní garanci vrácení peněz"
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
      </>
    );
  }