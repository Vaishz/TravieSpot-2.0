// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header";
import Footer from "./Footer";
import Places from "./Places";
import Random from "./Random";
import Shop from "./Shop";
import ShopCart from "./ShopCart";
import { CartProvider } from "react-use-cart";
import AboutUs from "./AboutUs";
import Flights from "./Flights";
import Certificate from "./Certificate";


const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/places" element={<Places />} />
            <Route path="/random" element={<Random />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<ShopCart />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/flights" element={<Flights/>} />
            <Route path="/certificate" element={<Certificate/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>      
      <Footer />
    </>
  );
};

export default App;
