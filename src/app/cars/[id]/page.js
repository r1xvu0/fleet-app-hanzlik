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

  // Fetch car data from API
  useEffect(() => {
    const fetchCar = async () => {
      setLoading(true);

      try {
        const response = await fetch(`/api/cars/${carId}`);
        if (response.ok) {
          const carData = await response.json();
          // Parse features JSON string to array
          const carWithParsedFeatures = {
            ...carData,
            features: JSON.parse(carData.features || '[]'),
            // Add default description if not provided by backend
            description: carData.description || `${carData.name} je spolehlivé vozidlo ideální pro práci řidiče. Nabízí moderní vybavení, nízké provozní náklady a pohodlí pro každodenní použití.`
          };
          setCar(carWithParsedFeatures);
        } else {
          console.error('Failed to fetch car data');
          setCar(null);
        }
      } catch (error) {
        console.error('Error fetching car:', error);
        setCar(null);
      } finally {
        setLoading(false);
      }
    };

    if (carId) {
      fetchCar();
    }
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
    <div className="bg-white min-h-screen">
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
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Car Image */}
            <div className="md:w-1/2">
              <div className="bg-gray-200 rounded-xl overflow-hidden h-96 relative mb-6">
                {car.image && (
                  <Image
                    src={car.image}
                    alt={car.name}
                    fill
                    className="object-cover"
                  />
                )}
              </div>

              {/* Rental Terms - under image */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
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

                <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
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
            </div>

            {/* Car Details */}
            <div className="md:w-1/2">
              <h1 className="text-3xl font-bold mb-4 text-gray-900">{car.name}</h1>
              <p className="text-gray-600 mb-6">{car.description}</p>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <BeakerIcon className="w-5 h-5 mr-2 text-indigo-600" />
                  <span><span className="font-medium text-gray-900">Palivo:</span> <span className="text-gray-700">{car.fuelType}</span></span>
                </div>
                <div className="flex items-center">
                  <BoltIcon className="w-5 h-5 mr-2 text-indigo-600" />
                  <span><span className="font-medium text-gray-900">Výkon:</span> <span className="text-gray-700">{car.power}</span></span>
                </div>
                <div className="flex items-center">
                  <UserGroupIcon className="w-5 h-5 mr-2 text-indigo-600" />
                  <span><span className="font-medium text-gray-900">Místa:</span> <span className="text-gray-700">{car.seats}</span></span>
                </div>
                <div className="flex items-center">
                  <CalendarIcon className="w-5 h-5 mr-2 text-indigo-600" />
                  <span><span className="font-medium text-gray-900">Ročník:</span> <span className="text-gray-700">{car.year}</span></span>
                </div>
                {car.engine && (
                  <div className="flex items-center">
                    <TruckIcon className="w-5 h-5 mr-2 text-indigo-600" />
                    <span><span className="font-medium text-gray-900">Motor:</span> <span className="text-gray-700">{car.engine}</span></span>
                  </div>
                )}
                {car.consumption && (
                  <div className="flex items-center">
                    <BeakerIcon className="w-5 h-5 mr-2 text-indigo-600" />
                    <span><span className="font-medium text-gray-900">Spotřeba:</span> <span className="text-gray-700">{car.consumption}</span></span>
                  </div>
                )}
                <div className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 mr-2 text-indigo-600" />
                  <span><span className="font-medium text-gray-900">Dostupnost:</span>
                    <span className={`ml-2 px-2 py-1 text-xs rounded-full font-medium ${car.available === 'Dostupné' ? 'bg-green-100 text-green-800' :
                      car.available === 'Rezervováno' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}>
                      {car.available}
                    </span>
                  </span>
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
                    <span className="font-bold text-gray-900">
                      {(() => {
                        const weeklyPrice = parseInt(car.price.replace(/[^\d]/g, ''));
                        const monthlyPrice = Math.round(weeklyPrice * 4.3); // More accurate monthly calculation
                        return `${monthlyPrice.toLocaleString('cs-CZ')} Kč`;
                      })()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                {car.available === 'Dostupné' ? (
                  <Link href="/contact" className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium text-center">
                    Rezervovat vůz
                  </Link>
                ) : car.available === 'Rezervováno' ? (
                  <div className="w-full bg-yellow-500 text-white py-3 rounded-lg font-medium text-center cursor-not-allowed">
                    Rezervováno
                  </div>
                ) : (
                  <div className="w-full bg-gray-400 text-gray-200 py-3 rounded-lg font-medium text-center cursor-not-allowed">
                    Nedostupné
                  </div>
                )}
                <Link href="/contact" className="w-full border border-indigo-600 text-indigo-600 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-medium text-center flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5 mr-2" />
                  Kontaktovat nás
                </Link>
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
            {car.engine && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-medium text-gray-500 mb-1">Motor</div>
                <div className="text-lg text-gray-900">{car.engine}</div>
              </div>
            )}
            {car.consumption && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-medium text-gray-500 mb-1">Spotřeba</div>
                <div className="text-lg text-gray-900">{car.consumption}</div>
              </div>
            )}
            {car.transmission && (
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <div className="font-medium text-gray-500 mb-1">Převodovka</div>
                <div className="text-lg text-gray-900">{car.transmission}</div>
              </div>
            )}

            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-medium text-gray-500 mb-1">Počet míst</div>
              <div className="text-lg text-gray-900">{car.seats}</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-medium text-gray-500 mb-1">Ročník</div>
              <div className="text-lg text-gray-900">{car.year}</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <div className="font-medium text-gray-500 mb-1">Typ paliva</div>
              <div className="text-lg text-gray-900">{car.fuelType}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Car Features */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-gray-900">Vybavení a funkce</h2>

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
          {/* <h2 className="text-2xl font-bold mb-8 text-gray-900">Podmínky pronájmu</h2> */}



          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h3 className="font-bold text-2xl mb-4 text-gray-900">Podmínky Nájmu:</h3>
            <div className="space-y-4 text-gray-700">
              <p>• Při předání auta, stačí zaplatit kauci první nájemné se strhává až z vašeho výdělku.</p>

              <p>• Nájemné se platí každé úterý stržením z vašeho výdělku.</p>

              <p>• Pro pozastavení nájmu v případě nemoci, je potřeba nám auto vrátit, až vrácením auta se stopuje placení nájmu.</p>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Při poškození vozu se platí spoluúčast:</h4>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>1 000,- Kč</strong> – při poškození čelního skla nebo defektu kola.</li>
                  <li>• <strong>2 000,- Kč</strong> – za každé porušení zákazu kouření znečištění interiéru.</li>
                  <li>• <strong>4 000,- Kč</strong> – za neoznámení dopravní nehody nebo nového poškození, nenahlášení potřebného servisu auta, ztrátě klíče.</li>
                  <li>• <strong>10 000,- Kč</strong> – jakékoli nové poškození na voze včetně škody i na zaparkovaném autě.</li>
                </ul>
              </div>

              <div className="mt-6">
                <h4 className="font-semibold text-gray-900 mb-3">Pokuty za rychlost, parkování a další:</h4>
                <p>Za přestupky v době půjčení auta nese zodpovědnost nájemce vozu, jakékoli došlé pokuty mu budou přeposlány ke kontrole a následně bude účtována plná výše z dané pokuty.</p>
              </div>
            </div>
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
    </div>
  );
} 