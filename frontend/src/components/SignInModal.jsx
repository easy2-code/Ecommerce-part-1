import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function SignInModal({ onClose, onSwitch }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Login Data:", data);
    alert("Login successful!");
    // Call your login API here
  };

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

        {/* Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="customer@demo.com"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } bg-gray-50 text-gray-900 rounded focus:ring-2 focus:ring-[#0e544d] focus:border-[#0e544d] focus:bg-white focus:outline-none placeholder-gray-400`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password with Eye Toggle */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                {...register("password", {
                  required: "Password is required",
                  minLength: { value: 6, message: "Minimum 6 characters" },
                })}
                className={`w-full px-4 pr-12 py-2 border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } bg-gray-50 text-gray-900 rounded focus:ring-2 focus:ring-[#0e544d] focus:border-[#0e544d] focus:bg-white focus:outline-none placeholder-gray-400`}
              />
              <div
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <AiOutlineEyeInvisible size={20} />
                ) : (
                  <AiOutlineEye size={20} />
                )}
              </div>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Forgot password */}
          <div className="text-right mb-4">
            <a href="#" className="text-sm text-[#0e544d] hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-[#0e544d] text-white py-2 rounded hover:bg-[#0c4b44] transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-3 text-gray-500 text-sm">Or</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Google Login */}
        <button className="w-full flex items-center justify-center gap-2 border border-gray-300 text-white bg-blue-600 py-2 rounded hover:bg-blue-200 hover:border-blue-400 transition font-medium shadow-sm">
          <FcGoogle size={20} /> Login with Google
        </button>

        {/* Mobile Login */}
        <button className="w-full mt-3 flex items-center justify-center gap-2 border border-gray-300 text-white bg-gray-500 py-2 rounded hover:bg-gray-100 hover:border-gray-400 transition font-medium shadow-sm">
          📱 Login with Mobile number
        </button>

        {/* Already have account */}
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
