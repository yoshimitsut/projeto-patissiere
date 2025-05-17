import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function ProductModal({ product, categorySlug, onClose }) {
  // Fechar ao clicar fora
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (e.target.id === 'modal-overlay') {
        onClose();
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, [onClose]);

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
    >
      <div className="bg-white p-6 rounded-lg max-w-xl w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-black"
        >
          &times;
        </button>

        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded mb-4"
        />

        {/* Miniaturas */}
        <div className="flex gap-2 mb-4">
          {[product.image, ...(product.extraImages || [])].map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Mini ${i}`}
              className="w-16 h-16 object-cover rounded border"
            />
          ))}
        </div>

        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">{product.description || 'Descrição não disponível.'}</p>

        <Link
          to={`/product/${categorySlug}/${product.slug}`}
          className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={onClose}
        >
          Ver mais detalhes →
        </Link>
      </div>
    </div>
  );
}
