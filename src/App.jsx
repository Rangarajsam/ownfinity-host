import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useMatch } from 'react-router-dom';
import './App.css'
import AppHostRouterSync from './AppHostRouterSync.jsx';
import Footer from './components/Footer';
import HeaderApp from './components/mf/HeaderApp';
import ProductsApp from './components/mf/ProductsApp';
import AuthorizationApp from './components/mf/AuthorizationApp';
import CartApp from './components/mf/CartApp';
import WishlistApp from './components/mf/WishlistApp';
import ProfileApp from './components/mf/ProfileApp';

function App() {

  function HeaderWrapper() {
    const isLogin = useMatch('/login/*');
    const isRegister = useMatch('/register/*');
    if (isLogin || isRegister) return null;
    return <HeaderApp />;
  }
  
  return (
    <>
      <BrowserRouter>
        <AppHostRouterSync/>
        <HeaderWrapper />
        <main className="flex-1 container mx-auto mt-[93px] h-[calc(100vh - 150px)] overflow-auto">
          {/* remote application placeholder */}
          <Routes>
            {/* Explicit routes for each remote app - these take priority */}
            <Route path="/login/*" element={<AuthorizationApp />} />
            <Route path="/register/*" element={<AuthorizationApp />} />
            <Route path="/cart/*" element={<CartApp />} />
            <Route path="/wishlist/*" element={<WishlistApp />} />
            <Route path="/profile/*" element={<ProfileApp />} />
            
            {/* Products app handles everything else (including /product/*) */}
            <Route path="/*" element={<ProductsApp />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>

    </>
  )
}

export default App

