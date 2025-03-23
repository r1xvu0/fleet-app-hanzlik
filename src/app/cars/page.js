// app/cars/page.js
import { CheckIcon, BoltIcon, TruckIcon, UserIcon, DevicePhoneMobileIcon } from '@heroicons/react/24/outline';


export default function CarsPage() {
    return (
    //   <Layout>
    <>
        {/* Hero */}
        <section className="bg-indigo-900 text-white py-32 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">Naše moderní vozový park</h1>
            <p className="text-xl">Vyberte si z nejoblíbenějších modelů v Praze</p>
          </div>
        </section>
  
        {/* Car Filter */}
        <div className="max-w-6xl mx-auto py-12 px-4">
          <div className="flex gap-4 mb-8">
            <button className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-900">Všechny</button>
            <button className="px-4 py-2 rounded-full hover:bg-indigo-100">Hybrid</button>
            <button className="px-4 py-2 rounded-full hover:bg-indigo-100">Elektromobil</button>
            <button className="px-4 py-2 rounded-full hover:bg-indigo-100">Diesel</button>
          </div>
        </div>
  
        {/* Car Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-4 pb-20">
          {[1,2,3,4,5,6].map((car) => (
            <div key={car} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Škoda Octavia 1.6 TDI</h3>
                <div className="space-y-2 mb-4">
                  <p className="flex justify-between">
                    <span>Cena týden:</span>
                    <span className="font-bold">3 990 Kč</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Typ:</span>
                    <span>Diesel</span>
                  </p>
                  <p className="flex justify-between">
                    <span>Ročník:</span>
                    <span>2022</span>
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
            <h2 className="text-3xl font-bold mb-8 text-center">Podmínky pronájmu</h2>
            <div className="space-y-6">
              {[
                "Záloha 10 000 Kč (vratná při vrácení vozu)",
                "Pojištění v ceně pronájmu",
                "Neomezený kilometr",
                "24/7 Asistence na silnici",
                "Flexibilní doba pronájmu (1 týden - 24 měsíců)"
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg">
                  <CheckIcon className="w-6 h-6 text-green-500 mr-3" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>
        </>
    //   </Layout>
    )
  }