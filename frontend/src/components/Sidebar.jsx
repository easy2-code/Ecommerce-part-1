// src/components/Sidebar.jsx
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import SetMealIcon from "@mui/icons-material/SetMeal";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import PetsIcon from "@mui/icons-material/Pets";
import HomeIcon from "@mui/icons-material/Home";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import EggAltIcon from "@mui/icons-material/EggAlt";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import SpaIcon from "@mui/icons-material/Spa";
import LocalHospitalIcon from "@mui/icons-material/LocalHospital";

const categories = [
  {
    name: "Fruits & Vegetables",
    icon: <RestaurantIcon fontSize="small" />,
    sub: ["Fresh Fruits", "Leafy Greens", "Organic"],
  },
  {
    name: "Meat & Fish",
    icon: <SetMealIcon fontSize="small" />,
    sub: ["Chicken", "Beef", "Seafood"],
  },
  {
    name: "Snacks",
    icon: <FastfoodIcon fontSize="small" />,
    sub: ["Chips", "Biscuits", "Chocolates"],
  },
  {
    name: "Pet Care",
    icon: <PetsIcon fontSize="small" />,
    sub: ["Dog Food", "Cat Food", "Accessories"],
  },
  {
    name: "Home & Cleaning",
    icon: <HomeIcon fontSize="small" />,
    sub: ["Detergents", "Cleaners", "Tissues"],
  },
  {
    name: "Dairy",
    icon: <EggAltIcon fontSize="small" />,
    sub: ["Milk", "Cheese", "Butter"],
  },
  {
    name: "Cooking",
    icon: <SpaIcon fontSize="small" />,
    sub: ["Oil", "Spices", "Grains"],
  },
  {
    name: "Breakfast",
    icon: <BreakfastDiningIcon fontSize="small" />,
    sub: ["Bread", "Cereals", "Jam"],
  },
  {
    name: "Beverage",
    icon: <LocalDrinkIcon fontSize="small" />,
    sub: ["Juice", "Tea", "Coffee"],
  },
  {
    name: "Health & Beauty",
    icon: <LocalHospitalIcon fontSize="small" />,
    sub: ["Skincare", "Supplements", "Cosmetics"],
  },
];

export default function Sidebar() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="h-full bg-gray-50 p-4">
      <h2 className="font-bold text-lg mb-4 text-[#10645b]">Categories</h2>
      <ul className="space-y-2">
        {categories.map((cat, idx) => (
          <li key={idx}>
            <div
              onClick={() => toggleDropdown(idx)}
              className="flex items-center justify-between cursor-pointer hover:text-[#0e544d] text-gray-700 p-2 rounded-lg hover:bg-gray-100"
            >
              <span className="flex items-center gap-2">
                {cat.icon} {cat.name}
              </span>
              {openIndex === idx ? (
                <ExpandLessIcon fontSize="small" />
              ) : (
                <ExpandMoreIcon fontSize="small" />
              )}
            </div>

            {openIndex === idx && (
              <ul className="ml-6 mt-2 space-y-2 pl-2 text-sm text-gray-600">
                {cat.sub.map((subItem, subIdx) => (
                  <li
                    key={subIdx}
                    className="hover:text-[#0e544d] cursor-pointer py-1"
                  >
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
