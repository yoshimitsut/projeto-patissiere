// src/pages/GeneroPage.jsx
import { useParams } from 'react-router-dom';
import { categories } from '../data/categories.js';
import { Link } from 'react-router-dom';

export default function GeneroPage() {
  const { slug } = useParams();
  const category = categories.find(cat => cat.slug === slug);

  if (!category) {
    return <div className="text-center py-10 text-red-600">Gênero não encontrado.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{category.name}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {category.products.map((product, idx) => (
          <Link to={`/product/${slug}/${product.slug}`} key={idx}>
            <div className="rounded shadow hover:shadow-lg overflow-hidden transition fade-in-down">
              <img src={product.image} alt={product.name} className="w-full h-45 object-cover items-center" />
              <div className="p-2 text-center font-medium">{product.name}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
