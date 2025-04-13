// components/ContactSection.jsx
import {
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  MapPinIcon,
  GlobeAltIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      {/* Background with gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-950 to-indigo-900 z-0"></div>
      
      {/* Decorative shapes */}
      <div className="absolute inset-0 opacity-10 z-0">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-indigo-400 filter blur-3xl opacity-50"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-blue-400 filter blur-3xl opacity-50"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Kontaktujte nás
          </h2>
          <p className="text-indigo-200 text-lg max-w-2xl mx-auto">
            Máte zájem o spolupráci nebo dotaz? Neváhejte nás kontaktovat.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm border border-indigo-300/20 rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-semibold mb-6 text-white">Napište nám</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-indigo-200 mb-2 text-sm">Vaše jméno</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-indigo-300/20 text-white focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                    placeholder="Jan Novák"
                  />
                </div>
                <div>
                  <label className="block text-indigo-200 mb-2 text-sm">Váš email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-indigo-300/20 text-white focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                    placeholder="jan@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-indigo-200 mb-2 text-sm">Předmět</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-indigo-300/20 text-white focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                  placeholder="Spolupráce s flotilou"
                />
              </div>
              <div>
                <label className="block text-indigo-200 mb-2 text-sm">Zpráva</label>
                <textarea 
                  className="w-full px-4 py-3 rounded-lg bg-white/5 border border-indigo-300/20 text-white focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all h-32"
                  placeholder="Vaše zpráva..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl"
              >
                Odeslat zprávu
              </button>
            </form>
          </div>

          {/* Right Column - Contact Methods */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-white">Rychlý kontakt</h3>

              <div className="space-y-6">
                <div className="flex items-center p-4 bg-white/10 border border-indigo-300/20 rounded-xl backdrop-blur-sm transition-transform hover:scale-[1.02]">
                  <div className="bg-indigo-600/30 p-3 rounded-lg">
                    <ChatBubbleBottomCenterTextIcon className="w-6 h-6 text-indigo-300" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white">FB Messenger</h3>
                    <a
                      href="https://m.me/driverhomecz"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-indigo-300 hover:text-white transition-colors"
                    >
                      m.me/driverhomecz
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white/10 border border-indigo-300/20 rounded-xl backdrop-blur-sm transition-transform hover:scale-[1.02]">
                  <div className="bg-indigo-600/30 p-3 rounded-lg">
                    <EnvelopeIcon className="w-6 h-6 text-indigo-300" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white">Email</h3>
                    <a
                      href="mailto:info@driverhome.cz"
                      className="text-indigo-300 hover:text-white transition-colors"
                    >
                      flotila.praha1@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white/10 border border-indigo-300/20 rounded-xl backdrop-blur-sm transition-transform hover:scale-[1.02]">
                  <div className="bg-indigo-600/30 p-3 rounded-lg">
                    <PhoneIcon className="w-6 h-6 text-indigo-300" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white">Telefon</h3>
                    <a
                      href="tel:+420777888999"
                      className="text-indigo-300 hover:text-white transition-colors"
                    >
                      +420 777 888 999
                    </a>
                  </div>
                </div>

                <div className="flex items-center p-4 bg-white/10 border border-indigo-300/20 rounded-xl backdrop-blur-sm transition-transform hover:scale-[1.02]">
                  <div className="bg-indigo-600/30 p-3 rounded-lg">
                    <MapPinIcon className="w-6 h-6 text-indigo-300" />
                  </div>
                  <div className="ml-4">
                    <h3 className="font-semibold text-white">Kde nás najdete?</h3>
                    <p className="text-indigo-300">
                      Vlněna 5, Trnitá, 602 00 Brno
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-indigo-700">
              <h3 className="text-2xl font-semibold mb-4 text-white">Sledujte nás</h3>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/driverhomecz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-indigo-300" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/>
                  </svg>
                </a>
                <a
                  href="https://instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-indigo-300" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-indigo-300" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
