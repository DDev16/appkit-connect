import React from "react";

const ContentSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-800">Why Choose AppKit Connect?</h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Discover how AppKit Connect simplifies blockchain integration and empowers your DApp development.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {/* Feature 1 */}
          <div className="p-6 bg-white shadow rounded-lg">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h6m-6 0a3 3 0 11-6 0 3 3 0 016 0zm6 0a3 3 0 100-6 3 3 0 000 6zm0 0a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Seamless Wallet Integration</h3>
            <p className="text-gray-600">
              Connect to Web3 wallets effortlessly with built-in tools like Web3Modal and Wagmi.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="p-6 bg-white shadow rounded-lg">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">EVM Compatibility</h3>
            <p className="text-gray-600">
              Works seamlessly with Ethereum, Polygon, Flare, and other EVM-compatible blockchains.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="p-6 bg-white shadow rounded-lg">
            <div className="flex items-center justify-center h-16 w-16 rounded-full bg-indigo-100 text-indigo-600 mb-6">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Easy Smart Contract Interaction</h3>
            <p className="text-gray-600">
              Use prebuilt hooks like <code>useReadContract</code> and <code>useWriteContract</code>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
