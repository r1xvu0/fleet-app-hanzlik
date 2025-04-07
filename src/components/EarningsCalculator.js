// components/EarningsCalculator.jsx
"use client";

import { useState } from "react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

export default function EarningsCalculator({ brandColors, rates }) {
  const [rides, setRides] = useState(15);
  const [hours, setHours] = useState(40);

  // Calculation logic
  const baseEarnings = rides * rates.perRide;
  const bonus = hours >= 40 ? rates.bonus : 0;
  const total = baseEarnings + bonus;
  const weekly = total * 7;
  const monthly = weekly * 4;

  return (
    <div className="bg-white p-8 rounded-xl shadow-xl">
      <h2 className={`text-2xl font-bold mb-6 text-center ${brandColors.text}`}>
        Kalkulačka výdělků
      </h2>

      <div className="flex justify-center items-center">
        <div className="space-y-8 w-[50%]">
          {/* Rides Input */}
          <div>
            <label className="block mb-4 text-lg font-medium">
              Počet jízd denně: {rides}
            </label>
            <input
              type="range"
              min="5"
              max="50"
              value={rides}
              onChange={(e) => setRides(Number(e.target.value))}
              className={`w-full accent-${brandColors.accent}`}
            />
            <div className="text-sm text-gray-500 mt-2">
              Průměr: 15-25 jízd/den
            </div>
          </div>

          {/* Hours Input */}
          <div>
            <label className="block mb-4 text-lg font-medium">
              Hodin týdně: {hours}
            </label>
            <input
              type="range"
              min="10"
              max="60"
              value={hours}
              onChange={(e) => setHours(Number(e.target.value))}
              className={`w-full accent-${brandColors.accent}`}
            />
          </div>

          {/* Results */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Základní výdělek:</span>
              <span className={`font-bold ${brandColors.text}`}>
                {baseEarnings.toLocaleString()} Kč/den
              </span>
            </div>

            {bonus > 0 && (
              <div className="flex justify-between items-center">
                <span>Bonus za plný úvazek:</span>
                <span className={`font-bold ${brandColors.text}`}>
                  +{bonus.toLocaleString()} Kč
                </span>
              </div>
            )}

            <div className="flex justify-between items-center border-t pt-4">
              <span className="font-bold">Celkem:</span>
              <span className={`text-2xl font-bold ${brandColors.text}`}>
                {weekly.toLocaleString()} Kč/týden
              </span>
            </div>

            <div className="text-sm text-gray-500 flex items-center">
              <InformationCircleIcon className="w-5 h-5 mr-2" />
              Odhad měsíčního výdělku: {monthly.toLocaleString()} Kč
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
