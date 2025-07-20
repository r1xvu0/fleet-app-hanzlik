// app/about/page.js

export const metadata = {
  title: "O nás - Flotila Praha | Historie největší taxi flotily v Praze",
  description: "Poznejte historii Flotila Praha. Od roku 2015 propojujeme řidiče s městem. Přes 1000 spokojených řidičů, 15+ měst v ČR, 24/7 podpora. Staňte se součástí našeho týmu!",
  keywords: "o nás flotila Praha, historie taxi Praha, největší flotila ČR, taxi služby Praha historie",
  openGraph: {
    title: "O nás - Flotila Praha",
    description: "Poznejte historii největší taxi flotily v Praze od roku 2015",
    url: "http://flotila-praha.eu/about",
  },
};

import {
  BuildingLibraryIcon,
  UserGroupIcon,
  MapPinIcon,
  ClockIcon,
  HeartIcon,
  CheckIcon,
  RocketLaunchIcon,
  ShieldCheckIcon,
  UsersIcon
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function AboutPage() {
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Náš příběh
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto text-indigo-100">
            Propojujeme řidiče s městem od roku 2015
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-indigo-100 w-16 h-16 rounded-lg flex items-center justify-center">
              <BuildingLibraryIcon className="h-10 w-10 text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Od malé firmy k lídrovi trhu</h2>
            <p className="text-lg text-gray-600">
              Začínali jsme s 5 vozy v centru Prahy. Dnes máme přes 300 vozů a
              1000 spokojených řidičů po celé ČR. Naše vize zůstává stejná -
              vytvářet nejlepší podmínky pro profesionální řidiče.
            </p>
            <div className="pt-4">
              <Link href="/contact" className="inline-flex items-center text-indigo-600 font-medium hover:text-indigo-800 transition-colors">
                Zjistit více o naší historii
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-white rounded-2xl shadow-lg p-2">
            <img 
              src="https://placehold.co/800x600/indigo/white?text=Our+Company" 
              alt="Our company history" 
              className="w-full h-auto rounded-xl shadow-inner"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-16 text-center text-gray-900">
            Naše výsledky v číslech
          </h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[
              { icon: UserGroupIcon, number: '1000+', label: 'Aktivních řidičů' },
              { icon: MapPinIcon, number: '15+', label: 'Měst v ČR' },
              { icon: ClockIcon, number: '24/7', label: 'Podpora' },
              { icon: HeartIcon, number: '98%', label: 'Spokojenost' }
            ].map((stat, index) => (
              <div key={index} className="p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all">
                <div className="bg-indigo-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <div className="text-3xl font-bold mb-2 text-indigo-600">{stat.number}</div>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Values */}
      <section className="py-20 px-4 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Naše hodnoty</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Transparentnost",
                description: "Žádné skryté poplatky nebo smlouvy. Vždy víte, jaké podmínky spolupráce máte.",
                icon: ShieldCheckIcon,
              },
              {
                title: "Podpora",
                description: "Dedikovaný tým pro naše řidiče, který je k dispozici kdykoliv potřebujete pomoc.",
                icon: UsersIcon,
              },
              {
                title: "Inovace",
                description: "Neustále vylepšujeme naše služby a přinášíme nové technologie pro lepší zážitek.",
                icon: RocketLaunchIcon,
              },
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 bg-white rounded-xl shadow-md hover:shadow-lg transition-all border border-gray-100"
              >
                <div className="bg-indigo-50 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-gradient-to-br from-indigo-600 to-indigo-800 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-1/4 top-1/4 w-64 h-64 bg-white rounded-full"></div>
          <div className="absolute left-1/4 bottom-1/4 w-64 h-64 bg-white rounded-full"></div>
        </div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Chcete se stát součástí našeho týmu?
          </h2>
          <p className="text-indigo-100 mb-10 max-w-2xl mx-auto">
            Připojte se k největší flotile v Praze a získejte výhody, které nabízíme všem našim řidičům.
          </p>
          <Link 
            href="/contact"
            className="bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-4 rounded-xl text-lg font-semibold transition-all shadow-lg hover:shadow-xl inline-block"
          >
            Kontaktujte nás
          </Link>
        </div>
      </section>
    </>
  );
}
