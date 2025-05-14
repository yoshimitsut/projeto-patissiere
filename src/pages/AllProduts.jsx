import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import ProductCard from '../components/ProductCard'; // Seu componente de produto
import ProductGrid from '../components/ProductGrid';

export default function AllProduts() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-12">

      <ProductGrid />

      {/* Seção de Produtos por Categoria */}
      {categories.map((cat) => (
        <section key={cat.slug}>
          <h2 className="text-2xl font-bold mb-4">{cat.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cat.products.map((product, idx) => (
              <ProductCard
                key={idx}
                product={product}
                categorySlug={cat.slug}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
