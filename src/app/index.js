import Layout from '@/components/Layout';
import { CheckIcon, ClockIcon, CurrencyEuroIcon, UserGroupIcon } from '@heroicons/react/24/outline';

export default function HomePage() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-indigo-900 text-white py-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Join Prague's Leading Taxi Fleet
          </h1>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Maximize your earnings with our advanced booking system, premium rates, 
            and 24/7 driver support
          </p>
          <div className="flex justify-center space-x-4">
            <button className="bg-indigo-500 hover:bg-indigo-400 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Join Now
            </button>
            <button className="border border-white hover:bg-white hover:text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 px-4 -mt-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 bg-indigo-100 p-8 rounded-xl shadow-lg">
          {[
            { title: 'Active Drivers', value: '4200+', icon: UserGroupIcon },
            { title: 'Avg. Earnings', value: '35%↑', icon: CurrencyEuroIcon },
            { title: 'Support Time', value: '<5min', icon: ClockIcon },
            { title: 'Cities', value: '12+', icon: CheckIcon },
          ].map((stat, index) => (
            <div key={index} className="text-center p-4">
              <stat.icon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
              <div className="text-3xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.title}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-4">Driver Benefits</h3>
              <ul className="space-y-4">
                {[
                  'Weekly bonus incentives',
                  'Free vehicle maintenance',
                  'Insurance coverage',
                  'Flexible working hours',
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <CheckIcon className="w-6 h-6 text-green-500 mr-2" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-indigo-900 text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Earnings Calculator</h3>
              <div className="space-y-6">
                <div>
                  <label className="block mb-2">Daily Rides</label>
                  <input
                    type="range"
                    min="5"
                    max="30"
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block mb-2">Weekly Earnings Estimate</label>
                  <div className="text-3xl font-bold">€850-€1200</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-indigo-900 text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Start Earning More Today</h2>
          <p className="mb-8">Join our fleet in 3 simple steps</p>
          <div className="flex justify-center space-x-8 mb-12">
            {['1. Apply', '2. Verify', '3. Drive'].map((step, index) => (
              <div key={index} className="bg-white text-indigo-900 w-24 h-24 rounded-full flex items-center justify-center font-bold">
                {step}
              </div>
            ))}
          </div>
          <button className="bg-white text-indigo-900 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </Layout>
  );
}