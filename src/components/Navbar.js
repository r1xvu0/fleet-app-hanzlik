// components/Navbar.jsx
import Link from "next/link";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ChatBubbleBottomCenterTextIcon,
} from "@heroicons/react/24/outline";

export const TopBar = () => (
  <div className="bg-indigo-900 text-white py-2 px-4">
    <div className="max-w-6xl mx-auto flex justify-between items-center text-sm">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <EnvelopeIcon className="w-4 h-4 mr-1" />
          <span>flotila.praha1@gmail.com</span>
        </div>
      </div>
      <div className="flex items-center">
        <MapPinIcon className="w-4 h-4 mr-1" />
        <span>Prague, Czech Republic</span>
      </div>
    </div>
  </div>
);

export const MainNavigation = () => (
  <nav className="bg-white shadow-sm">
    <div className="max-w-6xl mx-auto px-4 py-4">
      <div className="flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-indigo-900">
          Flotila Praha
        </Link>
        <div className="hidden md:flex space-x-8">
          <Link href="/about" className="hover:text-indigo-600">
            O nás
          </Link>
          <Link href="/benefits" className="hover:text-indigo-600">
            Výhody
          </Link>
          <Link href="/pricing" className="hover:text-indigo-600">
            Ceník
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export const ServicesBar = () => (
  <div className="bg-indigo-50 border-b">
    <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-sm">
      <div className="flex space-x-6">
        <Link href="/bolt" className="hover:text-indigo-600">
          Bolt
        </Link>
        <Link href="/uber" className="hover:text-indigo-600">
          Uber
        </Link>
        <Link href="/wolt" className="hover:text-indigo-600">
          Wolt
        </Link>
        <Link href="/bolt-food" className="hover:text-indigo-600">
          Bolt Food
        </Link>
        <Link href="/foodora" className="hover:text-indigo-600">
          Foodora
        </Link>
      </div>
    </div>
  </div>
);

export const SecondaryNavigation = () => (
  <div className="bg-white border-b">
    <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center text-sm">
      <div className="flex space-x-6">
        <Link href="/" className="hover:text-indigo-600">
          Domů
        </Link>
        <Link href="/how-it-works" className="hover:text-indigo-600">
          Jak to funguje
        </Link>
        <Link href="/cars" className="hover:text-indigo-600">
          Naše vozy
        </Link>
        <Link href="/contact" className="hover:text-indigo-600">
          Kontakt
        </Link>
        <Link href="/faq" className="hover:text-indigo-600">
          FAQ
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <a
          href="https://m.me/your-page"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600 flex items-center"
        >
          <ChatBubbleBottomCenterTextIcon className="w-4 h-4 mr-1" />
          FB Messenger
        </a>
        <a
          href="https://wa.me/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-indigo-600 flex items-center"
        >
          <ChatBubbleBottomCenterTextIcon className="w-4 h-4 mr-1" />
          E-Mail: flotila.praha1@gmail.com
        </a>
      </div>
    </div>
  </div>
);

const Navbar = () => (
  <>
    <TopBar />
    <MainNavigation />
    <ServicesBar />
    <SecondaryNavigation />
  </>
);

export default Navbar;
