import React from "react";

// Import local images
import ExpressImg from "../assets/imgs/card-1.png";
import CashImg from "../assets/imgs/card-2.png";
import GiftImg from "../assets/imgs/card-3.png";

export default function PromoSection() {
  const cards = [
    {
      title: "Express Delivery",
      subtitle: "With selected Items",
      button: "Save Now",
      bg: "bg-blue-400",
      img: ExpressImg,
    },
    {
      title: "Cash On Delivery",
      subtitle: "With selected Items",
      button: "Save Now",
      bg: "bg-green-400",
      img: CashImg,
    },
    {
      title: "Gift Voucher",
      subtitle: "With personal care items",
      button: "Shop Coupons",
      bg: "bg-pink-400",
      img: GiftImg,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:px-12 py-10 border-t border-b border-gray-200">
      {cards.map((card, idx) => (
        <div
          key={idx}
          className={`relative rounded-lg overflow-hidden ${card.bg} text-white p-6 flex flex-col justify-between`}
        >
          {/* Content */}
          <div>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-sm mb-4">{card.subtitle}</p>
            <button className="bg-white text-gray-800 px-4 py-2 rounded-full text-sm font-medium">
              {card.button}
            </button>
          </div>

          {/* Image */}
          <img
            src={card.img}
            alt={card.title}
            className="absolute bottom-0 right-0 w-32 h-auto"
          />
        </div>
      ))}
    </div>
  );
}
