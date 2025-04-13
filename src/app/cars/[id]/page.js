"use client";

import { useState, useEffect } from "react";
import {
  CheckCircleIcon,
  BeakerIcon,
  BoltIcon,
  UserGroupIcon,
  CalendarIcon,
  TruckIcon,
  CurrencyDollarIcon,
  ArrowLeftIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CarDetailPage() {
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();
  const carId = parseInt(params.id);
  
  // Mocked car data - in a real app this would come from an API or database
  useEffect(() => {
    // Simulate fetching car data
    const fetchCar = () => {
      setLoading(true);
      
      // Sample cars database (same as on the cars page)
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
          description: "Škoda Octavia je ideálním vozem pro každodenní provoz. Nabízí dostatek prostoru pro pohodlné cestování a zavazadla, nízkou spotřebu paliva a spolehlivý výkon.",
          specifications: {
            engine: "1.6 TDI",
            consumption: "4.5 l/100km",
            transmission: "Manuální, 6-stupňová",
            trunk: "600 litrů",
            dimensions: "4,689 x 1,829 x 1,470 mm",
            weight: "1,350 kg"
          }
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
          description: "Sportovní verze oblíbeného modelu Octavia. Vůz RS nabízí dynamický design, sportovní podvozek a výkonný motor, který zajišťuje svižnou jízdu a zábavu za volantem.",
          specifications: {
            engine: "2.0 TDI",
            consumption: "5.2 l/100km",
            transmission: "Automatická DSG, 7-stupňová",
            trunk: "580 litrů",
            dimensions: "4,702 x 1,829 x 1,455 mm",
            weight: "1,495 kg"
          }
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
          description: "Toyota Corolla Hybrid kombinuje spolehlivost, nízké provozní náklady a ekologický provoz. Hybridní pohon nabízí plynulou jízdu, nízkou spotřebu a tichý chod ve městě.",
          specifications: {
            engine: "1.8 Hybrid",
            consumption: "3.8 l/100km",
            transmission: "Automatická e-CVT",
            trunk: "471 litrů",
            dimensions: "4,630 x 1,780 x 1,435 mm",
            weight: "1,400 kg"
          }
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
          description: "Luxusní hybridní sedan s prostorným interiérem a moderními technologiemi. Toyota Camry nabízí kombinaci komfortu, výkonu a nízké spotřeby paliva.",
          specifications: {
            engine: "2.5 Hybrid",
            consumption: "4.3 l/100km",
            transmission: "Automatická e-CVT",
            trunk: "524 litrů",
            dimensions: "4,885 x 1,840 x 1,445 mm",
            weight: "1,595 kg"
          }
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
          description: "Plně elektrické SUV s dlouhým dojezdem a prostorným interiérem. Škoda Enyaq iV nabízí moderní design, pokročilé technologie a nulové emise.",
          specifications: {
            battery: "77 kWh",
            range: "520 km (WLTP)",
            chargingTime: "30 min (5-80%, DC 125kW)",
            trunk: "585 litrů",
            dimensions: "4,649 x 1,879 x 1,616 mm",
            weight: "2,010 kg"
          }
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
          description: "Revoluční elektromobil s výjimečným výkonem a dojezdem. Tesla Model 3 nabízí minimalistický design, pokročilé asistenční systémy a přístup k rozsáhlé síti Superchargerů.",
          specifications: {
            battery: "75 kWh",
            range: "580 km (WLTP)",
            chargingTime: "25 min (10-80%, Supercharger)",
            trunk: "425 litrů + 117 litrů (frunk)",
            dimensions: "4,694 x 1,849 x 1,443 mm",
            weight: "1,830 kg"
          }
        }
      ];
      
      const foundCar = cars.find(c => c.id === carId);
      if (foundCar) {
        setCar(foundCar);
      }
      setLoading(false);
    };
    
    fetchCar();
  }, [carId]);
  
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-indigo-600"></div>
      </div>
    );
  }
  
  if (!car) {
    return (
      <div className="min-h-screen flex items-center justify-center flex-col px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">Auto nenalezeno</h1>
        <p className="text-gray-600 mb-8">Toto auto již není k dispozici nebo bylo odstraněno.</p>
        <Link href="/cars" className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
          <ArrowLeftIcon className="w-5 h-5 inline-block mr-2" />
          Zpět na vozy
        </Link>
      </div>
    );
  }
  
  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-gray-100 py-3 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center text-sm text-gray-600">
            <Link href="/" className="hover:text-indigo-600 transition-colors">Domů</Link>
            <span className="mx-2">/</span>
            <Link href="/cars" className="hover:text-indigo-600 transition-colors">Vozy</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 font-medium">{car.name}</span>
          </div>
        </div>
      </div>
      
      {/* Car Overview */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Car Image */}
            <div className="md:w-1/2">
              <div className="bg-gray-200 rounded-xl overflow-hidden h-96 relative">
                {car.image && (
                  <Image 
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>
            </div>
            
            {/* Car Details */}
            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold mb-4 text-white">{car.name}</h1>
              <p className="text-gray-600 mb-6">{car.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <BeakerIcon className="w-5 h-5 mr-2 text-indigo-600" />
                  <span><span className="font-medium text-white">Palivo:</span> <span className="">{car.fuelType}</span></span>
                </div>
                <div className="flex items-center">
                  <BoltIcon className="w-5 h-5 mr-2 text-indigo-600" />
                  <span><span className="font-medium">Výkon:</span> {car.power}</span>
                </div>
                <div className="flex items-center">
                  <UserGroupIcon className="w-5 h-5 mr-2 text-indigo-600" />
                  <span><span className="font-medium">Místa:</span> {car.seats}</span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2 text-indigo-600" />
                  <span><span className="font-medium">Ročník:</span> {car.year}</span>
                </div>
              </div>
              
              <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                <h3 className="text-lg font-bold mb-4 flex items-center text-gray-900">
                  <CurrencyDollarIcon className="w-5 h-5 mr-2 text-indigo-600" />
                  Cena pronájmu
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Cena týden:</span>
                    <span className="font-bold text-gray-900">{car.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Záloha:</span>
                    <span className="font-bold text-gray-900">10,000 Kč</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Cena měsíc:</span>
                    <span className="font-bold text-gray-900">{parseInt(car.price.replace(/[^\d]/g, '')) * 3.8} Kč</span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-center">
                  Rezervovat vůz
                </Link>
                <a href="tel:+420123456789" className="w-full border border-indigo-600 text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-medium text-center flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  +420 123 456 789
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Car Specifications */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Technické specifikace</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {Object.entries(car.specifications).map(([key, value]) => (
              <div key={key} className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-medium text-gray-500 mb-1 capitalize">{key}</div>
                <div className="text-lg text-gray-900">{value}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Car Features */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-white">Vybavení a funkce</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            {car.features.map((feature, index) => (
              <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Rental Terms */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Podmínky pronájmu</h2>
          
          <div className="bg-white p-6 rounded-xl shadow-sm mb-6">
            <h3 className="font-bold text-lg mb-4 text-gray-900">Co je zahrnuto v ceně</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Kompletní pojištění (havarijní pojištění, povinné ručení)</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Pravidelný servis a údržba vozidla</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Zimní a letní pneumatiky dle sezóny</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Neomezený počet kilometrů</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">24/7 asistenční služba</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-lg mb-4 text-gray-900">Podmínky pro řidiče</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Minimální věk 21 let</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Řidičský průkaz skupiny B (minimálně 2 roky)</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Záloha 10,000 Kč (vratná při vrácení vozidla)</span>
              </li>
              <li className="flex items-start">
                <CheckCircleIcon className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">Účet v jedné z partnerských aplikací (Bolt, Uber, Liftago)</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-indigo-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Připraveni začít vydělávat?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">Rezervujte si tento vůz ještě dnes a začněte si vydělávat jako profesionální řidič s naší flotilou.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="px-8 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-100 transition-colors inline-block">
              Rezervovat vozidlo
            </Link>
            <Link href="/how-it-works" className="px-8 py-3 border border-white hover:bg-white/20 rounded-lg font-medium transition-colors inline-block">
              Jak to funguje
            </Link>
          </div>
        </div>
      </section>
    </>
  );
} 