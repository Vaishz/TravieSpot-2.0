// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Form } from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header";
import Footer from "./Footer";
import Places from "./Places/Places";
import Random from "./Random";
import Shop from "./Shop";
import ShopCart from "./ShopCart";
import { CartProvider } from "react-use-cart";
import AboutUs from "./AboutUs";
import Certificate from "./Certificate";
import KnowAbout from "./KnowAbout";
import CityDetail from "./CityDetail";
import UForm from "./UForm";
import Whatsapp from "./Whatsapp";
import Services from "./services/Services";
import Login from "./Login/Login";
import SignUp from "./Login/SignUp";
import Chatbox from "./Chatbox/Chatbox";
import ReviewForm from "./ReviewForm/ReviewForm";
import Flights from "./Flights/Flights";
import Trains from "./Trains/Trains";
import Bye from "./Login/Bye";
import Faq from "./Faq";
import Green from "./Green";

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
            <Route path="/flights" element={<Flights />} />
            <Route path="/certificate" element={<Certificate />} />
            <Route path="/know" element={<KnowAbout />} />
            <Route path="/know/:id" element={<CityDetail />} />
            <Route path="/uform" element={<UForm />} />
            <Route path="/services" element={<Services />} />
            <Route path="/uform" element={<UForm />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path = "/review" element= {<ReviewForm/>}/>
            <Route path = "/bye" element= {<Bye/>}/>
            <Route path = "/trains" element= {<Trains/>}/>
            <Route path = "/faq" element= {<Faq/>}/>
            <Route path = "/green" element= {<Green/>}/>
          </Routes>
        </CartProvider>
      </BrowserRouter>
      <Footer />
      <Whatsapp/>
      <Chatbox/>
    </>
  );
};

export default App;
