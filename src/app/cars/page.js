// app/cars/page.js
"use client";

import { useState, useEffect } from "react";
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
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch cars from API
  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('/api/cars');
        if (response.ok) {
          const data = await response.json();
          // Parse features JSON string to array for each car
          const carsWithParsedFeatures = data.map(car => ({
            ...car,
            features: JSON.parse(car.features || '[]')
          }));
          setCars(carsWithParsedFeatures);
        }
      } catch (error) {
        console.error('Error fetching cars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  const filteredCars = activeFilter === 'all' 
    ? cars 
    : cars.filter(car => car.fuelType === activeFilter);

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-indigo-900 to-indigo-700 text-white py-32 px-4">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/pattern-grid.svg')] bg-center"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Náš moderní vozový park</h1>
          <p className="text-xl max-w-2xl mx-auto">
            Vyberte si z nejoblíbenějších modelů aut pro vaši práci řidiče.
          </p>
        </div>
      </section>

      {/* Car Filter */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          {["all", "Diesel", "Benzín", "Hybrid", "Elektro"].map((filter) => (
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
        {loading ? (
          // Loading skeleton
          Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
              <div className="h-48 bg-gray-300"></div>
              <div className="p-6">
                <div className="h-6 bg-gray-300 rounded mb-3"></div>
                <div className="space-y-3 mb-4">
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </div>
                <div className="h-10 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))
        ) : filteredCars.length === 0 ? (
          <div className="col-span-full text-center py-12">
            <p className="text-gray-500 text-lg">Žádná vozidla nenalezena.</p>
          </div>
        ) : (
          filteredCars.map((car) => (
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
                    Palivo:
                  </span>
                  <span className="text-gray-800">{car.fuelType}</span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="flex items-center text-gray-700">
                    <CalendarIcon className="w-5 h-5 mr-2 text-indigo-600" />
                    Ročník:
                  </span>
                  <span className="text-gray-800">{car.year}</span>
                </p>
                <p className="flex justify-between items-center">
                  <span className="flex items-center text-gray-700">
                    <CheckCircleIcon className="w-5 h-5 mr-2 text-indigo-600" />
                    Dostupnost:
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full font-medium ${
                    car.available === 'Dostupné' ? 'bg-green-100 text-green-800' :
                    car.available === 'Rezervováno' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {car.available}
                  </span>
                </p>
              </div>
              <div className={`w-full py-3 rounded-lg font-medium block text-center transition-colors ${
                car.available === 'Dostupné' 
                  ? 'bg-indigo-600 text-white hover:bg-indigo-700' 
                  : car.available === 'Rezervováno'
                  ? 'bg-yellow-500 text-white hover:bg-yellow-600'
                  : 'bg-gray-400 text-gray-200 cursor-not-allowed'
              }`}>
                {car.available === 'Dostupné' ? 'Více informací' : 
                 car.available === 'Rezervováno' ? 'Rezervováno' : 'Nedostupné'}
              </div>
            </div>
          </Link>
          ))
        )}
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
                <h3 className="font-bold text-lg text-gray-900">Kauce a pojištění</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Kauce dle zvoleného vozu (vratná při vrácení vozu)</span>
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
                {/* <li className="flex items-start">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Technická podpora v případě problémů</span>
                </li> */}
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
