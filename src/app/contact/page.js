// app/contact/page.js
'use client'

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
import ContactSection from "@/components/ContactSection";

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
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 py-16 px-4 relative z-10">
        {[
          // {
          //   title: "Telefonická podpora",
          //   text: "Od 8:00 do 20:00",
          //   icon: PhoneIcon,
          //   link: "tel:+420774982052",
          //   color: "bg-indigo-600",
          //   hover: "hover:bg-indigo-700"
          // },
          {
            title: "Emailová podpora",
            text: "Odpovíme hned jak to bude možné",
            icon: EnvelopeIcon,
            link: "mailto:flotila.praha1@gmail.com",
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
          },
          // {
          //   title: "WhatsApp",
          //   text: "Od 9:00 do 17:00",
          //   icon: PhoneIcon,
          //   link: "https://wa.me/420774982052",
          //   color: "bg-indigo-600",
          //   hover: "hover:bg-indigo-700"
          // }
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

      {/* Contact Form Section - Using the ContactSection component */}
      <ContactSection />
      
      {/* Additional Information Section */}
      {/* <div className="bg-gradient-to-b from-indigo-950 to-indigo-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
              <DocumentTextIcon className="w-6 h-6 text-indigo-600 mr-3" />
              Důležité informace
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-lg mr-4 mt-1">
                  <CheckIcon className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Pracovní doba kanceláře</h3>
                  <p className="text-gray-700">Pondělí - Pátek: 9:00 - 17:00</p>
                  <p className="text-gray-700">Víkendy: 10:00 - 18:00</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-lg mr-4 mt-1">
                  <CheckIcon className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Adresa kanceláře</h3>
                  <p className="text-gray-700">Travná, xxx</p>
                  <p className="text-gray-700">15000 Praha, Česká republika</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-indigo-100 p-2 rounded-lg mr-4 mt-1">
                  <CheckIcon className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h3 className="font-medium text-gray-900">Technická podpora</h3>
                  <p className="text-gray-700">Od 9:00 do 17:00</p>
                  <p className="text-gray-700">Podpora při problémech v terénu</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      
      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Připraveni začít jezdit?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Registrujte se ještě dnes a začněte si vydělávat jako řidič v naší flotilou.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact-form" className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Kontaktovat nás
            </a>
            <a href="/cars" className="px-8 py-3 bg-white text-indigo-600 font-medium rounded-lg hover:bg-gray-100 transition-colors">
              Prohlédnout vozidla
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
