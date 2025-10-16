import React from "react";
import ContactImage from "../assets/Contact/contact-illustration.2f6adc05.svg";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaHeart,
  FaInstagram,
} from "react-icons/fa";

export default function ContactPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-12">
      <div className="w-full max-w-6xl flex flex-col md:flex-row md:gap-6 lg:gap-12">
        {/* Left Card - Contact Info */}
        <div className="bg-white shadow-md rounded-2xl p-6 sm:p-8 flex flex-col items-start border border-gray-300/40 w-full md:w-2/5 lg:w-1/3">
          <img
            src={ContactImage}
            alt="Contact Illustration"
            className="rounded-lg w-full h-48 sm:h-56 md:h-64 lg:h-72 object-contain mb-6"
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

            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center w-full gap-2">
              <div>
                <h3 className="font-semibold text-gray-900">Website</h3>
                <a
                  href="https://redq.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-blue-600 hover:underline break-all"
                >
                  https://redq.io
                </a>
              </div>

              <a
                href="https://redq.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-900 px-3 sm:px-4 py-1 sm:py-2 rounded-lg transition duration-200 text-sm whitespace-nowrap hover:text-green-700 mt-2 sm:mt-0"
              >
                Visit This Site
              </a>
            </div>

            {/* Follow Us Section */}
            <div className="mt-6 w-full">
              <h3 className="font-semibold text-gray-900 mb-2">Follow Us</h3>
              {/* Right: Social Icons */}
              <div className="flex gap-5 text-xl">
                <a
                  href="https://github.com/easy2-code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/tayyab-khan-48162b23b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#0A66C2] transition"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://x.com/easy2_code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#1DA1F2] transition"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://www.youtube.com/@easy2code"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#FF0000] transition"
                >
                  <FaYoutube />
                </a>
                <a
                  href="https://www.instagram.com/tayyab.kh9/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-pink-500 transition"
                >
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Card - Contact Form */}
        <div className="bg-white shadow-md rounded-2xl p-6 sm:p-8 border border-gray-300/40 flex-1 mt-8 md:mt-0">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 mb-6">
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
                  className="w-full mt-1 border border-gray-300 rounded p-2 outline-none focus:border-[#0e544d] transition-colors"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full mt-1 border border-gray-300 rounded p-2 outline-none focus:border-[#0e544d] transition-colors"
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
                className="w-full mt-1 border border-gray-300 rounded p-2 outline-none focus:border-[#0e544d] transition-colors"
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
                className="w-full mt-1 border border-gray-300 rounded p-2 outline-none focus:border-[#0e544d] transition-colors"
                placeholder="Write your message..."
              ></textarea>

              <button
                type="submit"
                className="inline-flex items-center justify-center shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out border border-transparent px-5 py-2 h-10 mt-4 w-full md:w-auto text-white"
                style={{ backgroundColor: "#0e544d" }}
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
