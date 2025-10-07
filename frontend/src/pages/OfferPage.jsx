import React from "react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

const offers = [
  { amount: "$4 OFF", code: "4OFF", color: "bg-blue-500" },
  { amount: "$5 OFF", code: "5OFF", color: "bg-orange-400" },
  { amount: "$10 OFF", code: "BAZAR10", color: "bg-teal-500" },
  { amount: "$20 OFF", code: "BAZAR20", color: "bg-indigo-600" },
  { amount: "$2 OFF", code: "EID2", color: "bg-yellow-400" },
];

export default function OfferPage() {
  const handleCopy = (code) => {
    navigator.clipboard.writeText(code);
    alert(`Copied: ${code}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Header Section */}
      <div className="bg-gray-200 py-30 px-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Offers</h1>
        <div className="text-gray-500 flex justify-center items-center gap-2 text-sm">
          <Link
            to="/"
            className="flex items-center gap-1 text-gray-500 hover:text-gray-800 transition-colors duration-200"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7m-9 2v8m4-8v8m4 4H5a2 2 0 01-2-2V9a2 2 0 012-2h14a2 2 0 012 2v13a2 2 0 01-2 2z"
              />
            </svg>
            Home
          </Link>
          <span>›</span>
          <span className="text-gray-700 font-medium">Offers</span>
        </div>
      </div>

      {/* Offers Grid */}
      <div className="max-w-6xl mx-auto px-6 mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {offers.map((offer, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg shadow-sm overflow-hidden text-center"
          >
            {/* Offer Box */}
            <div
              className={`${offer.color} h-40 flex flex-col justify-center items-center rounded-t-lg relative`}
            >
              <div className="absolute inset-0 border-dashed border-2 border-white/40 rounded-t-lg"></div>
              <h2 className="text-white text-2xl font-bold">{offer.amount}</h2>
            </div>

            {/* Code Section */}
            <div className="flex items-center justify-between px-4 py-3 bg-white border-t border-gray-100">
              <div className="flex items-center gap-1">
                <span className="font-semibold text-gray-800 text-sm">
                  {offer.code}
                </span>
                <CheckCircleIcon className="w-4 h-4 text-emerald-500" />
              </div>
              <button
                onClick={() => handleCopy(offer.code)}
                className="text-emerald-600 text-sm font-medium hover:text-emerald-700"
              >
                Copy
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
