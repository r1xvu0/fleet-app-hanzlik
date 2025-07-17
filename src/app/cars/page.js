// app/cars/page.js
"use client";

import { useState } from "react";
import {
  CheckCircleIcon,
  XMarkIcon,
  BoltIcon,
  UserGroupIcon,
  CalendarIcon,
  TruckIcon,
  BeakerIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  ClockIcon,
  ArrowPathIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function CarsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const cars = [
    {
      id: 1,
      name: "Škoda Octavia 1.6 TDI",
      price: "3,990 Kč",
      type: "Diesel",
      year: 2022,
      fuelType: "Diesel",
      power: "116 HP",
      seats: 5,
      features: ["Klimatizace", "Parkovací senzory", "Navigace", "Bluetooth"],
      image: "/images/skoda-octavia.jpg",
    },
    {
      id: 2,
      name: "Škoda Octavia RS",
      price: "5,990 Kč",
      type: "Diesel",
      year: 2022,
      fuelType: "Diesel",
      power: "149 HP",
      seats: 5,
      features: ["Klimatizace", "Parkovací senzory", "Navigace", "Bluetooth", "Sportovní sedadla"],
      image: "/images/skoda-octavia.jpg",
    },
    {
      id: 3,
      name: "Toyota Corolla Hybrid",
      price: "6,490 Kč",
      type: "Hybrid",
      year: 2023,
      fuelType: "Hybrid",
      power: "122 HP",
      seats: 5,
      features: ["Klimatizace", "Autonomní brzdění", "Adaptivní tempomat", "Android Auto/Apple CarPlay"],
      image: "/images/toyota-corolla.jpg",
    },
    {
      id: 4,
      name: "Toyota Camry Hybrid",
      price: "7,990 Kč",
      type: "Hybrid",
      year: 2023,
      fuelType: "Hybrid",
      power: "218 HP",
      seats: 5,
      features: ["Kožená sedadla", "Panoramatická střecha", "Premium audio", "Bezdrátové nabíjení"],
      image: "/images/toyota-camry.jpg",
    },
    {
      id: 5,
      name: "Škoda Enyaq iV",
      price: "8,490 Kč",
      type: "Elektromobil",
      year: 2023,
      fuelType: "Elektro",
      power: "204 HP",
      seats: 5,
      features: ["Dojezd 520 km", "Rychlonabíjení", "Head-up displej", "Matrix LED světlomety"],
      image: "/images/skoda-enyaq.jpg",
    },
    {
      id: 6,
      name: "Tesla Model 3",
      price: "9,990 Kč",
      type: "Elektromobil",
      year: 2023,
      fuelType: "Elektro",
      power: "283 HP",
      seats: 5,
      features: ["Autopilot", "Dojezd 580 km", "15\" dotykový displej", "Prémiové audio"],
      image: "/images/tesla-model3.jpg",
    }
  ];

  const filteredCars = activeFilter === 'all' 
    ? cars 
    : cars.filter(car => car.type === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-900 to-indigo-700 text-white py-32 px-4">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern-grid.svg')] bg-center"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Náš moderní vozový park</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Vyberte si z nejoblíbenějších modelů aut pro vaši práci v řidiče.
          </p>
        </div>
      </section>

      {/* Car Filter */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {["all", "Hybrid", "Elektromobil", "Diesel"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeFilter === filter
                  ? "bg-indigo-600 text-white shadow-md shadow-indigo-200"
                  : "bg-indigo-50 text-indigo-900 hover:bg-indigo-100"
              }`}
            >
              {filter === "all" ? "Všechny" : filter}
            </button>
          ))}
        </div>
      </div>

      {/* Car Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-4 pb-20">
        {filteredCars.map((car) => (
          <Link
            key={car.id}
            href={`/cars/${car.id}`}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="h-48 bg-gray-200 relative">
              {car.image && (
                <Image 
                  src={car.image} 
                  alt={car.name}
                  fill
                  className="object-cover"
                />
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-3 text-gray-900">{car.name}</h3>
              <div className="space-y-3 mb-4 text-gray-700">
                <p className="flex justify-between items-center">
                  <span className="flex items-center text-gray-700">
                    <CurrencyDollarIcon className="w-5 h-5 mr-2 text-indigo-600" />
                    Cena týden:
                  </span>
                  <span className="font-bold text-black">{car.price}</span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="flex items-center text-gray-700">
                    <BeakerIcon className="w-5 h-5 mr-2 text-indigo-600" />
                    Typ:
                  </span>
                  <span className="text-gray-800">{car.type}</span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="flex items-center text-gray-700">
                    <CalendarIcon className="w-5 h-5 mr-2 text-indigo-600" />
                    Ročník:
                  </span>
                  <span className="text-gray-800">{car.year}</span>
                </p>
              </div>
              <div className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium block text-center">
                Více informací
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Rental Conditions */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-10 text-center">
            Podmínky pronájmu
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <ShieldCheckIcon className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Záloha a pojištění</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Záloha 10 000 Kč (vratná při vrácení vozu)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Pojištění v ceně pronájmu</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <ArrowPathIcon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Flexibilní podmínky</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Neomezený nájezd</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Flexibilní doba pronájmu (1 týden - 24 měsíců)</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <PhoneIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Podpora</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">24/7 Asistence na silnici</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Technická podpora v případě problémů</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="bg-amber-100 p-3 rounded-full mr-4">
                  <TruckIcon className="w-6 h-6 text-amber-600" />
                </div>
                <h3 className="font-bold text-lg text-gray-900">Servis a údržba</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Pravidelné servisní prohlídky v ceně</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Výměna pneumatik dle sezóny</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Připraveni začít?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Kontaktujte nás ještě dnes a vyberte si vůz, který vám pomůže vydělávat.</p>
          {/* <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors inline-block">
            Rezervovat vozidlo
          </Link> */}
        </div>
      </section>
    </>
  );
}
