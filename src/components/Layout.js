import Link from 'next/link';
import { PhoneIcon, MapPinIcon, EnvelopeIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';

export default function Layout({ children }) {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-indigo-900 text-white py-2 px-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <PhoneIcon className="w-4 h-4 mr-1" />
              <span>+420 123 456 789</span>
            </div>
            <div className="flex items-center">
              <EnvelopeIcon className="w-4 h-4 mr-1" />
              <span>support@taxifleet.cz</span>
            </div>
          </div>
          <div className="flex items-center">
            <MapPinIcon className="w-4 h-4 mr-1" />
            <span>Prague, Czech Republic</span>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-900">
              TaxiFleet
            </Link>
            <div className="hidden md:flex space-x-8">
              <Link href="/about" className="hover:text-indigo-600">O nás</Link>
              <Link href="/benefits" className="hover:text-indigo-600">Výhody</Link>
              <Link href="/pricing" className="hover:text-indigo-600">Ceník</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Secondary Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-sm">
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-indigo-600">Domů</Link>
            <Link href="/how-it-works" className="hover:text-indigo-600">Jak to funguje</Link>
            <Link href="/bolt" className="hover:text-indigo-600">Bolt</Link>
            <Link href="/uber" className="hover:text-indigo-600">Uber</Link>
            {/* <a href="https://bolt.eu" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">Bolt</a>
            <a href="https://uber.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">Uber</a>
            <a href="https://liftago.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600">Liftago</a> */}
            <Link href="/cars" className="hover:text-indigo-600">Naše vozy</Link>
            <Link href="/contact" className="hover:text-indigo-600">Kontakt</Link>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://m.me/your-page" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 flex items-center">
              <ChatBubbleBottomCenterTextIcon className="w-4 h-4 mr-1" />
              FB Messenger
            </a>
            <a href="https://wa.me/734167255" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-600 flex items-center">
              <ChatBubbleBottomCenterTextIcon className="w-4 h-4 mr-1" />
              WhatsApp: 734 167 255
            </a>
          </div>
        </div>
      </div>

      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">TaxiFleet</h3>
            <p className="text-sm">Connecting professional drivers since 2025</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              <li><Link href="/drivers" className="hover:text-white">Driver Benefits</Link></li>
              <li><Link href="/contact" className="hover:text-white">Contact Support</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}