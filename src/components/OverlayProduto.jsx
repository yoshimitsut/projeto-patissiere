// src/components/OverlayProduto.jsx
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function OverlayProduto({ produto, onClose }) {
  return (
    <AnimatePresence>
      {produto && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-lg p-6 max-w-lg w-full relative mx-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-500 hover:text-black text-xl"
            >
              ×
            </button>
            <img
              src={produto.imagem}
              alt={produto.nome}
              className="w-full h-auto rounded"
            />
            <h1 className="text-2xl font-bold mt-4">{produto.nome}</h1>
            <p className="text-gray-700 mt-2">{produto.descricao}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}