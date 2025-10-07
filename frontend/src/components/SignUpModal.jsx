import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function SignUpModal({ onClose, onSwitch }) {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Registered User Data:", data);
    alert("Registration successful!");
    // Here you can also send data to your backend API
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

        {/* Registration Form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Name
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              {...register("name", { required: "Name is required" })}
              className={`w-full px-4 py-2 border ${
                errors.name ? "border-red-500" : "border-gray-300"
              } bg-gray-50 text-gray-900 rounded focus:ring-2 focus:ring-[#0e544d] focus:border-[#0e544d] focus:bg-white focus:outline-none placeholder-gray-400`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
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

          {/* Password Field with Eye Toggle */}
          <div className="mb-6">
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

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-[#0e544d] text-white py-2 rounded hover:bg-[#0c4b44] transition"
          >
            Register
          </button>
        </form>

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
