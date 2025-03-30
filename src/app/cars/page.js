// app/cars/page.js
"use client";

import { useState } from "react";
import {
  CheckCircleIcon,
  MinusIcon, // CheckIcon,
  // XIcon,
  // BoltIcon,
  // TruckIcon,
  // UserGroupIcon,
  // CalendarIcon,
} from "@heroicons/react/24/outline";

const Modal = ({ car, onClose }) => {
  if (!car) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white rounded-xl max-w-2xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full"
        >
          <MinusIcon className="w-6 h-6 text-gray-600" />
        </button>

        <div className="p-8">
          <h2 className="text-3xl font-bold mb-4">{car.name}</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="aspect-video bg-gray-200 rounded-xl"></div>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  {/* <FuelIcon className="w-5 h-5 mr-2 text-indigo-600" /> */}
                  <div className="w-5 h-5 mr-2 bg-indigo-600 rounded-sm" />
                  <span>{car.fuelType}</span>
                </div>
                <div className="flex items-center">
                  {/* <BoltIcon className="w-5 h-5 mr-2 text-indigo-600" /> */}
                  <div className="w-5 h-5 mr-2 bg-indigo-600 rounded-sm" />
                  <span>{car.power}</span>
                </div>
                <div className="flex items-center">
                  {/* <UserGroupIcon className="w-5 h-5 mr-2 text-indigo-600" /> */}
                  <div className="w-5 h-5 mr-2 bg-indigo-600 rounded-sm" />
                  <span>{car.seats} seats</span>
                </div>
                <div className="flex items-center">
                  {/* <CalendarIcon className="w-5 h-5 mr-2 text-indigo-600" /> */}
                  <div className="w-5 h-5 mr-2 bg-indigo-600 rounded-sm" />
                  <span>{car.year}</span>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold mb-4">Podmínky pronájmu</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Cena týden:</span>
                    <span className="font-bold">{car.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Záloha:</span>
                    <span className="font-bold">10,000 Kč</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-2">Vybavení</h3>
                <ul className="space-y-2">
                  {car.features.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <CheckCircleIcon className="w-4 h-4 text-green-500 mr-2" />

                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">
                Pronajmout vůz
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function CarsPage() {
  const [selectedCar, setSelectedCar] = useState(null);
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
      name: "Škoda Octavia 1.9 TDI",
      price: "5,990 Kč",
      type: "Diesel",
      year: 2022,
      fuelType: "Diesel",
      power: "149 HP",
      seats: 5,
      features: ["Klimatizace", "Parkovací senzory", "Navigace", "Bluetooth"],
      image: "/images/skoda-octavia.jpg",
    },
    // Add more cars as needed...
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-indigo-900 text-white py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Naše moderní vozový park</h1>
          <p className="text-xl">
            Vyberte si z nejoblíbenějších modelů v Praze
          </p>
        </div>
      </section>

      {/* Car Filter */}
      <div className="max-w-6xl mx-auto py-12 px-4">
        <div className="flex flex-wrap gap-4 mb-8">
          {["all", "Hybrid", "Elektromobil", "Diesel"].map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 rounded-full ${
                activeFilter === filter
                  ? "bg-indigo-600 text-white"
                  : "bg-indigo-100 text-indigo-900 hover:bg-indigo-200"
              }`}
            >
              {filter === "all" ? "Všechny" : filter}
            </button>
          ))}
        </div>
      </div>

      {/* Car Grid */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4 pb-20">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
            onClick={() => setSelectedCar(car)}
          >
            <div className="h-48 bg-gray-200"></div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{car.name}</h3>
              <div className="space-y-2 mb-4">
                <p className="flex justify-between">
                  <span>Cena týden:</span>
                  <span className="font-bold">{car.price}</span>
                </p>
                <p className="flex justify-between">
                  <span>Typ:</span>
                  <span>{car.type}</span>
                </p>
                <p className="flex justify-between">
                  <span>Ročník:</span>
                  <span>{car.year}</span>
                </p>
              </div>
              <button className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700">
                Více informací
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Rental Conditions */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Podmínky pronájmu
          </h2>
          <div className="space-y-6">
            {[
              "Záloha 10 000 Kč (vratná při vrácení vozu)",
              "Pojištění v ceně pronájmu",
              "Neomezený kilometr",
              "24/7 Asistence na silnici",
              "Flexibilní doba pronájmu (1 týden - 24 měsíců)",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center bg-white p-4 rounded-lg"
              >
                <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Car Modal */}
      <Modal car={selectedCar} onClose={() => setSelectedCar(null)} />
    </>
  );
}
