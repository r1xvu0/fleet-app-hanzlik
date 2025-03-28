// components/ContactSection.jsx
import {
  ChatBubbleBottomCenterTextIcon,
  EnvelopeIcon,
  MapPinIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

export default function ContactSection() {
  return (
    <section className="bg-indigo-900 text-white p-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">
          Kontaktujte nás
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column - Contact Methods */}
          <div className="space-y-8">
            <p className="text-xl text-center md:text-left">
              Komunikujte s námi rychle a online
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <ChatBubbleBottomCenterTextIcon className="w-8 h-8 mr-4" />
                <div>
                  <h3 className="font-semibold">FB Messenger</h3>
                  <a
                    href="https://m.me/driverhomecz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-100 hover:text-white"
                  >
                    m.me/driverhomecz
                  </a>
                </div>
              </div>

              {/* <div className="flex items-center">
                <ChatBubbleBottomCenterTextIcon className="w-8 h-8 mr-4" />
                <div>
                  <h3 className="font-semibold">Whatsapp</h3>
                  <a
                    href="https://wa.me/734167255"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-100 hover:text-white"
                  >
                    734 167 255
                  </a>
                </div>
              </div> */}

              <div className="flex items-center">
                <EnvelopeIcon className="w-8 h-8 mr-4" />
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a
                    href="mailto:info@driverhome.cz"
                    className="text-indigo-100 hover:text-white"
                  >
                    info@driverhome.cz
                  </a>
                </div>
              </div>

              <div className="flex items-center">
                <MapPinIcon className="w-8 h-8 mr-4" />
                <div>
                  <h3 className="font-semibold">Kde nás najdete?</h3>
                  <p className="text-indigo-100">
                    Vlněna 5, Trnitá, 602 00 Brno
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Social Media */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Naše sítě</h3>
              <div className="space-y-4">
                <a
                  href="https://facebook.com/driverhomecz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-white"
                >
                  <GlobeAltIcon className="w-6 h-6 mr-2" />
                  Facebook
                </a>
                {/* Add more social links as needed */}
              </div>
            </div>

            <div className="mt-8 border-t border-indigo-700 pt-8">
              <h3 className="text-xl font-semibold mb-4">Zajímá vás více?</h3>
              <p className="text-indigo-100">
                Pro více informací nás neváhejte kontaktovat prostřednictvím
                některého z našich komunikačních kanálů.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
