'use client'

// components/ContactSection.jsx
import {
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneIcon,
  ClockIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContactSection() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    nationality: '',
    phoneNumber: '',
    languages: [],
    message: ''
  });
  
  // Form status
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null }
  });
  
  // Handle input changes
  const handleChange = e => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      // Handle checkbox (languages)
      const isChecked = e.target.checked;
      
      setFormData(prevData => {
        if (isChecked) {
          // Add the language
          return {
            ...prevData,
            languages: [...prevData.languages, value]
          };
        } else {
          // Remove the language
          return {
            ...prevData,
            languages: prevData.languages.filter(lang => lang !== value)
          };
        }
      });
    } else {
      // Handle regular inputs
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  
  // Handle form submission
  const handleSubmit = async e => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: false, msg: data.message }
        });
        setFormData({
          name: '',
          email: '',
          nationality: '',
          phoneNumber: '',
          languages: [],
          message: ''
        });
      } else {
        setStatus({
          submitted: false,
          submitting: false,
          info: { error: true, msg: data.message }
        });
      }
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'Něco se pokazilo. Zkuste to prosím znovu.' }
      });
    }
  };

  // Add effect to handle scrolling to form when page loads with a hash
  useEffect(() => {
    // Window checks inside useEffect are safe as this only runs client-side
    if (window.location.hash === '#contact-form') {
      // Use setTimeout to ensure the page has fully loaded
      setTimeout(() => {
        const contactForm = document.getElementById('contact-form');
        if (contactForm) {
          contactForm.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <section className="relative overflow-hidden py-20 px-4" id="contact-form">
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
            
            {status.submitted ? (
              <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-6 text-center">
                <div className="text-green-300 text-xl mb-2">Děkujeme za vaši zprávu!</div>
                <p className="text-white">{status.info.msg}</p>
                <button 
                  onClick={() => setStatus({ submitted: false, submitting: false, info: { error: false, msg: null } })}
                  className="mt-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-2 px-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
                >
                  Odeslat další zprávu
                </button>
              </div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                {status.info.error && (
                  <div className="bg-red-500/20 border border-red-500/30 rounded-lg p-4 text-red-300">
                    {status.info.msg}
                  </div>
                )}
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-indigo-200 mb-2 text-sm">Vaše jméno</label>
                    <input 
                      id="name"
                      name="name"
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-indigo-300/20 text-white focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                      placeholder="Jan Novák"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-indigo-200 mb-2 text-sm">Email</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-indigo-300/20 text-white focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                      placeholder="jan@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Nationality Dropdown */}
                  <div>
                    <label htmlFor="nationality" className="block text-indigo-200 mb-2 text-sm">Národnost</label>
                    <select 
                      id="nationality"
                      name="nationality"
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-indigo-300/20 text-white focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                      value={formData.nationality}
                      onChange={handleChange}
                    >
                      <option value="" className="text-gray-800">Vyberte národnost</option>
                      <option value="CZ" className="text-gray-800">Česká republika</option>
                      <option value="SK" className="text-gray-800">Slovenská republika</option>
                      <option value="PL" className="text-gray-800">Polsko</option>
                      <option value="DE" className="text-gray-800">Německo</option>
                      <option value="UA" className="text-gray-800">Ukrajina</option>
                      <option value="OTHER" className="text-gray-800">Jiné</option>
                    </select>
                  </div>

                  {/* Phone Number */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-indigo-200 mb-2 text-sm">Telefonní číslo</label>
                    <input 
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel" 
                      className="w-full px-4 py-3 rounded-lg bg-white/5 border border-indigo-300/20 text-white focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all"
                      placeholder="+420 123 456 789"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                {/* Languages Checkboxes */}
                <div>
                  <label className="block text-indigo-200 mb-3 text-sm">Ovládané jazyky</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      { value: "cs", label: "Čeština" },
                      { value: "sk", label: "Slovenština" },
                      { value: "en", label: "Angličtina" },
                      { value: "de", label: "Němčina" },
                      { value: "pl", label: "Polština" },
                      { value: "uk", label: "Ukrajinština" }
                    ].map((language, index) => (
                      <label key={index} className="flex items-center p-2 border border-indigo-300/20 rounded-lg hover:bg-white/5 transition-colors">
                        <input
                          type="checkbox"
                          name="languages"
                          value={language.value}
                          checked={formData.languages.includes(language.value)}
                          onChange={handleChange}
                          className="w-4 h-4 text-indigo-600 focus:ring-indigo-500 mr-3"
                        />
                        <span className="text-white">{language.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-indigo-200 mb-2 text-sm">Zpráva</label>
                  <textarea 
                    id="message"
                    name="message"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-indigo-300/20 text-white focus:ring-2 focus:ring-indigo-400 focus:border-transparent transition-all h-32"
                    placeholder="Popište nám, s čím potřebujete pomoci..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <div className="flex justify-between items-center">
                  <div className="text-sm text-indigo-200 flex items-center">
                    <ClockIcon className="w-4 h-4 mr-1" />
                    Odpovídáme do 24 hodin
                  </div>
                  <button 
                    type="submit" 
                    className="bg-indigo-600 hover:bg-indigo-500 text-white font-medium py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                    disabled={status.submitting}
                  >
                    <EnvelopeIcon className="w-5 h-5 mr-2" />
                    {status.submitting ? 'Odesílání...' : 'Odeslat zprávu'}
                  </button>
                </div>
              </form>
            )}
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
