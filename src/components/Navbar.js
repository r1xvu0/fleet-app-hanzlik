"use client"

// components/Navbar.jsx
import Link from "next/link";
import { useState } from "react";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeIcon,
  ChatBubbleBottomCenterTextIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export const TopBar = () => (
  <div className="bg-gradient-to-r from-indigo-900 to-indigo-800 text-white py-2 px-4">
    <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
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

export const MainNavigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-indigo-900">
              Flotila Praha
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link href="/about" className="text-gray-700 hover:text-indigo-600 font-medium py-2 transition-colors">
              O nás
            </Link>
            <Link href="/benefits" className="text-gray-700 hover:text-indigo-600 font-medium py-2 transition-colors">
              Výhody
            </Link>
            <Link href="/pricing" className="text-gray-700 hover:text-indigo-600 font-medium py-2 transition-colors">
              Ceník
            </Link>
            {/* <Link href="/cars" className="text-gray-700 hover:text-indigo-600 font-medium py-2 transition-colors">
              Naše vozy
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-indigo-600 font-medium py-2 transition-colors">
              Jak to funguje
            </Link> */}
            <Link href="/contact" className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors">
              Kontaktujte nás
            </Link>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden pt-4 pb-3 border-t mt-4 animate-fadeIn">
            <div className="flex flex-col space-y-3">
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-indigo-600 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                O nás
              </Link>
              <Link 
                href="/benefits" 
                className="text-gray-700 hover:text-indigo-600 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Výhody
              </Link>
              <Link 
                href="/pricing" 
                className="text-gray-700 hover:text-indigo-600 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Ceník
              </Link>
              <Link 
                href="/cars" 
                className="text-gray-700 hover:text-indigo-600 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Naše vozy
              </Link>
              <Link 
                href="/how-it-works" 
                className="text-gray-700 hover:text-indigo-600 py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Jak to funguje
              </Link>
              <Link 
                href="/contact" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg font-medium transition-colors inline-block w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontaktujte nás
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export const ServicesBar = () => (
  <div className="bg-indigo-50 border-b">
    <div className="max-w-7xl mx-auto px-4 py-3 flex overflow-x-auto no-scrollbar">
      <div className="flex space-x-8">
        <Link href="/bolt" className="text-gray-700 hover:text-indigo-600 flex items-center whitespace-nowrap transition-colors">
          <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
          Bolt
        </Link>
        <Link href="/uber" className="text-gray-700 hover:text-indigo-600 flex items-center whitespace-nowrap transition-colors">
          <span className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></span>
          Uber
        </Link>
        {/* <Link href="/wolt" className="text-gray-700 hover:text-indigo-600 flex items-center whitespace-nowrap transition-colors">
          <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
          Wolt
        </Link>
        <Link href="/bolt-food" className="text-gray-700 hover:text-indigo-600 flex items-center whitespace-nowrap transition-colors">
          <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
          Bolt Food
        </Link>
        <Link href="/foodora" className="text-gray-700 hover:text-indigo-600 flex items-center whitespace-nowrap transition-colors">
          <span className="w-2 h-2 rounded-full bg-pink-500 mr-2"></span>
          Foodora
        </Link> */}
      </div>
    </div>
  </div>
);

export const SecondaryNavigation = () => (
  <div className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 py-3 flex flex-col md:flex-row justify-between">
      <div className="flex overflow-x-auto no-scrollbar space-x-6 md:space-x-8">
      <Link href="/" className="text-gray-700 hover:text-indigo-600 whitespace-nowrap transition-colors">
          Domů
        </Link>
        <Link href="/how-it-works" className="text-gray-700 hover:text-indigo-600 whitespace-nowrap transition-colors">
          Jak to funguje
        </Link>
        <Link href="/cars" className="text-gray-700 hover:text-indigo-600 whitespace-nowrap transition-colors">
          Naše vozy
        </Link>
        <Link href="/faq" className="text-gray-700 hover:text-indigo-600 whitespace-nowrap transition-colors">
          FAQ
        </Link>
      </div>
      <div className="flex items-center space-x-4 mt-3 md:mt-0">
        <a
          href="https://m.me/your-page"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-indigo-600 flex items-center transition-colors"
        >
          <ChatBubbleBottomCenterTextIcon className="w-4 h-4 mr-1" />
          <span className="text-sm">FB Messenger</span>
        </a>
        <a
          href="mailto:flotila.praha1@gmail.com"
          className="text-gray-700 hover:text-indigo-600 flex items-center transition-colors"
        >
          <EnvelopeIcon className="w-4 h-4 mr-1" />
          <span className="text-sm">Email</span>
        </a>
      </div>
    </div>
  </div>
);

const Navbar = () => (
  <header className="sticky top-0 z-50 shadow-md">
    <TopBar />
    <MainNavigation />
    <ServicesBar />
    <SecondaryNavigation />
  </header>
);

export default Navbar;
