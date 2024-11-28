import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="relative w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-indigo-700 text-white py-20 px-6 overflow-hidden">
      {/* Content Container */}
      <div className="relative z-10 w-full text-center flex flex-col items-center">
        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mt-10">
          Empower Your DApp Development
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg sm:text-xl max-w-3xl text-gray-200 leading-relaxed">
          Simplify wallet integration for Web3 applications with Reown AppKit.
          Build EVM-compatible solutions and streamline blockchain wallet interactions seamlessly.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <a
            href="https://github.com/DDev16/appkit-connect"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-indigo-700 px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-gray-100 transition duration-300"
          >
            Explore on GitHub
          </a>
          <a
            href="#features"
            className="bg-indigo-800 px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-indigo-900 transition duration-300"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-0">
        <svg
          className="w-full h-auto"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ffffff"
            fillOpacity="0.7"
            d="M0,224L48,192C96,160,192,96,288,85.3C384,75,480,117,576,128C672,139,768,117,864,106.7C960,96,1056,96,1152,112C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
