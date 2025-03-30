// components/FoodDeliveryCalculator.jsx
"use client";

import { useState } from "react";
import {
  InformationCircleIcon,
  TruckIcon,
  ClockIcon,
  CurrencyEuroIcon,
} from "@heroicons/react/24/outline";

export default function FoodDeliveryCalculator({ brandColors, rates }) {
  const [deliveries, setDeliveries] = useState(20);
  const [days, setDays] = useState(5);
  const [tips, setTips] = useState(1500);

  // Calculation logic
  const baseEarnings = deliveries * rates.perDelivery * days;
  const bonus = deliveries >= rates.bonusThreshold ? rates.bonus : 0;
  const total = baseEarnings + bonus + tips;
  const weekly = total;
  const monthly = weekly * 4;

  return (
    <div className="bg-white p-8 rounded-xl shadow-xl">
      <div className={`flex items-center mb-6 ${brandColors.text}`}>
        <TruckIcon className="w-8 h-8 mr-3" />
        <h2 className="text-2xl font-bold">Kalkulačka pro doručování jídla</h2>
      </div>

      <div className="space-y-8">
        {/* Deliveries Input */}
        <div>
          <label className="block mb-4 text-lg font-medium">
            Doručení denně: {deliveries}
          </label>
          <input
            type="range"
            min="10"
            max="50"
            value={deliveries}
            onChange={(e) => setDeliveries(Number(e.target.value))}
            className={`w-full accent-${brandColors.accent}`}
          />
        </div>

        {/* Days Input */}
        <div>
          <label className="block mb-4 text-lg font-medium">
            Dní v týdnu: {days}
          </label>
          <input
            type="range"
            min="3"
            max="7"
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            className={`w-full accent-${brandColors.accent}`}
          />
        </div>

        {/* Tips Input */}
        <div>
          <label className="block mb-4 text-lg font-medium">
            Měsíční spropitné (Kč):
            <input
              type="number"
              value={tips}
              onChange={(e) => setTips(Number(e.target.value))}
              className={`ml-3 p-2 border rounded ${brandColors.border}`}
            />
          </label>
        </div>

        {/* Results */}
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Základní výdělek:</span>
            <span className={`font-bold ${brandColors.text}`}>
              {baseEarnings.toLocaleString()} Kč
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span>Bonus za aktivitu:</span>
            <span className={`font-bold ${brandColors.text}`}>
              +{bonus.toLocaleString()} Kč
            </span>
          </div>

          <div className="flex justify-between items-center border-t pt-4">
            <span className="font-bold">Celkem měsíčně:</span>
            <span className={`text-2xl font-bold ${brandColors.text}`}>
              {monthly.toLocaleString()} Kč
            </span>
          </div>

          <div className="text-sm text-gray-500 flex items-center">
            <InformationCircleIcon className="w-5 h-5 mr-2" />
            Průměrné spropitné: 1 000-2 000 Kč/měsíc
          </div>
        </div>
      </div>
    </div>
  );
}
