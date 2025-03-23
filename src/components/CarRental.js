// components/CarRental.jsx
import { ArrowRightIcon, TruckIcon } from '@heroicons/react/24/outline';

export default function CarRental() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-6">Nabídka našich vozů</h2>
          <p className="text-lg text-gray-600 mb-8">
            Auta do nájmu od 3 500,- Kč/týden včetně flotily, servisu a pojištění.
          </p>
          <p className="text-gray-600 mb-8">
            Nemáte vlastní auto a nechcete platit stále někde nájem? Vemte si od nás auto do odkupu! 
            Po 3 měsících spolupráce s námi si můžete vybrat auto podle vašich představ a my vám ho koupíme. 
            My vám pak z výdělku místo nájmu strháváme dopředu dohodnutou splátku auta. Po zaplacení poslední 
            splátky je auto vaše. Další splátky/nájem již neplatíte, jelikož jezdíte s vlastním autem!
          </p>
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center">
            Zobrazit nabídku
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </button>
        </div>
        <div className="bg-gray-100 h-96 rounded-xl"></div>
      </div>
    </section>
  );
}