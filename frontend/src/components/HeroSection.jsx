import React from "react";
import { Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import BgImage from "../assets/imgs/background-img.png"; // import your background image

export default function HeroSection() {
  return (
    <div
      className="relative bg-[#f9f9f9] h-[90vh] flex flex-col justify-center px-6 md:px-12 text-center overflow-hidden"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Central Content Section */}
      <div className="relative z-10 max-w-3xl mx-auto">
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
          Groceries Delivered in 90 Minute
        </h1>
        {/* Subheading */}
        <p className="text-gray-600 mb-8">
          Get your healthy foods & snacks delivered at your doorsteps all day
          everyday
        </p>

        {/* Search Bar */}
        <div className="flex items-center justify-center max-w-2xl mx-auto shadow-lg rounded-lg overflow-hidden bg-white">
          <input
            type="text"
            placeholder="Search your products from here"
            className="flex-grow px-4 py-3 outline-none text-gray-700"
          />
          {/* Search button with icon */}
          <Button
            variant="contained"
            startIcon={<SearchIcon />}
            className="!bg-[#10645b] hover:!bg-[#0e544d] !rounded-none !rounded-r-lg !py-3 !px-6 normal-case"
          >
            Search
          </Button>
        </div>
      </div>

      {/* Floating Cart Widget (fixed on the right side of the screen) */}
      <div className="fixed top-1/3 right-0 bg-[#16a085] text-white px-4 py-3 rounded-md shadow-lg text-sm flex flex-col items-center z-50">
        <ShoppingBagIcon fontSize="small" />
        <span>0 Item</span>
        <span className="bg-white text-[#16a085] mt-1 px-2 py-0.5 rounded">
          $0.00
        </span>
      </div>
    </div>
  );
}
