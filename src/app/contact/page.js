// app/contact/page.js
import {
  CheckIcon,
  BoltIcon,
  TruckIcon,
  UserIcon,
  DevicePhoneMobileIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-indigo-900 via-indigo-800 to-indigo-950 text-white py-24 md:py-32 px-4 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute right-0 top-0 -mt-10 -mr-10 w-40 h-40 bg-indigo-400 rounded-full"></div>
          <div className="absolute left-0 bottom-0 -mb-10 -ml-10 w-40 h-40 bg-indigo-400 rounded-full"></div>
          <div className="absolute right-1/3 top-1/4 w-24 h-24 bg-indigo-500 rounded-full"></div>
          <div className="absolute left-1/4 bottom-1/3 w-16 h-16 bg-indigo-600 rounded-full"></div>
        </div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className="bg-white/10 p-6 rounded-full w-24 h-24 mx-auto mb-8 backdrop-blur-sm flex items-center justify-center">
            <ChatBubbleLeftRightIcon className="h-12 w-12" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Jsme tu pro vás
          </h1>
          <p className="text-xl md:text-2xl mb-6 max-w-2xl mx-auto text-indigo-100">
            Rádi odpovíme na všechny vaše dotazy
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 py-16 px-4 relative z-10">
        {[
          {
            title: "Telefonická podpora",
            text: "Nonstop dostupná",
            icon: PhoneIcon,
            link: "tel:+420123456789",
            color: "bg-indigo-600",
            hover: "hover:bg-indigo-700"
          },
          {
            title: "Emailová podpora",
            text: "Odpovíme do 2 hodin",
            icon: EnvelopeIcon,
            link: "mailto:info@driverhome.cz",
            color: "bg-indigo-700",
            hover: "hover:bg-indigo-800"
          },
          {
            title: "Osobní jednání",
            text: "Po předchozí domluvě",
            icon: MapPinIcon,
            link: "#contact-form",
            color: "bg-indigo-800",
            hover: "hover:bg-indigo-900"
          }
        ].map((item, index) => (
          <a 
            key={index} 
            href={item.link} 
            className={`${item.color} ${item.hover} p-8 rounded-xl shadow-lg transition-all text-white flex flex-col items-center text-center`}
          >
            <div className="bg-white/20 p-4 rounded-xl mb-6">
              <item.icon className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
            <p className="text-indigo-100">{item.text}</p>
          </a>
        ))}
      </div>

      {/* Contact Form + Map */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-20 px-4" id="contact-form">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-2 text-gray-900">Napište nám</h2>
            <p className="text-gray-600 mb-8">Vyplňte formulář a my se vám co nejdříve ozveme</p>
            
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 text-gray-700 font-medium">Vaše jméno</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors" 
                    placeholder="Jan Novák"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-gray-700 font-medium">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors" 
                    placeholder="jan@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Nationality Dropdown */}
                <div>
                  <label className="block mb-2 text-gray-700 font-medium">Národnost</label>
                  <select className="w-full p-3 border border-gray-300 rounded-lg bg-white text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors">
                    <option value="" className="text-gray-800">Vyberte národnost</option>
                    <option value="CZ" className="text-gray-800">Česká republika</option>
                    <option value="SK" className="text-gray-800">Slovenská republika</option>
                    <option value="PL" className="text-gray-800">Polsko</option>
                    <option value="DE" className="text-gray-800">Německo</option>
                    <option value="UA" className="text-gray-800">Ukrajina</option>
                    <option value="OTHER" className="text-gray-800">Jiné</option>
                  </select>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block mb-2 text-gray-700 font-medium">Telefonní číslo</label>
                  <input 
                    type="tel" 
                    className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors" 
                    placeholder="+420 123 456 789"
                  />
                </div>
              </div>

              {/* Languages Checkboxes */}
              <div>
                <label className="block mb-3 text-gray-700 font-medium">Ovládané jazyky</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {[
                    { value: "cs", label: "Čeština" },
                    { value: "sk", label: "Slovenština" },
                    { value: "en", label: "Angličtina" },
                    { value: "de", label: "Němčina" },
                    { value: "pl", label: "Polština" },
                    { value: "uk", label: "Ukrajinština" }
                  ].map((language, index) => (
                    <label key={index} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                      <input
                        type="checkbox"
                        name="languages[]"
                        value={language.value}
                        className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 mr-3"
                      />
                      <span className="text-gray-700">{language.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block mb-2 text-gray-700 font-medium">Zpráva</label>
                <textarea
                  rows="4"
                  className="w-full p-3 border border-gray-300 rounded-lg text-gray-800 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                  placeholder="Popište nám, s čím potřebujete pomoci..."
                ></textarea>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500 flex items-center">
                  <ClockIcon className="w-4 h-4 mr-1" />
                  Odpovídáme do 24 hodin
                </div>
                <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors flex items-center">
                  <EnvelopeIcon className="w-5 h-5 mr-2" />
                  Odeslat zprávu
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                <DocumentTextIcon className="w-6 h-6 text-indigo-600 mr-3" />
                Důležité informace
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-4 mt-1">
                    <CheckIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Pracovní doba</h3>
                    <p className="text-gray-700">Pondělí - Pátek: 8:00 - 20:00</p>
                    <p className="text-gray-700">Víkendy: 10:00 - 18:00</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-4 mt-1">
                    <CheckIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Adresa kanceláře</h3>
                    <p className="text-gray-700">Pražská 123, Praha 1</p>
                    <p className="text-gray-700">15000 Praha, Česká republika</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-indigo-100 p-2 rounded-lg mr-4 mt-1">
                    <CheckIcon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-900">Technická podpora</h3>
                    <p className="text-gray-700">Nepřetržitě 24/7</p>
                    <p className="text-gray-700">Podpora při technických problémech v terénu</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded-xl shadow-lg border border-gray-100 h-96 relative">
              <div className="absolute inset-0 p-4">
                <div className="w-full h-full bg-indigo-50 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPinIcon className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-gray-900">Mapa kanceláře</h3>
                    <p className="text-gray-600 max-w-xs mx-auto mt-2">
                      Google Maps integraci si můžete přidat dle potřeby
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Připraveni začít jezdit?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Registrujte se ještě dnes a začněte si vydělávat jako řidič s naší flotilou.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/how-it-works" className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors inline-block">
              Jak to funguje
            </Link>
            <Link href="/cars" className="px-8 py-3 border border-white hover:bg-white/10 rounded-lg font-medium transition-colors inline-block">
              Prohlédnout vozy
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
