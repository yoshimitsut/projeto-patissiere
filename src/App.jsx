import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import About from './pages/About';
import CategoriaPage from './pages/CategoriaPage';
import GeneroPage from './pages/GeneroPage';
import ProdutoPage from './pages/ProdutoPage';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Chef from './pages/Chef';
import Access from './pages/Access';
import TodosProdutos from './pages/TodosProdutos';

function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Router>
        <Navbar/>

        <main className="flex-grow pt-20 sm:pt-24">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/product" element={<TodosProdutos />} />
            <Route path="/categoria/:slug" element={<GeneroPage />} />
            <Route path="/chef" element={<Chef />} />
            <Route path="/access" element={<Access />} />
          </Routes>
        </main>
        
        <Footer />
      </Router>
    </div>
  );
}

export default App
