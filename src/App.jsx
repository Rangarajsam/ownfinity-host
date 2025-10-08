import React, { useState } from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import ProductsApp from './components/mf/ProductsApp';

function App() {

  return (
    <>
      <Header />
      <main className="flex-1 container mx-auto mt-[93px] h-[calc(100vh - 150px)] overflow-auto">
        {/* remote application placeholder */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ProductsApp/>} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  )
}

export default App
