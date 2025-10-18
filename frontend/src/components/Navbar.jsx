import { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import { Button } from "@/components/ui/button";
import logotop from "../assets/clear-logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed z-50 w-full text-yellow-300 transition-all duration-500 bg-green-700 shadow-2xl">
      <div className="px-6 mx-auto max-w-7xl md:px-20">
        <div className="relative flex items-center justify-between h-16">
          {/* Logo */}
          <div className="absolute flex items-center space-x-3 transform -translate-x-1/2 cursor-pointer left-1/2 md:static md:transform-none group">
            <div className="relative">
              {/* Glowing circle */}
              <div className="absolute inset-0 transition-transform duration-500 scale-125 rounded-full bg-yellow-400/30 blur-md group-hover:scale-150"></div>

              {/* Logo image */}
              <img
                src={logotop}
                alt="Murājaʿah Logo"
                className="relative w-10 h-10 transition-transform duration-500 border-2 border-yellow-400 rounded-full shadow-lg md:w-12 md:h-12 shadow-yellow-300/20 group-hover:rotate-6"
              />
            </div>

            {/* Fixed: Use Link instead of <a> for logo */}
            <Link
              to="/"
              className="text-2xl font-extrabold tracking-wide transition-colors duration-300 md:text-3xl group-hover:text-white"
            >
              Murājaʿah
            </Link>
          </div>

          {/* Desktop Menu - FIXED */}
          <div className="items-center hidden space-x-10 text-lg font-medium md:flex lg:space-x-14 lg:text-xl">
            {[
              { label: "Home", href: "/" }, // Changed from "#home" to "/"
              { label: "About", href: "/about" }, // Changed from "#about" to "/about"
              { label: "Services", href: "/services" }, // Changed to actual route
              { label: "Contact", href: "/contact" }, // Changed to actual route
            ].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="relative hover:text-white transition-all duration-300 before:absolute before:bottom-0 before:left-0 before:w-0 before:h-[2px] before:bg-yellow-300 before:transition-all before:duration-300 hover:before:w-full"
              >
                {item.label}
              </Link>
            ))}

            <Button
              size="sm"
              className="px-6 py-2 text-base font-semibold text-green-900 transition-all duration-300 bg-yellow-300 rounded-full hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-300/30 lg:text-lg"
            >
              Register
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="absolute md:hidden right-10">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-yellow-300 transition-colors duration-300 focus:outline-none hover:text-white"
            >
              {isOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8h16M4 16h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - FIXED */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-96 opacity-100 mt-2 mb-4" : "max-h-0 opacity-0"
          }`}
        >
          <div className="flex flex-col items-center py-5 space-y-4 text-lg shadow-lg bg-green-800/90 rounded-xl">
            {[
              { label: "Home", href: "/" }, // Changed from "#home" to "/"
              { label: "About", href: "/about" }, // Changed from "#about" to "/about"
              { label: "Services", href: "/services" }, // Changed to actual route
              { label: "Contact", href: "/contact" }, // Changed to actual route
            ].map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className="text-yellow-200 transition-colors duration-300 hover:text-white"
                onClick={() => setIsOpen(false)} // Close menu when clicking a link
              >
                {item.label}
              </Link>
            ))}

            <Button
              size="sm"
              className="px-6 py-2 text-base font-semibold text-green-900 transition-all duration-300 bg-yellow-300 rounded-full hover:bg-yellow-400 hover:shadow-lg hover:shadow-yellow-300/30"
            >
              Register
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}