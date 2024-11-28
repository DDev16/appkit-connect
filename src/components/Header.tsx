"use client";

import React from "react";
import { ConnectButton } from '@/components/ConnectButton';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold text-indigo-600 hover:text-indigo-800">
          AppKit Connect
        </a>

        {/* Navigation */}
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
            href="#pricing"
            className="text-gray-600 hover:text-indigo-600 transition duration-300"
          >
            Pricing
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
          <div className="md:hidden">
            <button
              type="button"
              className="text-gray-600 hover:text-indigo-600 focus:outline-none focus:text-indigo-800"
              onClick={() => alert("Toggle Mobile Menu")}
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
      </div>
    </header>
  );
};

export default Header;
