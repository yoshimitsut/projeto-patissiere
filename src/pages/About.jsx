import React from 'react';
import { motion } from 'framer-motion';
import bgImage from '../assets/about-background.webp';
import about1 from '../assets/about1.avif';
import about2 from '../assets/about2.avif';
import about3 from '../assets/about3.avif';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function About() {
  return (
    <div
      className="w-full bg-no-repeat bg-top flex flex-col items-center"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'top',
        margin: '-23px 0 0 0'
      }}
    >
      <div className="bg-white bg-opacity-90 p-10 sm:p-16 max-w-4xl w-full mx-auto shadow-2xl rounded-2xl mb-16">
        <motion.h1
          className="text-3xl font-bold text-center text-gray-700 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={fadeIn}
        >
          A Essência da Pâtisserie H.Yuji
        </motion.h1>

        {/* Tópico 1 */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          variants={fadeIn}
        >
          <div className="text-gray-800">
            <h2 className="text-xl font-bold mb-2">Doces</h2>
            <p>
              Entre as frutas selecionadas e os diversos ingredientes,
              combinamos os produtos e expressamos os cinco sabores com nossa própria sensibilidade.
              Mesmo usando os mesmos ingredientes, é difícil fazer exatamente o mesmo doce.
              No entanto, como profissionais, enfrentamos esses desafios diariamente,
              nos dedicando e aprimorando constantemente os sabores.
            </p>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={about1}
              alt="Doces"
              className="rounded-xl shadow-lg max-h-[400px] object-cover"
            />
          </div>
        </motion.div>

        {/* Tópico 2 */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          variants={fadeIn}
        >
          <div className="flex items-center justify-center order-2 md:order-1">
            <img
              src={about2}
              alt="Compromisso com ingredientes"
              className="rounded-xl shadow-lg max-h-[400px] object-cover"
            />
          </div>
          <div className="text-gray-800 order-1 md:order-2">
            <h2 className="text-xl font-bold mb-2">Nosso Compromisso com os Ingredientes</h2>
            <p>
              Acreditamos que a base de um doce memorável começa na seleção cuidadosa dos ingredientes.
              Provamos cada matéria-prima inúmeras vezes, imaginando sabores, texturas e combinações.
              Transformamos essas ideias em criações reais, refinando cada detalhe a cada tentativa.
              <br /><br />
              Mesmo os melhores ingredientes precisam de mãos e corações atentos para revelar todo o seu potencial.
              Por isso, valorizamos profundamente não apenas o que usamos, mas como usamos.
              <br /><br />
              Nosso processo começa muito antes do doce chegar à vitrine,
              começa no respeito por quem produz, na escolha consciente de cada insumo
              e no desejo sincero de proporcionar uma experiência única a quem saboreia.
              <br /><br />
              Carregamos conosco os valores dos produtores, a dedicação da nossa equipe e o compromisso de emocionar.
              Mais do que doces: entregamos histórias feitas com a alma.
            </p>
          </div>
        </motion.div>

        {/* Tópico 3 */}
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          variants={fadeIn}
        >
          <div className="text-gray-800">
            <h2 className="text-xl font-bold mb-2">Os Cinco Ingredientes Principais do Nosso Pâtissier</h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Leite:</strong> textura cremosa e sabor equilibrado.
              </li>
              <li>
                <strong>Trigo:</strong> nacional ou importado, conforme o doce.
              </li>
              <li>
                <strong>Açúcar:</strong> de cana de Okinawa, mais sabor e umidade.
              </li>
              <li>
                <strong>Ovos:</strong> locais, para leveza e um rico sabor.
              </li>
              <li>
                <strong>Chocolate:</strong> importado, com destaque ao belga.
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center">
            <img
              src={about3}
              alt="Ingredientes"
              className="rounded-xl shadow-lg max-h-[400px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}
