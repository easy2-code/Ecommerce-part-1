import React from "react";
import ContactImage from "../assets/Contact/contact-illustration.2f6adc05.svg";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-16 px-6">
      {/* Contact Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row md:gap-3">
        {/* Left Card - Contact Info */}
        <div className="bg-white shadow-md rounded-2xl p-8 flex flex-col items-start border border-gray-300/40 w-full md:w-2/5 lg:w-1/3">
          {/* Local SVG Image */}
          <img
            src={ContactImage}
            alt="Contact Illustration"
            className="rounded-lg w-full h-48 object-contain mb-6"
          />

          <div className="space-y-4 text-gray-700 w-full">
            <div>
              <h3 className="font-semibold text-gray-900">Address</h3>
              <p className="text-sm">NY State Thruway, New York, USA</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Phone</h3>
              <p className="text-sm">+1 292 901 22122</p>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">Email Address</h3>
              <p className="text-sm">demo@demo.com</p>
            </div>

            {/* Website Row */}
            {/* Website Row */}
            <div className="flex justify-between items-center w-full">
              <div>
                <h3 className="font-semibold text-gray-900">Website</h3>
                <a
                  href="https://redq.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline"
                >
                  https://redq.io
                </a>
              </div>

              <a
                href="https://redq.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-900 px-4 py-2 rounded-lg transition duration-200 text-sm whitespace-nowrap hover:text-green-700"
              >
                Visit This Site
              </a>
            </div>

            {/* Follow Us Section */}
            <div className="mt-6 w-full">
              <h3 className="font-semibold text-gray-900 mb-2">Follow Us</h3>
              <div className="flex gap-4 text-lg">
                <a href="#" className="text-gray-500 hover:text-blue-600">
                  <FaFacebookF />
                </a>
                <a href="#" className="text-gray-500 hover:text-sky-500">
                  <FaTwitter />
                </a>
                <a href="#" className="text-gray-500 hover:text-pink-500">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card - Contact Form */}
        <div className="bg-white shadow-md rounded-2xl p-8 border border-gray-300/40 flex-1">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            How can we improve your experience?
          </h2>

          <form className="space-y-5">
            {/* Row 1: Name & Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full mt-1 border border-gray-300 rounded p-2 outline-none focus:border-[1px]"
                  style={{ transition: "border-color 0.3s ease" }}
                  onFocus={(e) => (e.target.style.borderColor = "#0e544d")}
                  onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full mt-1 border border-gray-300 rounded p-2 outline-none focus:border-[1px]"
                  style={{ transition: "border-color 0.3s ease" }}
                  onFocus={(e) => (e.target.style.borderColor = "#0e544d")}
                  onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            {/* Row 2: Subject */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Subject
              </label>
              <input
                type="text"
                className="w-full mt-1 border border-gray-300 rounded p-2 outline-none focus:border-[1px]"
                style={{ transition: "border-color 0.3s ease" }}
                onFocus={(e) => (e.target.style.borderColor = "#0e544d")}
                onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                placeholder="Subject"
              />
            </div>

            {/* Row 3: Description + Button */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                rows="4"
                className="w-full mt-1 border border-gray-300 rounded p-2 outline-none focus:border-[1px]"
                style={{ transition: "border-color 0.3s ease" }}
                onFocus={(e) => (e.target.style.borderColor = "#0e544d")}
                onBlur={(e) => (e.target.style.borderColor = "#d1d5db")}
                placeholder="Write your message..."
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out border border-transparent px-5 py-2 h-10 mt-4"
                style={{
                  backgroundColor: "#0e544d",
                  color: "#ffffff",
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0c4a45")
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = "#0e544d")
                }
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
