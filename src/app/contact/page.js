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
} from "@heroicons/react/24/outline";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-indigo-900 text-white py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Jsme tu pro vás</h1>
          <p className="text-xl">Rádi odpovíme na všechny vaše dotazy</p>
        </div>
      </section>

      {/* Contact Cards */}
      {/* <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 py-20 px-4">
          {[
            {
              title: "Telefonická podpora",
              text: "Nonstop dostupná",
              icon: PhoneIcon,
              link: "tel:+420734167255"
            },
            {
              title: "Emailová podpora",
              text: "Odpovíme do 2 hodin",
              icon: EnvelopeIcon,
              link: "mailto:info@driverhome.cz"
            },
            {
              title: "Osobní jednání",
              text: "Po předchozí domluvě",
              icon: MapPinIcon,
              link: "#map"
            }
          ].map((item, index) => (
            <a key={index} href={item.link} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <item.icon className="h-12 w-12 text-indigo-600 mb-6" />
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.text}</p>
            </a>
          ))}
        </div> */}

      {/* Contact Form + Map */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 px-4 pb-20 mt-8">
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Napište nám</h2>
          <form className="space-y-6">
            <div>
              <label className="block mb-2">Vaše jméno</label>
              <input type="text" className="w-full p-3 border rounded-lg" />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input type="email" className="w-full p-3 border rounded-lg" />
            </div>

            {/* Nationality Dropdown */}
            <div>
              <label className="block mb-2">Národnost</label>
              <select className="w-full p-3 border rounded-lg bg-white">
                <option value="">Vyberte národnost</option>
                <option value="CZ">Česká republika</option>
                <option value="SK">Slovenská republika</option>
                <option value="PL">Polsko</option>
                <option value="DE">Německo</option>
                <option value="UA">Ukrajina</option>
                <option value="OTHER">Jiné</option>
              </select>
            </div>

            {/* Languages Checkboxes */}
            <div>
              <label className="block mb-2">Ovládané jazyky</label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="languages[]"
                    value="cs"
                    className="w-4 h-4"
                  />
                  <span>Čeština</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="languages[]"
                    value="sk"
                    className="w-4 h-4"
                  />
                  <span>Slovenština</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="languages[]"
                    value="en"
                    className="w-4 h-4"
                  />
                  <span>Angličtina</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="languages[]"
                    value="de"
                    className="w-4 h-4"
                  />
                  <span>Němčina</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="languages[]"
                    value="pl"
                    className="w-4 h-4"
                  />
                  <span>Polština</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    name="languages[]"
                    value="uk"
                    className="w-4 h-4"
                  />
                  <span>Ukrajinština</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block mb-2">Zpráva</label>
              <textarea
                rows="4"
                className="w-full p-3 border rounded-lg"
              ></textarea>
            </div>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700">
              Odeslat zprávu
            </button>
          </form>
        </div>

        <div className="bg-gray-200 rounded-xl h-96">
          {/* Map integration would go here */}
        </div>
      </div>
    </>
  );
}
