import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Header from "./components/Header";
import ShopPage from "./pages/ShopPage";
import OfferPage from "./pages/OfferPage";
import ContactPage from "./pages/ContactPage";
import SignInModal from "./components/SignInModal";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shops" element={<ShopPage />} />
        <Route path="/offers" element={<OfferPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sign-in" element={<SignInModal />} />
        <Route path="/signup" element={<SignInModal />} />
      </Routes>
    </>
  );
}
