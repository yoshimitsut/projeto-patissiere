import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNavbar(false); // rolando para baixo
      } else {
        setShowNavbar(true); // rolando para cima
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    
    <header
      className={`fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow z-50 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      } bg-transparent backdrop-blur-sm`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-lg font-bold tracking-wide text-gray-800">
          <Link to="/">
            <img src={logo} alt="Logo" className="h-10 w-auto" />
          </Link>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden lg:flex space-x-6 text-sm font-medium text-gray-700">
          <li><Link to="/" className="hover:text-blue-600 transition-colors duration-200 text-base sm:text-lg lg:text-xl">Home</Link></li>
          <li><Link to="/about" className="hover:text-blue-600 transition-colors duration-200 text-base sm:text-lg lg:text-xl">Sobre</Link></li>
          <li><Link to="/product" className="hover:text-blue-600 transition-colors duration-200 text-base sm:text-lg lg:text-xl">Product</Link></li>
          <li><Link to="/chef" className="hover:text-blue-600 transition-colors duration-200 text-base sm:text-lg lg:text-xl">Chef</Link></li>
          <li><Link to="/access" className="hover:text-blue-600 transition-colors duration-200 text-base sm:text-lg lg:text-xl">Access</Link></li>
          <li><Link to="/onlineshop" className="hover:text-blue-600 transition-colors duration-200 text-base sm:text-lg lg:text-xl">Online Shop</Link></li>
        </ul>

        {/* Ícone de menu sanduíche */}
        <button
          className="lg:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1 cursor-pointer"
          onClick={toggleMenu}
        >
          <span className="w-full h-1 bg-gray-800"></span>
          <span className="w-full h-1 bg-gray-800"></span>
          <span className="w-full h-1 bg-gray-800"></span>
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-black/50 z-40 flex justify-center items-center transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className={`bg-white p-6 rounded-md w-4/5 max-h-screen h-auto overflow-y-auto flex flex-col items-center justify-start transform transition-all duration-300 ease-in-out ${
            isOpen ? 'scale-100' : 'scale-90'
          }`}
        >
          {/* Botão fechar */}
          <button
            className="self-end text-gray-800 text-3xl mb-4 cursor-pointer"
            onClick={toggleMenu}
          >
            &times;
          </button>

          {/* Links do menu mobile */}
          <ul className="space-y-4 text-lg font-medium text-gray-700 text-center w-full">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>Sobre</Link></li>
            <li><Link to="/product" onClick={toggleMenu}>Product</Link></li>
            <li><Link to="/chef" onClick={toggleMenu}>Chef</Link></li>
            <li><Link to="/access" onClick={toggleMenu}>Access</Link></li>
            <li><Link to="/onlineshop" onClick={toggleMenu}>Online Shop</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
}
