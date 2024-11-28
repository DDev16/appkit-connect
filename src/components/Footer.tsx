import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-indigo-700 text-white py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        {/* Logo and Description */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <a href="/" className="text-2xl font-bold text-white hover:text-gray-200">
            AppKit Connect
          </a>
          <p className="mt-2 text-sm text-gray-300">
            Simplifying Web3 wallet integration for modern DApps.
          </p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6">
          <a
            href="#features"
            className="text-sm text-gray-300 hover:text-white transition duration-300"
          >
            Features
          </a>
          <a
            href="#docs"
            className="text-sm text-gray-300 hover:text-white transition duration-300"
          >
            Documentation
          </a>
          <a
            href="#pricing"
            className="text-sm text-gray-300 hover:text-white transition duration-300"
          >
            Pricing
          </a>
          <a
            href="#contact"
            className="text-sm text-gray-300 hover:text-white transition duration-300"
          >
            Contact
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex space-x-4 mt-6 md:mt-0">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.723 9.865 9.865 0 01-3.127 1.195 4.916 4.916 0 00-8.373 4.482A13.942 13.942 0 011.67 3.149a4.822 4.822 0 00-.666 2.475 4.922 4.922 0 002.188 4.1A4.902 4.902 0 01.96 9.071v.06a4.922 4.922 0 003.946 4.827 4.934 4.934 0 01-2.212.084 4.923 4.923 0 004.6 3.417 9.868 9.868 0 01-6.102 2.104c-.395 0-.779-.023-1.162-.067a13.952 13.952 0 007.548 2.213c9.057 0 14.01-7.496 14.01-13.986 0-.21-.006-.42-.015-.63A10.012 10.012 0 0024 4.557z" />
            </svg>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.207 11.387.6.112.793-.26.793-.577 0-.285-.01-1.041-.015-2.042-3.338.726-4.042-1.614-4.042-1.614-.546-1.387-1.333-1.756-1.333-1.756-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.42-1.305.763-1.605-2.665-.3-5.467-1.334-5.467-5.932 0-1.31.468-2.383 1.236-3.222-.124-.302-.536-1.52.117-3.168 0 0 1.009-.323 3.307 1.23a11.5 11.5 0 013.015-.404c1.022.005 2.052.138 3.015.404 2.297-1.553 3.306-1.23 3.306-1.23.653 1.648.241 2.866.118 3.168.77.84 1.236 1.913 1.236 3.222 0 4.61-2.806 5.628-5.478 5.92.43.371.823 1.1.823 2.215 0 1.6-.015 2.887-.015 3.277 0 .32.192.694.8.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-200 transition duration-300"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11.125 20h-3.25v-9.001h3.25v9.001zm-1.625-10.502c-1.037 0-1.875-.839-1.875-1.875s.838-1.874 1.875-1.874c1.037 0 1.875.838 1.875 1.874s-.839 1.875-1.875 1.875zm13.125 10.502h-3.25v-4.5c0-1.071-.021-2.447-1.5-2.447-1.5 0-1.73 1.173-1.73 2.375v4.572h-3.25v-9.001h3.125v1.229h.045c.435-.822 1.5-1.688 3.09-1.688 3.307 0 3.92 2.177 3.92 5.01v4.451z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-500 mt-6 pt-6 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} AppKit Connect. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
