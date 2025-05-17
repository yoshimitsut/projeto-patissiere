import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import './App.css'

import Home from './pages/Home';
import About from './pages/About';
import CategoriaPage from './pages/CategoriaPage';
import GeneroPage from './pages/GeneroPage';
import ProdutoPage from './pages/ProdutoPage';
import Chef from './pages/Chef';
import Access from './pages/Access';
import AllProduts from './pages/AllProduts';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className='flex flex-col min-h-screen'>
      <Router>
        <ScrollToTop />
        <Navbar/>

        <main className="flex-grow pt-20 sm:pt-24 bg-[#fdfbf8]">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />

            <Route path="/product" element={<AllProduts />} />
            <Route path="/product/:slugCategorie/:slugProduct" element={<ProdutoPage />} />
            <Route path="/product/:slug" element={<GeneroPage />} />

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
