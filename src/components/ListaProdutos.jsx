import React, { useState } from 'react';
import { produtos } from '../data/produtos';
import OverlayProduto from './OverlayProduto';

export default function ListaProdutos() {
  const [produtoSelecionado, setProdutoSelecionado] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Nossos Produtos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {produtos.map((produto) => (
          <div
            key={produto.id}
            onClick={() => setProdutoSelecionado(produto)}
            className="cursor-pointer border rounded-lg shadow p-4 hover:shadow-lg transition"
          >
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-full h-auto rounded"
            />
            <h2 className="text-xl mt-2 font-semibold text-center">{produto.nome}</h2>
          </div>
        ))}
      </div>

      <OverlayProduto
        produto={produtoSelecionado}
        onClose={() => setProdutoSelecionado(null)}
      />
    </div>
  );
}
