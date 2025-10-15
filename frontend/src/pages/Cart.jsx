import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, deleteItem, clearCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  const { items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPrice = items
    .reduce(
      (sum, item) => sum + item.quantity * (item.discountPrice || item.price),
      0
    )
    .toFixed(2);

  if (items.length === 0)
    return (
      <div className="flex flex-col items-center justify-center h-[80vh] text-gray-500">
        <img
          src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png"
          alt="Empty Cart"
          className="w-40 h-40 mb-4 opacity-80"
        />
        <h2 className="text-2xl font-semibold mb-4">
          Your cart is currently empty
        </h2>
        <Link
          to="/"
          className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-3 rounded-lg shadow-md hover:shadow-lg transition-all hover:scale-105"
        >
          🛍 Continue Shopping
        </Link>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 bg-gray-50 min-h-screen">
      <h2 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
        Your Shopping Cart
      </h2>

      <div className="bg-white shadow-lg rounded-2xl overflow-hidden divide-y divide-gray-200">
        {items.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-col md:flex-row justify-between items-center p-6 hover:bg-gray-50 transition-all duration-300"
          >
            {/* Product Info */}
            <div className="flex items-center gap-6 w-full md:w-1/3">
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-lg border border-gray-200 shadow-sm"
              />
              <div>
                <h3 className="font-semibold text-lg text-gray-800">
                  {item.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  ${item.discountPrice || item.price}
                </p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <button
                onClick={() => dispatch(removeItem(item))}
                className="bg-gray-100 border border-gray-300 text-gray-700 px-3 py-1.5 rounded-md text-lg font-bold hover:bg-gray-200 active:scale-95 transition-all"
              >
                −
              </button>
              <span className="text-lg font-semibold text-gray-700">
                {item.quantity}
              </span>
              <button
                onClick={() => dispatch(addItem(item))}
                className="bg-gray-100 border border-gray-300 text-gray-700 px-3 py-1.5 rounded-md text-lg font-bold hover:bg-gray-200 active:scale-95 transition-all"
              >
                +
              </button>
            </div>

            {/* Price + Delete */}
            <div className="flex items-center gap-4 mt-4 md:mt-0">
              <span className="font-bold text-xl text-emerald-600">
                $
                {(item.quantity * (item.discountPrice || item.price)).toFixed(
                  2
                )}
              </span>
              <button
                onClick={() => dispatch(deleteItem(item))}
                className="text-red-500 text-2xl hover:text-red-700 hover:scale-110 transition-all"
                title="Remove item"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Total Section */}
      <div className="sticky bottom-0 left-0 w-full mt-10 bg-white border-t shadow-md rounded-t-2xl p-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <h3 className="text-2xl font-semibold text-gray-700">Total:</h3>
          <span className="text-3xl font-extrabold text-emerald-600">
            ${totalPrice}
          </span>
        </div>

        <div className="flex gap-4">
          <button
            onClick={() => dispatch(clearCart())}
            className="bg-red-500 text-white px-6 py-2.5 rounded-lg hover:bg-red-600 shadow-md active:scale-95 transition-all"
          >
            Clear Cart
          </button>

          <button className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-2.5 rounded-lg font-medium hover:shadow-lg active:scale-95 transition-all">
            Proceed to Checkout →
          </button>
        </div>
      </div>
    </div>
  );
}
