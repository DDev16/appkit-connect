"use client";

import React, { useState } from "react";
import { ConnectButton } from "@/components/ConnectButton";

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800">
          AppKit Connect
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="#features"
            className="text-gray-600 hover:text-indigo-600 transition duration-300"
          >
            Features
          </a>
          <a
            href="#docs"
            className="text-gray-600 hover:text-indigo-600 transition duration-300"
          >
            Documentation
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-indigo-600 transition duration-300"
          >
            Contact
          </a>
        </nav>

        {/* Connect Button */}
        <div className="flex items-center space-x-4">
          <ConnectButton />
          {/* Mobile Menu Button */}
          <button
            type="button"
            className="md:hidden text-gray-600 hover:text-indigo-600 focus:outline-none focus:text-indigo-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <div className="container mx-auto px-6 py-4">
            <a
              href="#features"
              className="block text-gray-600 hover:text-indigo-600 transition duration-300 py-2"
            >
              Features
            </a>
            <a
              href="#docs"
              className="block text-gray-600 hover:text-indigo-600 transition duration-300 py-2"
            >
              Documentation
            </a>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-indigo-600 transition duration-300 py-2"
            >
              Contact
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
