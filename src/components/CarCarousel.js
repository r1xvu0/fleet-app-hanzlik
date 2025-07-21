"use client";

import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function CarCarousel() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await fetch('/api/cars');
        if (response.ok) {
          const data = await response.json();
          // Filter only cars with images and available cars
          const availableCarsWithImages = data.filter(car => 
            car.image && car.available === 'Dostupné'
          );
          setCars(availableCarsWithImages);
        }
      } catch (error) {
        console.error('Error fetching cars:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return (
      <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-3xl shadow-lg p-6 h-96 flex items-center justify-center">
        <div className="animate-pulse">
          <div className="w-full h-80 bg-indigo-200 rounded-2xl"></div>
        </div>
      </div>
    );
  }

  if (cars.length === 0) {
    return (
      <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-3xl shadow-lg p-6 h-96 flex items-center justify-center">
        <img
          src="https://placehold.co/600x400/indigo/white?text=Nabídka+našich+vozů"
          alt="Nabídka našich vozů"
          className="w-full h-auto max-h-80 object-cover rounded-2xl shadow-inner"
        />
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-indigo-100 to-indigo-50 rounded-3xl shadow-lg overflow-hidden h-96">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        loop={cars.length > 1}
        className="h-full"
      >
        {cars.map((car) => (
          <SwiperSlide key={car.id}>
            <div className="relative h-full rounded-2xl overflow-hidden shadow-inner">
              <img
                src={car.image}
                alt={car.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h4 className="text-white font-bold text-lg">{car.name}</h4>
                <p className="text-white/90 text-sm">{car.year} • {car.fuelType}</p>
                <p className="text-white/90 text-sm font-medium">{car.price}/týden</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}