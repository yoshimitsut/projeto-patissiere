import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.avif';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm shadow z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <div className="text-lg font-bold tracking-wide text-gray-800">
          <Link to="/"><img src={logo} alt="Logo" className="h-10 w-auto" /></Link>
        </div>
        <ul className="flex space-x-6 text-sm font-medium text-gray-700">
          <li>
            <Link to="/" className="hover:text-blue-600 transition-colors duration-200">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 transition-colors duration-200">
              Sobre
            </Link>
          </li>
          <li>
            <a href="#contato" className="hover:text-blue-600 transition-colors duration-200">
              Product
            </a>
          </li>
          <li>
            <a href="#contato" className="hover:text-blue-600 transition-colors duration-200">
              Chef
            </a>
          </li>
          <li>
            <a href="#contato" className="hover:text-blue-600 transition-colors duration-200">
              Access
            </a>
          </li>
          <li>
            <a href="#contato" className="hover:text-blue-600 transition-colors duration-200">
            Online Shop
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
