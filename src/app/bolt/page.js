// app/drivers/bolt/page.js
import { BoltIcon, ChartBarIcon, UserGroupIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function BoltPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#6A1B9A] text-white py-32 px-4"> {/* Bolt purple */}
        <div className="max-w-6xl mx-auto text-center">
          <BoltIcon className="h-20 w-20 mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-6">Spolupracujte s Bolt přes naši flotilu</h1>
          <p className="text-xl">Nejvyšší výdělky v Praze s naší podporou</p>
        </div>
      </section>

      {/* Benefits Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 py-20 px-4">
        {[
          {
            icon: ChartBarIcon,
            title: "O 25% vyšší výdělky",
            text: "Díky našim prémiovým tarifům"
          },
          {
            icon: UserGroupIcon,
            title: "24/7 Podpora řidičů",
            text: "Specializovaný Bolt tým"
          },
          {
            icon: PhoneIcon,
            title: "Dedikovaná aplikace",
            text: "Optimalizovaná pro naše řidiče"
          }
        ].map((item, index) => (
          <div key={index} className="text-center p-6">
            <item.icon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div>

      {/* How It Works */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Jak začít s Bolt</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {['Registrace', 'Školení', 'Aktivace', 'Jízda'].map((step, index) => (
              <div key={step} className="text-center p-4">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-lg">{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earnings Calculator */}
      <div className="max-w-4xl mx-auto py-20 px-4">
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-6">Kalkulačka výdělků</h2>
          <div className="space-y-6">
            <div>
              <label className="block mb-2">Počet jízd denně</label>
              <input type="range" min="5" max="30" className="w-full" />
            </div>
            <div>
              <label className="block mb-2">Očekávaný týdenní výdělek</label>
              <div className="text-3xl font-bold text-purple-600">8 500 - 12 000 Kč</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}