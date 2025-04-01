// components/Layout.jsx
import Navbar from "./Navbar";
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="bg-gray-800 text-gray-300 mt-20">
        <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">Flotila Praha</h3>
            <p className="text-sm">
              Connecting professional drivers since 2025
            </p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/drivers" className="hover:text-white">
                  Driver Benefits
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact Support
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
