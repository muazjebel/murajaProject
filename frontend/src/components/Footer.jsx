import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTelegramPlane,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden font-sans text-gray-200 bg-gradient-to-r from-green-800 via-green-900 to-green-800">
      {/* Subtle overlay texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/asfalt-light.png')] opacity-10"></div>

      <div className="relative z-10 grid grid-cols-1 gap-12 px-6 mx-auto max-w-7xl md:grid-cols-3">
        {/* About Section */}
        <div className="text-center md:text-left">
          <h3 className="mb-4 text-3xl font-extrabold tracking-wide text-yellow-400 md:text-4xl">
            Murājaʿah
          </h3>
          <p className="text-sm leading-relaxed text-gray-300 md:text-base">
            Empowering Muslims worldwide to strengthen Qur'an memorization
            and deepen their spiritual connection.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center mt-6 space-x-4 text-xl md:justify-start">
            <a
              href="#"
              aria-label="Facebook"
              className="transition transform hover:text-yellow-400 hover:scale-125"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Telegram"
              className="transition transform hover:text-yellow-400 hover:scale-125"
            >
              <FaTelegramPlane />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="transition transform hover:text-yellow-400 hover:scale-125"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="transition transform hover:text-yellow-400 hover:scale-125"
            >
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links - FIXED */}
        <div className="text-center md:text-left">
          <h4 className="mb-4 text-2xl font-semibold text-yellow-400">
            Quick Links
          </h4>
          <ul className="space-y-3 text-base">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/services" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className="font-medium transition-colors hover:text-yellow-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="text-center md:text-left">
          <h4 className="mb-4 text-2xl font-semibold text-yellow-400">
            Contact
          </h4>
          <div className="space-y-3 text-base">
            <p className="flex items-center justify-center gap-2 md:justify-start">
              <FaMapMarkerAlt className="text-yellow-400" /> Addis Ababa, Ethiopia
            </p>
            <p className="flex items-center justify-center gap-2 md:justify-start">
              <FaPhoneAlt className="text-yellow-400" /> +251-900-000-000
            </p>
            <p className="flex items-center justify-center gap-2 md:justify-start">
              <FaEnvelope className="text-yellow-400" /> info@murajaa.com
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative z-10 pt-6 mt-12 text-sm text-center text-gray-400 border-t border-gray-700">
        © {new Date().getFullYear()}{" "}
        <span className="font-semibold text-yellow-400">Murājaʿah</span>. All Rights Reserved.
      </div>
    </footer>
  );
}