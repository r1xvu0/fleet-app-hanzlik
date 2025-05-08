// components/EarningsCalculator.js
"use client";

import { useState } from "react";
import { 
  InformationCircleIcon, 
  CurrencyDollarIcon,
  ClockIcon,
  ChartBarIcon,
  TruckIcon
} from "@heroicons/react/24/outline";

export default function EarningsCalculator() {
  const [hours, setHours] = useState(40);
  const [platform, setPlatform] = useState("bolt");

  // Platform rates
  const platformData = {
    bolt: {
      name: "Bolt",
      color: "from-indigo-600 to-indigo-700",
      hourlyRate: 350,
      bonus: 1500,
      commission: 15
    },
    uber: {
      name: "Uber",
      color: "from-black to-gray-800",
      hourlyRate: 350,
      bonus: 1200,
      commission: 15
    },
    // liftago: {
    //   name: "Liftago",
    //   color: "from-green-600 to-green-700",
    //   hourlyRate: 350,
    //   bonus: 1000,
    //   commission: 16
    // }
  };

  const rates = platformData[platform];

  // Calculation logic
  const hourlyEarnings = rates.hourlyRate;
  const dailyHours = hours / 5; // Assume 5 workdays per week
  const dailyEarnings = dailyHours * hourlyEarnings;
  const bonus = hours >= 40 ? rates.bonus : 0;
  const weeklyEarnings = (hours * hourlyEarnings) + bonus;
  const monthly = weeklyEarnings * 4;
  const yearlyEstimate = monthly * 12;

  return (
    <div className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Spočítejte si svůj výdělek</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Pomocí naší kalkulačky si můžete odhadnout, kolik byste si mohli vydělat jako řidič v naší flotile.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {/* Input Side */}
          <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-6 text-gray-900 flex items-center">
              <TruckIcon className="w-6 h-6 mr-2 text-indigo-600" />
              Nastavení kalkulace
            </h3>

            {/* Platform Selection */}
            <div className="mb-8">
              <label className="block mb-3 font-medium text-gray-700">Vyberte platformu:</label>
              <div className="grid grid-cols-3 gap-2">
                {Object.keys(platformData).map((key) => (
                  <button 
                    key={key}
                    onClick={() => setPlatform(key)}
                    className={`py-3 px-4 rounded-lg border text-center transition-all ${
                      platform === key 
                        ? `bg-gradient-to-r ${platformData[key].color} text-white border-transparent`
                        : 'bg-white border-gray-200 hover:border-gray-300 text-gray-700'
                    }`}
                  >
                    {platformData[key].name}
                  </button>
                ))}
              </div>
            </div>

            {/* Hours Input */}
            <div className="mb-8">
              <label className="block mb-3 font-medium text-gray-700 flex justify-between">
                <span>Hodin týdně:</span>
                <span className="text-indigo-600 font-bold">{hours}</span>
              </label>
              <input
                type="range"
                min="10"
                max="60"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-indigo-600"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>10</span>
                <span>40 (plný úvazek)</span>
                <span>60</span>
              </div>
            </div>

            {/* Hourly Rate Information */}
            <div className="mb-8 bg-indigo-50 p-4 rounded-lg">
              <div className="flex items-start">
                <CurrencyDollarIcon className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-700">Hodinová sazba: {hourlyEarnings} Kč</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Fixní hodinová sazba za vaši práci.
                  </p>
                </div>
              </div>
            </div>

            {/* Commission Information */}
            <div className="mt-6 bg-indigo-50 p-4 rounded-lg">
              <div className="flex items-start">
                <InformationCircleIcon className="w-5 h-5 text-indigo-600 mr-2 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-700">
                  Provize {rates.commission}% je již zahrnuta v kalkulaci. 
                  Pro řidiče s vysokým výkonem můžeme nabídnout nižší provizi.
                </p>
              </div>
            </div>
          </div>

          {/* Results Side */}
          <div className="md:col-span-3 bg-gradient-to-br from-indigo-900 to-indigo-800 text-white p-8 rounded-xl shadow-md">
            <h3 className="text-xl font-bold mb-6 flex items-center">
              <ChartBarIcon className="w-6 h-6 mr-2" />
              Váš potenciální výdělek
            </h3>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-indigo-200 mb-2 flex items-center">
                  <ClockIcon className="w-5 h-5 mr-2" />
                  Denní odhad
                </div>
                <div className="text-3xl font-bold">{Math.round(dailyEarnings).toLocaleString()} Kč</div>
                <div className="text-sm text-indigo-200 mt-2">{Math.round(dailyHours)} hodin × {hourlyEarnings} Kč</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-indigo-200 mb-2 flex items-center">
                  <ClockIcon className="w-5 h-5 mr-2" />
                  Týdenní odhad
                </div>
                <div className="text-3xl font-bold">{Math.round(weeklyEarnings).toLocaleString()} Kč</div>
                <div className="text-sm text-indigo-200 mt-2">{hours} hodin × {hourlyEarnings} Kč</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
                <div className="text-indigo-200 mb-2 flex items-center">
                  <ClockIcon className="w-5 h-5 mr-2" />
                  Měsíční odhad
                </div>
                <div className="text-3xl font-bold">{Math.round(monthly).toLocaleString()} Kč</div>
                <div className="text-sm text-indigo-200 mt-2">4 týdny</div>
              </div>
            </div>

            {/* Bonus Information */}
            {bonus > 0 && (
              <div className="bg-indigo-700 p-4 rounded-lg mb-8">
                <div className="flex items-start">
                  <CurrencyDollarIcon className="w-5 h-5 text-indigo-200 mr-2 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">Bonus za plný úvazek: +{bonus.toLocaleString()} Kč</p>
                    <p className="text-sm text-indigo-200 mt-1">
                      Při odpracování 40+ hodin týdně získáváte automaticky nárok na týdenní bonus.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Yearly Estimate */}
            <div className="border-t border-indigo-700 pt-6 mt-6">
              <div className="flex justify-between items-center">
                <div className="text-xl">Roční potenciál:</div>
                <div className="text-2xl font-bold">{Math.round(yearlyEstimate).toLocaleString()} Kč</div>
              </div>
              <p className="text-indigo-200 mt-4 text-sm">
                Nezapomeňte, že výdělky se mohou lišit v závislosti na sezóně, lokalitě a dalších faktorech.
                Pro konzultaci vašeho konkrétního případu nás neváhejte kontaktovat.
              </p>
            </div>

            {/* CTA */}
            <div className="mt-8">
              <a 
                href="/contact" 
                className="inline-block bg-white text-indigo-700 px-6 py-3 rounded-lg font-medium hover:bg-indigo-50 transition-colors"
              >
                Začít vydělávat
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
