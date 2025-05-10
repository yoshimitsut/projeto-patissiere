// src/components/ProductGrid.jsx
import React from 'react';
import p1 from '../assets/bolo-chocolate2.jpeg';
import p2 from '../assets/torta-maca.jpeg';
import p3 from '../assets/caramelo.jpeg';
import p4 from '../assets/cheasecake.jpeg';

const products = [
  { name: 'Bolo de Chocolate', image: p1 },
  { name: 'Torta de Maçã', image: p2 },
  { name: 'Caramelo', image: p3 },
  { name: 'Cheesecake', image: p4 },
];

export default function ProductGrid() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Nossos Produtos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden flex flex-col items-center p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-64 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}