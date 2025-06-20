import React from 'react';
import { motion } from 'framer-motion';
import accessImg1 from '../assets/access.avif'

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function Access() {
  return (
    <div className="bg-white bg-opacity-90 p-10 sm:p-16 max-w-4xl w-full mx-auto shadow-2xl rounded-2xl mb-16">
      <motion.h1
        className="text-3xl font-bold text-center text-gray-700 mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        variants={fadeIn}
      >
        - Informações -
      </motion.h1>
      <motion.div
              className="grid md:grid-cols-2 gap-12 mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              variants={fadeIn}
            >
              <div className="text-gray-800">
                <h2 className="text-xl font-bold mb-2">- Nossa Loja -</h2>
                <ul className="list-disc pl-5">
                  <li>Endereço:</li>
                  <li>〒901-2227 Rua Uchidomari, Cidade de Ginowan, Província de Okinawa, número 2-10-40</li>
                  <li>TEL: 098-917-2011</li>
                  <li>Horário de funcionamento: 10:00～19:00</li>
                  <li>Não abrimos nas Segundas-feiras </li>
                  
                </ul>
              </div>
      
              <div className="flex items-center justify-center">
                <img
                  src={accessImg1}
                  alt="Access Image"
                  className="rounded-xl shadow-lg max-h-[400px] object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              className="grid md:grid-cols-2 gap-12 mb-16"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              variants={fadeIn}
            >
            
            <div className="text-gray-800">
                <h2 className="text-xl font-bold mb-2">- Acesso -</h2>
                <ul className="list-disc pl-5">
                  <li>2 minutos a pé do ponto de ônibus (Ojana)</li>
                  <li>Temos estacionamento para 6 carros.</li>
                </ul>
              </div>
        {/* Mapa do Google */}
        <div className="w-full h-96 mb-8">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.73780328877!2d127.72900807541752!3d26.270171777036023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x34e56c98f8382eab%3A0x5efa3ac8f05693fd!2zUMOidGlzc2VyaWUgSC5ZdWppKOODkeODhuOCo-OCueODquODvOOCouODg-OCt-ODpeODpuOCpuOCuCk!5e0!3m2!1sja!2sjp!4v1725976818263!5m2!1sja!2sjp"
            width="300px" 
            height="300px" 
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </motion.div>
    </div>
  );
}
