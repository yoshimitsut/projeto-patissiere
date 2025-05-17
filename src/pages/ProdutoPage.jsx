import { useParams, Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { useEffect, useState } from 'react';

export default function ProdutoPage() {
  const { slugCategorie, slugProduct } = useParams();

  const categoria = categories.find(c => c.slug === slugCategorie);
  const produtos = categoria?.products || [];

  const currentIndex = produtos.findIndex(p => p.slug === slugProduct);
  const produto = produtos[currentIndex];

  const anterior = produtos[currentIndex - 1];
  const proximo = produtos[currentIndex + 1];

  // Galeria de imagens
  const [imagemPrincipal, setImagemPrincipal] = useState(produto?.image);
  useEffect(() => {
    setImagemPrincipal(produto?.image);
  }, [produto]);
  if (!produto) {
    return <div className="text-red-600 text-center py-10">Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-10 space-y-8 bg-white shadow">
      
      {/* Botões de navegação */}
      <div className="flex justify-between items-center">
        <Link
          to={`/product/`}
          className="px-4 py-2 bg-[#f6b55b] hover:hover:bg-[#f6bf71] rounded"
        >
          ← Product
        </Link>

        <div className="space-x-4">
          {anterior && (
            <Link
            to={anterior ? `/product/${slugCategorie}/${anterior.slug}` : "#"}
            className={`px-4 py-2 rounded ${
              anterior
                ? "bg-[#f6b55b] hover:bg-[#f6bf71]"
                : "bg-[#f6bf71] text-gray-400 cursor-not-allowed"
            }`}
            onClick={(e) => {
              if (!anterior) e.preventDefault();
            }}
          >
            ← Before
          </Link>
          )}
          {proximo && (
            <Link
            to={proximo ? `/product/${slugCategorie}/${proximo.slug}` : "#"}
            className={`px-4 py-2 rounded ${
              proximo
                ? "bg-[#f6b55b] hover:bg-[#f6bf71]"
                : "bg-[#f6b55b] text-gray-400 cursor-not-allowed"
            }`}
            onClick={(e) => {
              if (!proximo) e.preventDefault();
            }}
          >
            Next →
          </Link>
          )}
        </div>
      </div>

      {/* Conteúdo principal */}
      <div className="grid md:grid-cols-2 gap-10 items-start ">
        {/* Galeria de Imagens */}
        <div>
          <img
            src={imagemPrincipal}
            alt={produto.name}
            className="w-full h-96 object-cover rounded shadow"
          />

          {/* Miniaturas */}
          <div className="flex gap-2 mt-4">
            {[produto.image, ...(produto.extraImages || [])].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`Miniatura ${i}`}
                onMouseEnter={() => setImagemPrincipal(img)}
                onClick={() => setImagemPrincipal(img)}
                className="w-20 h-20 object-cover rounded cursor-pointer border hover:border-black"
              />
            ))}
          </div>
        </div>

        {/* Descrição */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{produto.name}</h1>
          <p className="text-gray-700 leading-relaxed">
            {produto.description || 'Descrição do produto ainda não disponível.'}
          </p>
        </div>
      </div>
    </div>
  );
}
