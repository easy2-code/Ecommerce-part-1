import React from "react";
import { MapPinIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

// Import local shop images
import MedicineImg from "../assets/Shop-imgs/Medicine-thumbnail.webp";
import GadgetImg from "../assets/Shop-imgs/Gadget-thumbnail.webp";
import BooksImg from "../assets/Shop-imgs/Publisher-logo-thumbnail.webp";
import GroceryImg from "../assets/Shop-imgs/Group-36321-thumbnail.webp";
import BakeryImg from "../assets/Shop-imgs/bakery-thumbnail.webp";
import MakeupImg from "../assets/Shop-imgs/Makeup-thumbnail.webp";
import BagsImg from "../assets/Shop-imgs/Backpack-thumbnail.webp";
import ClothingImg from "../assets/Shop-imgs/fashion-thumbnail.webp";
import FurnitureImg from "../assets/Shop-imgs/Furniture-thumbnail.webp";

// Local data using imported images
const shops = [
  {
    name: "Medicine",
    address:
      "East Avenue 1743, West Tower, New York, Manhattan, 12332, United States",
    icon: MedicineImg,
  },
  {
    name: "Gadget",
    address: "1740 Bedford Street, Alabama, Michigan, 35203, USA",
    icon: GadgetImg,
  },
  {
    name: "Books Shop",
    address: "44444, California, zurich, 8021, Switzerland",
    icon: BooksImg,
  },
  {
    name: "Grocery Shop",
    address: "1986 Spinnaker Lane, Illinois, Freeport, 61032, USA",
    icon: GroceryImg,
  },
  {
    name: "Bakery Shop",
    address: "4422 Fort Street, Carolina, Rocky Mount, 27801, USA",
    icon: BakeryImg,
  },
  {
    name: "Makeup Shop",
    address: "2960 Rose Avenue, Louisiana, Metairie, 70001, USA",
    icon: MakeupImg,
  },
  {
    name: "Bags Shop",
    address: "1740 Bedford Street, Alabama, Michigan, 35203, USA",
    icon: BagsImg,
  },
  {
    name: "Clothing Shop",
    address: "4885 Spring Street, Illinois, Lincoln, 62656, USA",
    icon: ClothingImg,
  },
  {
    name: "Furniture Shop",
    address: "588 Finwood Road, New Jersey, East Dover, 08753, USA",
    icon: FurnitureImg,
  },
];

export default function ShopPage() {
  return (
    <div className="bg-gray-50 min-h-screen flex justify-center py-10">
      <div className="w-full max-w-6xl px-6">
        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8">All Shops</h1>

        {/* Shops Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shops.map((shop, idx) => (
            <Link
              to={`/shop/${shop.name.toLowerCase().replace(/\s+/g, "-")}`}
              key={idx}
              className="block bg-white border border-gray-300/40 rounded-lg shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex items-center p-6">
                {/* Icon */}
                <div className="flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center overflow-hidden mr-4">
                  <img
                    src={shop.icon}
                    alt={shop.name}
                    className="w-16 h-16 object-cover rounded-full"
                  />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h2 className="font-semibold text-gray-900 text-lg">
                    {shop.name}
                  </h2>
                  <div className="flex items-start text-sm text-gray-500 mt-1">
                    <MapPinIcon className="w-4 h-4 text-gray-400 mt-0.5 mr-1 flex-shrink-0" />
                    <span>{shop.address}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
