// components/CarRental.jsx
import { ArrowRightIcon, TruckIcon, CheckIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import CarCarousel from './CarCarousel';

export default function CarRental() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-indigo-50 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-indigo-100 rounded-full -mr-48 -mt-48 opacity-50"></div>
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-indigo-100 rounded-full -ml-48 -mb-48 opacity-50"></div>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-900">Nabídka našich vozů</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Každý z nás ví, jak moc záleží na tom, v čem celý den jezdíš. Proto naše flotila nabízí pohodlné, spolehlivé a udržované vozy, na které je spoleh.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="flex items-center mb-6">
                <div className="bg-indigo-100 p-3 rounded-xl">
                  <TruckIcon className="w-8 h-8 text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold ml-4 text-indigo-900">Pronájem vozů</h3>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Auta do nájmu od <span className="font-semibold text-indigo-900">4 500,- Kč/týden</span> včetně flotily, servisu a pojištění</p>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Několik modelů k dispozici podle vašich preferencí</p>
                </div>
                <div className="flex items-start">
                  <CheckIcon className="w-5 h-5 text-green-500 mr-2 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Možnost kdykoliv změnit auto podle aktuálních potřeb</p>
                </div>
              </div>

              {/* <div className="border-t border-gray-200 pt-6 mb-6">
                <h4 className="text-xl font-semibold mb-4 text-indigo-900">Auto do odkupu</h4>
                <p className="text-gray-600 mb-6">
                  Nemáte vlastní auto a nechcete platit stále někde nájem? Vemte si od nás auto do odkupu! 
                  Po 3 měsících spolupráce s námi si můžete vybrat auto podle vašich představ a my vám ho koupíme. 
                  My vám pak z výdělku místo nájmu strháváme dopředu dohodnutou splátku auta.
                </p>
                <div className="bg-indigo-50 p-4 rounded-xl text-indigo-900 font-medium">
                  Po zaplacení poslední splátky je auto vaše. Další splátky/nájem již neplatíte, jelikož jezdíte s vlastním autem!
                </div>
              </div> */}

              <Link href="/cars" className="bg-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-indigo-700 transition-all flex items-center justify-center md:justify-start w-full md:w-auto shadow-lg hover:shadow-xl">
                Zobrazit nabídku
                <ArrowRightIcon className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <CarCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}