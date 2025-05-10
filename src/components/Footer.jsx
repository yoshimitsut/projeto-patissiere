import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-100 mt-12 py-8 px-4 text-center text-sm text-gray-600">
      <div className="max-w-4xl mx-auto space-y-4">
        <p>Contato: contato@seudominio.com | (11) 99999-9999</p>
        
        <div className="flex justify-center flex-wrap gap-4 text-base">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            Instagram
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
            Facebook
          </a>
          <Link to="/about" className="hover:text-blue-600">
            Sobre nós
          </Link>
          <Link to="/faq" className="hover:text-blue-600">
            FAQ
          </Link>
          <Link to="/termos" className="hover:text-blue-600">
            Termos
          </Link>
        </div>

        <p>© {new Date().getFullYear()} Y_Patisserie. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}