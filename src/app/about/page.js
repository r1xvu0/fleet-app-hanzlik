// app/about/page.js
import {
  BuildingLibraryIcon,
  UserGroupIcon,
  MapPinIcon,
  ClockIcon,
  HeartIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";
import Layout from "@/components/Layout";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-indigo-900 text-white py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Naše příběh</h1>
          <p className="text-xl">Propojujeme řidiče s městem od roku 2015</p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <BuildingLibraryIcon className="h-12 w-12 text-indigo-600" />
            <h2 className="text-3xl font-bold">Od malé firmy k lídrovi trhu</h2>
            <p className="text-gray-600">
              Začínali jsme s 5 vozy v centru Prahy. Dnes máme přes 300 vozů a
              1000 spokojených řidičů po celé ČR. Naše vize zůstává stejná -
              vytvářet nejlepší podmínky pro profesionální řidiče.
            </p>
          </div>
          <div className="bg-gray-100 h-96 rounded-xl"></div>
        </div>
      </section>

      {/* Stats */}
      {/* <section className="bg-indigo-50 py-20 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: UserGroupIcon, number: '1000+', label: 'Aktivních řidičů' },
              { icon: MapPinIcon, number: '15+', label: 'Měst v ČR' },
              { icon: ClockIcon, number: '24/7', label: 'Podpora' },
              { icon: HeartIcon, number: '98%', label: 'Spokojenost' }
            ].map((stat, index) => (
              <div key={index} className="p-6">
                <stat.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </section> */}

      {/* Team Values */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Naše hodnoty</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparentnost",
                description: "Žádné skryté poplatky nebo smlouvy",
                icon: CheckIcon,
              },
              {
                title: "Podpora",
                description: "Dedikovaný tým pro naše řidiče",
                icon: CheckIcon,
              },
              {
                title: "Inovace",
                description: "Neustále vylepšujeme naše služby",
                icon: CheckIcon,
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-6 border rounded-xl hover:border-indigo-200 transition-colors"
              >
                <value.icon className="h-8 w-8 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
