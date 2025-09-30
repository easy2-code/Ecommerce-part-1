// src/pages/Home.jsx
import React from "react";
import HeroSection from "../components/HeroSection";
import PromoSection from "../components/PromoSection";
import ProductLayout from "../components/ProductLayout";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <PromoSection />
      <ProductLayout />
    </div>
  );
}
