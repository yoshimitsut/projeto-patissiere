import React from 'react';
import { Link } from 'react-router-dom';

import boloImg from '../assets/bolo-chocolate2.jpeg';
import macaronImg from '../assets/macaron-capa.jpeg';
import doceImg from '../assets/doces-capa.jpeg';

const categories = [
  {
    name: 'Bolos',
    slug: 'bolos',
    image: boloImg,
    examples: ['Bolo de Chocolate', 'Bolo de Morango'],
  },
  {
    name: 'Macarons',
    slug: 'macarons',
    image: macaronImg,
    examples: ['Macaron de Pistache', 'Macaron de Framboesa'],
  },
  {
    name: 'Doces',
    slug: 'doces',
    image: doceImg,
    examples: ['Brigadeiro', 'Beijinho'],
  },
];

export default function CategoryGrid() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-8">Categorias</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <Link to={`/categoria/${cat.slug}`} key={cat.slug}>
            <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300">
              <img src={cat.image} alt={cat.name} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{cat.name}</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  {cat.examples.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
