import React from "react";

export default function SignUpModal({ onClose, onSwitch }) {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50 backdrop-blur-sm">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-[#0e544d] mb-2">
          Pickbazar
        </h1>
        <p className="text-center text-gray-600 mb-6 text-sm">
          By signing up, you agree to our{" "}
          <span className="text-[#0e544d] font-semibold cursor-pointer hover:underline">
            terms
          </span>{" "}
          &{" "}
          <span className="text-[#0e544d] font-semibold cursor-pointer hover:underline">
            policy
          </span>
        </p>

        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 border border-gray-300 bg-gray-50 text-gray-900 rounded focus:ring-2 focus:ring-[#0e544d] focus:border-[#0e544d] focus:bg-white focus:outline-none placeholder-gray-400"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 border border-gray-300 bg-gray-50 text-gray-900 rounded focus:ring-2 focus:ring-[#0e544d] focus:border-[#0e544d] focus:bg-white focus:outline-none placeholder-gray-400"
          />
        </div>

        {/* Password */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 border border-gray-300 bg-gray-50 text-gray-900 rounded focus:ring-2 focus:ring-[#0e544d] focus:border-[#0e544d] focus:bg-white focus:outline-none placeholder-gray-400"
          />
        </div>

        {/* Register Button */}
        <button className="w-full bg-[#0e544d] text-white py-2 rounded hover:bg-[#0c4b44] transition">
          Register
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Already have account */}
        <p className="text-center text-sm text-gray-600 mt-5">
          Already have an account?{" "}
          <button
            onClick={onSwitch}
            className="text-[#0e544d] font-semibold hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
}
