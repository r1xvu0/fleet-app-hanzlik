// app/drivers/bolt/page.js
import EarningsCalculator from "@/components/EarningsCalculator";
import {
  BoltIcon,
  ChartBarIcon,
  UserGroupIcon,
  PhoneIcon,
  ClockIcon,
  CheckIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

export default function BoltPage() {
  return (
    <>
      {/* Hero Section - Bolt Black & Green */}
      <section className="bg-[#34BB78] text-white py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <BoltIcon className="h-20 w-20 mx-auto mb-6 text-[#8CFF00]" />
          <h1 className="text-4xl font-bold mb-6">
            Spolupracujte s Bolt přes naši flotilu
          </h1>
          <p className="text-xl">
            Nejvyšší výdělky v Praze s prémiovou podporou
          </p>
        </div>
      </section>

      {/* Benefits Grid */}
      {/* <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 py-20 px-4">
        {[
          {
            icon: ChartBarIcon,
            title: "Až o 25% vyšší výdělky",
            text: "Exkluzivní prémiové tarify",
            color: "text-[#8CFF00]",
          },
          {
            icon: UserGroupIcon,
            title: "24/7 Česká podpora",
            text: "Specializovaný tým pro řidiče",
            color: "text-[#8CFF00]",
          },
          {
            icon: PhoneIcon,
            title: "Dedikovaná aplikace",
            text: "Optimalizovaná pro flotily",
            color: "text-[#8CFF00]",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="text-center p-6 border rounded-xl hover:shadow-lg transition-all"
          >
            <item.icon className={`h-12 w-12 mx-auto mb-4 ${item.color}`} />
            <h3 className="text-xl font-bold mb-2 text-black">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </div>
        ))}
      </div> */}

      {/* How It Works */}
      {/* <section className="bg-[#f8f9fa] py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Jak začít s Bolt
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {["Registrace", "Schválení", "Školení", "Výdělek"].map(
              (step, index) => (
                <div key={step} className="text-center p-4">
                  <div className="bg-[#8CFF00] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-black font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="font-semibold text-lg text-black">{step}</h3>
                </div>
              ),
            )}
          </div>
        </div>
      </section> */}

      {/* Earnings Calculator */}
      <section>
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
      <section className="bg-[#34BB78] py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">
            Začněte vydělávat již dnes!
          </h2>
          <button className="bg-black text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-900 transition-colors">
            Přihlásit se k Bolt
          </button>
        </div>
      </section>
    </>
  );
}
