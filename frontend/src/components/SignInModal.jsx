import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

export default function SignInModal({ onClose, onSwitch}) {
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

        <h1 className="text-2xl font-bold text-center text-[#0e544d] mb-2">
          Pickbazar
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Login with your email & password
        </p>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="customer@demo.com"
            className="w-full px-4 py-2 border border-gray-300 bg-gray-50 text-gray-900 rounded focus:ring-2 focus:ring-[#0e544d] focus:border-[#0e544d] focus:bg-white focus:outline-none placeholder-gray-400"
          />
        </div>

        {/* Password */}
        <div className="mb-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 border border-gray-300 bg-gray-50 text-gray-900 rounded focus:ring-2 focus:ring-[#0e544d] focus:border-[#0e544d] focus:bg-white focus:outline-none placeholder-gray-400"
          />
        </div>

        <div className="text-right mb-4">
          <a href="#" className="text-sm text-[#0e544d] hover:underline">
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full bg-[#0e544d] text-white py-2 rounded hover:bg-[#0c4b44] transition">
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 text-white bg-blue-600 py-2 rounded hover: bg-blue-200-100 hover:border-blue-400 transition font-medium shadow-sm">
          <FcGoogle size={20} /> Login with Google
        </button>

        {/* Mobile Login */}
        <button className="w-full mt-3 flex items-center justify-center gap-2 border border-gray-300 text-white bg-gray-500 py-2 rounded hover:bg-gray-100 hover:border-gray-400 transition font-medium shadow-sm">
          📱 Login with Mobile number
        </button>

        {/* Divider */}
        <div className="flex items-center my-4 mt-10 mb-10">
          <hr className="flex-grow border-gray-300" />
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Register Link */}
        <p className="text-center text-sm text-gray-600 mt-5">
          Don’t have any account?{" "}
          <button
            onClick={onSwitch}
            className="text-[#0e544d] font-semibold hover:underline"
          >
            Register
          </button>
        </p>
      </div>
    </div>
  );
}
