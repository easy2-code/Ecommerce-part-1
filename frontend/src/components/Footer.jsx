import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaHeart,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-6 mt-16 border-t border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        {/* Left: Text */}
        <p className="text-sm flex items-center gap-1 mb-3 md:mb-0">
          Made with <FaHeart className="text-red-500 inline" /> by{" "}
          <span className="font-semibold text-gray-900">Tayyab Khan</span>
        </p>

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
    </footer>
  );
}
