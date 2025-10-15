import React from "react";
import HeroSection from "../components/HeroSection";
import PromoSection from "../components/PromoSection";
import ProductLayout from "../components/ProductLayout";
import { useSelector } from "react-redux";

export default function Home() {
  // Verify Configuration of redux
  const cart = useSelector((state) => state.cart);
  console.log("Redux Cart State:", cart);

  return (
    <div>
      <HeroSection />
      <PromoSection />
      <ProductLayout />
    </div>
  );
}
