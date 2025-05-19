import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import ProductCard from '../components/ProductCard';
import ProductGrid from '../components/ProductGrid';

import PageWrapper from '../components/PageWrapper';

export default function AllProduts() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-12">

        <ProductGrid />

        {/* Seção de Produtos por Categoria */}
        {categories.map((cat) => (
          <section key={cat.slug}>
            <h2 className="text-2xl font-bold mb-4">{cat.name}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
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
    </PageWrapper>
  );
}
