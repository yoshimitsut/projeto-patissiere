import React from 'react';
import { motion } from 'framer-motion';
import chef1 from '../assets/chef-img.avif';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Chef() {
  return (
    <div className="bg-white bg-opacity-90 p-10 sm:p-16 max-w-4xl w-full mx-auto shadow-2xl rounded-2xl mb-16">
      {/* Título */}
      <motion.h1
        className="text-3xl font-bold text-center text-gray-700 mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
      >
        Chef Yuji Higa
      </motion.h1>

      {/* Tópico 1: Biografia com 2 colunas */}
      <motion.div
        className="grid md:grid-cols-2 gap-12 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        variants={fadeIn}
      >
        <div className="text-gray-800">
          <h2 className="text-xl font-bold mb-2">Biografia</h2>
          <ul className="list-disc pl-5">
            <li>Nascido em 1979, Vila Nakagusuku, Prefeitura de Okinawa</li>
            <li>2000: Formado pela Osaka Abeno Tsuji Pâtisserie College</li>
            <li>2000: Ingressou na Pâtisserie T. YOKOGAWA, trabalhando sob a tutela do Mestre Tetsuya Yokogawa por 15 anos</li>
            <li>2009: Professor visitante na Hagoromo International University</li>
            <li>2015: Professor visitante na Daiku Professional School</li>
            <li>Março de 2016: Abriu a Pâtisserie H. Yuji</li>
          </ul>
        </div>

        <div className="flex items-center justify-center">
          <img
            src={chef1}
            alt="Chef Yuji Higa"
            className="rounded-xl shadow-lg max-h-[400px] object-cover"
          />
        </div>
      </motion.div>

      {/* Tópico 2: Premiações com 1 coluna */}
      <motion.div
        className="grid grid-cols-1 gap-12 mb-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        variants={fadeIn}
      >
        <div className="text-gray-800">
          <h2 className="text-xl font-bold mb-2">Premiações</h2>
          <ul className="list-disc pl-5">
            <li>2001: Concurso de Natal de Osaka - Prêmio de Excelência</li>
            <li>2008: Japan Cake Show Tokyo - Prêmio de Técnica</li>
            <li>2009: Luxardo Grand Premio - 3º lugar</li>
            <li>2010: World Chocolate Masters Qualificação Japonesa Final - 4º lugar</li>
            <li>2011: Japan Cake Show - Top of Pâtissier (Categoria Chocolate) - 1º lugar</li>
            <li>2012: Japan Cake Show - Top of Pâtissier (Qualificação Asiática) - 2º lugar</li>
            <li>1º lugar na categoria Escultura de Açúcar, 2º lugar na categoria Escultura de Chocolate</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
