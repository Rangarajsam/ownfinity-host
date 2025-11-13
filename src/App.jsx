import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Footer from './components/Footer';
import HeaderApp from './components/mf/HeaderApp';
import ProductsApp from './components/mf/ProductsApp';
import AuthorizationApp from './components/mf/AuthorizationApp';
import CartApp from './components/mf/CartApp';
import WishlistApp from './components/mf/WishlistApp';
import ProfileApp from './components/mf/ProfileApp';

function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderApp />
        <main className="flex-1 container mx-auto mt-[93px] h-[calc(100vh - 150px)] overflow-auto">
          {/* remote application placeholder */}
          <Routes>
            <Route path="/" element={<ProductsApp />} />
            <Route path="/login" element={<AuthorizationApp />} />
            <Route path="/cart" element={<CartApp />} />
            <Route path="/wishlist" element={<WishlistApp />} />
            <Route path="/profile" element={<ProfileApp />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App
