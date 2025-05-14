import { Link } from 'react-router-dom';

export default function ProductCard({ product, categorySlug }) {
  return (
    <Link to={`/product/${categorySlug}/${product.slug}`}>
      <div className="rounded shadow hover:shadow-lg overflow-hidden transition">
        <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
        <div className="p-2 text-center font-medium">{product.name}</div>
      </div>
    </Link>
  );
}
