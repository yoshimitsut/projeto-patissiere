import boloImgCapa from '../assets/bolo-capa.jpeg';
import boloChocolate from '../assets/bolo-chocolate.jpeg';
import boloMorango from '../assets/bolo-morango.jpeg';

// // import doces from '../assets/doces-pessego.jpeg';

import macaronImgCapa from '../assets/macaron-capa.jpeg';
import macaronAmarelo from '../assets/macaron-amarelo.jpeg';
import macaronVermelho from '../assets/macaron-vermelho.jpeg';

export const categories = [
  {
    name: 'Bolos',
    slug: 'bolos',
    image: boloImgCapa,
    products: [
      {
        name: 'Bolo de Chocolate',
        slug: 'bolo-de-chocolate',
        image: boloChocolate,
        description: 'Delicioso bolo de chocolate com cobertura cremosa e recheio macio.'
      },
      {
        name: 'Bolo de Morango',
        slug: 'bolo-de-morango',
        image: boloMorango,
        description: 'Delicioso bolo de morango com cobertura cremosa e recheio macio.'
      }  
    ],
  },
  {
    name: 'Macarons',
    slug: 'macarons',
    image: macaronImgCapa,
    products: [
      { 
        name: 'Macaron de Framboesa', 
        slug: 'macaron-framboesa', 
        image: macaronVermelho,
        description: 'Delicioso macaron de framboesa.' 
      },
      { name: 'Macaron de Pistache', 
        slug: 'macaron-pistache', 
        image: macaronAmarelo,
        description: 'Delicioso macaron de pistache.' 
      },
    ],
  },
];
