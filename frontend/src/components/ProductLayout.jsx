import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Sidebar from "./Sidebar";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/cartSlice";
import { Drawer, IconButton, useMediaQuery, useTheme } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

// Dummy products array (your existing data)
const products = [
  {
    name: "Apples",
    weight: "1lb",
    price: 2.0,
    discountPrice: 1.6,
    img: "https://media.istockphoto.com/id/137349326/photo/jonagold-apples-in-a-basket.jpg?s=612x612&w=0&k=20&c=WNKr9Lz-XPM21ljSKCnhr1AUeU-wtofakzvYiMc6lYg=",
  },

  {
    name: "Baby Spinach",
    weight: "2Pfund",
    price: 0.6,
    img: "https://media.istockphoto.com/id/1167342422/photo/spinach-on-a-white-background.jpg?s=612x612&w=0&k=20&c=K3QwCFSuX6QmbpRI3Gw5Qd9aZ8jsqAWVetd4uqhyoJs=",
  },
  {
    name: "Blueberries",
    weight: "1lb",
    price: 3.0,
    img: "https://nwwildfoods.com/cdn/shop/articles/blueberries_blog.png?v=1698967678&width=2048",
  },
  {
    name: "Brussels Sprout",
    weight: "1lb",
    price: 5.0,
    discountPrice: 3.0,
    img: "https://bcfresh.ca/wp-content/uploads/2021/11/Brussels-sprouts.jpg",
    discount: "40%",
  },
  {
    name: "Lemon",
    weight: "4pc(s)",
    price: 1.2,
    discountPrice: 1.5,
    img: "https://www.dsmonline.pk/media/catalog/product/cache/e626209f6586797a49e0d0a395e17e33/l/e/lemon-removebg-preview.png",
  },
  {
    name: "Strawberry",
    weight: "1lb",
    price: 1,
    discountPrice: 1.3,
    img: "https://thumbs.dreamstime.com/b/three-strawberries-strawberry-leaf-white-background-114284301.jpg",
  },
  {
    name: "NIVEA",
    weight: "1pc(s)",
    price: 2.0,
    img: "https://img.nivea.com/-/media/miscellaneous/media-center-items/2/9/7/f6b842bd5a0348f6a91a2f4867ad3172-original.png",
  },

  {
    name: "San Lucas Corn Oil",
    weight: "2lb",
    price: 5.6,
    img: "https://media.istockphoto.com/id/613246396/photo/plastic-bottle-with-corn-oil.jpg?s=612x612&w=0&k=20&c=r81OMmo_83aTuHly-vM3KaLDO8uXvroJrl1Qd2OeESI=",
  },
  {
    name: "Ozmo Air Fabric Freshner",
    weight: "1pc(s)",
    price: 3.0,
    discountPrice: 50.0,
    img: "https://images-eu.ssl-images-amazon.com/images/I/51rlbUHlnfL._AC_UL600_SR600,600_.jpg",
  },
  {
    name: "Signature Salmon",
    weight: "1Pfund",
    price: 4.95,
    img: "https://media.istockphoto.com/id/629795254/photo/salmon-steak.jpg?s=612x612&w=0&k=20&c=rmfuJVcL9anRnY-YC2qin2xKZvACWBivb8-8u87Lgas=",
    discount: "40%",
  },
  {
    name: "Dairy Milk Crispello",
    weight: "1pc(s)",
    price: 2.5,
    img: "https://img.clevup.in/22879/SKU-3311_0-1745052770763.webp?width=600&format=webp",
  },
  {
    name: "Lotus Biscoff",
    weight: "0.5lb",
    price: 10.0,
    discountPrice: 7.5,
    img: "https://cdn11.bigcommerce.com/s-21ntmrkfhf/images/stencil/1280x1280/products/14675/6009/biscuit-biscoff-2pk__71264.1664928485.png?c=2?imbypass=on",
  },
];

export default function ProductLayout() {
  const dispatch = useDispatch();
  const [visibleCount, setVisibleCount] = useState(6);
  const [selectedImage, setSelectedImage] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleAddToCart = (product) => dispatch(addItem(product));
  const handleLoadMore = () => setVisibleCount((prev) => prev + 6);
  const openModal = (img) => setSelectedImage(img);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* ---------- Sidebar Section ---------- */}
      {isMobile ? (
        <>
          <IconButton
            onClick={() => setSidebarOpen(true)}
            className="m-4 text-[#10645b]"
          >
            <MenuIcon fontSize="large" />
          </IconButton>

          <Drawer
            anchor="left"
            open={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          >
            <div className="w-64 p-4 h-full">
              <Sidebar />
            </div>
          </Drawer>
        </>
      ) : (
        <aside className="w-64 h-screen bg-gray-50 shadow-md overflow-y-auto">
          <Sidebar />
        </aside>
      )}

      {/* ---------- Product Grid Section ---------- */}
      <main className="flex-1 bg-gray-100 px-4 sm:px-6 md:px-12 py-10 overflow-y-auto hide-scrollbar">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.slice(0, visibleCount).map((product, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg shadow p-4 flex flex-col relative h-80"
            >
              {/* Discount Badge */}
              {product.discount && (
                <span className="absolute top-2 right-2 bg-yellow-400 text-white text-xs font-bold px-2 py-1 rounded">
                  {product.discount}
                </span>
              )}

              {/* Product Image */}
              <div
                className="w-full h-40 flex items-center justify-center mb-3 cursor-pointer"
                onClick={() => openModal(product.img)}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  className="max-h-full object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="flex-1 flex flex-col">
                <h3 className="font-semibold text-gray-800">{product.name}</h3>
                <p className="text-sm text-gray-500">{product.weight}</p>

                {/* Price + Add to Cart */}
                <div className="mt-auto flex justify-between items-center">
                  <div className="flex flex-col items-start">
                    {product.discountPrice ? (
                      <>
                        <span className="line-through text-gray-400 text-sm">
                          ${product.price.toFixed(2)}
                        </span>
                        <span className="text-[#10645b] font-bold">
                          ${product.discountPrice.toFixed(2)}
                        </span>
                      </>
                    ) : (
                      <span className="text-[#10645b] font-bold">
                        ${product.price.toFixed(2)}
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => handleAddToCart(product)}
                    className="flex items-center gap-2 border border-[#10645b] text-[#10645b] bg-white hover:bg-[#0e544d] hover:text-white transition px-4 py-2 rounded text-sm font-medium"
                  >
                    <ShoppingCartIcon fontSize="small" />
                    Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < products.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleLoadMore}
              className="px-6 py-2 bg-[#10645b] text-white font-medium rounded hover:bg-[#0e544d] transition"
            >
              Load More
            </button>
          </div>
        )}
      </main>

      {/* ---------- Modal (Enlarged Image) ---------- */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white rounded-lg overflow-hidden shadow-lg w-11/12 sm:w-3/4 md:w-2/3 lg:w-1/2 max-h-[90%]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end p-2">
              <button
                onClick={closeModal}
                className="text-gray-500 hover:text-gray-800 text-xl font-bold"
              >
                ×
              </button>
            </div>
            <div className="flex justify-center items-center p-4 h-[calc(100%-48px)]">
              <img
                src={selectedImage}
                alt="Enlarged product"
                className="object-contain w-full h-full"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
