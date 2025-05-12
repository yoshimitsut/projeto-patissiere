import { useParams } from 'react-router-dom';

export default function CategoriaPage() {
  const { slug } = useParams();

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold mb-6">Produtos de {slug}</h1>
      {/* Você pode filtrar e exibir os produtos da categoria aqui */}
    </div>
  );
}
