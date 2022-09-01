import React from "react";
import Home from "./core/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./core/Search";
import Navbar from "./layout/navbar/Navbar";
import Footer from "./layout/footer/Footer";
import About from "./core/About";
import Contact from "./core/Contact";
import Signin from "./core/SignIn";
import Signup from "./core/Signup";
import Products from "./layout/products/Products";
import "./App.css";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/productById" element={<Search />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
