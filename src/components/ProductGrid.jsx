import { Link } from 'react-router-dom';
import { categories } from '../data/categorias';
// import ProductCard from '../components/ProductCard'; // Seu componente de produto

export default function ProductGrid() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10 space-y-12">

      {/* Seção de Categorias */}
      <section>
        <h1 className="text-3xl font-bold mb-6 text-center">Product</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link to={`/product/${cat.slug}`} key={cat.slug}>
              <div className="rounded overflow-hidden shadow hover:shadow-lg transition">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-40 object-cover"
                />
                <div className="text-center font-semibold py-2">{cat.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
