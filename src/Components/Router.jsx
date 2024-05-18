import { BrowserRouter, Routes, Route, } from "react-router-dom";
import React from 'react';
// import Header from "./Navbar";
import Home from "./Home";
import Product from './Product'
import Cart from './Cart'

function Routering() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Header/>}/> */}
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>

    </div>
  )
}
export default Routering