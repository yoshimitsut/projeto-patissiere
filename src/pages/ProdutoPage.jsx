// src/pages/ProdutoPage.jsx
import { useParams, useNavigate, Link } from 'react-router-dom';
import { categories } from '../data/categorias';

export default function ProdutoPage() {
  const { generoSlug, produtoSlug } = useParams();
  const navigate = useNavigate();

  const categoria = categories.find(cat => cat.slug === generoSlug);
  const produto = categoria?.products.find(prod => prod.slug === produtoSlug);

  if (!categoria || !produto) {
    return <div className="text-center py-10 text-red-600">Produto não encontrado.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      {/* Breadcrumb */}
      <nav className="text-sm mb-4 text-gray-600">
        <Link to="/" className="hover:underline text-blue-600">Início</Link> &gt;{' '}
        <Link to={`/produtos/${categoria.slug}`} className="hover:underline text-blue-600">{categoria.name}</Link> &gt;{' '}
        <span className="text-gray-800 font-semibold">{produto.name}</span>
      </nav>

      {/* Produto */}
      <h1 className="text-3xl font-bold mb-6">{produto.name}</h1>
      <img src={produto.image} alt={produto.name} className="w-full max-w-md mx-auto mb-6" />
      <p className="text-lg text-gray-700 text-center mb-8">{produto.description}</p>

      {/* Botão de Voltar */}
      <div className="text-center">
        <button
          onClick={() => navigate(-1)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Voltar
        </button>
      </div>
    </div>
  );
}
