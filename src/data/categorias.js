import boloImgCapa from '../assets/bolo-capa.avif';
import boloMorango from '../assets/bolo-morango.avif';
import boloFrutas from '../assets/bolo-frutas.avif';
import boloCheasecake from '../assets/bolo-cheasecake.avif';
// import boloCheasecake2 from '../assets/bolo-cheasecake2.avif';
import boloChocolateMorango from '../assets/bolo-chocolate-morango.avif';
import boloProfiterole from '../assets/bolo-profiterole.avif';
// import boloProfiterole2 from '../assets/bolo-profiterole2.avif';

import petitgateauImgCapa from '../assets/petitgateau-capa.avif';
import tortaDePessego from '../assets/pet-torta-pessego.avif';

import macaronImgCapa from '../assets/macaron-capa.avif';
import macaronAmarelo from '../assets/macaron-amarelo.avif';
import macaronVermelho from '../assets/macaron-vermelho.avif';

import doceAssadoImgCapa from '../assets/assado-capa.avif';

import hanNamaGashiCapaImgCapa from '../assets/han-nama-gashi-capa.avif';

export const categories = [
  {
    name: 'Bolos',
    slug: 'bolos',
    image: boloImgCapa,
    products: [
      {
        name: 'Bolo de Chocolate',
        slug: 'bolo-de-chocolate',
        image: boloMorango,
        description: 'Delicioso bolo de chocolate com cobertura cremosa e recheio macio.'
      },
      {
        name: 'Bolo de Fruta',
        slug: 'bolo-de-morango',
        image: boloFrutas,
        description: 'Delicioso bolo de morango com cobertura cremosa e recheio macio.'
      },
      {
        name: 'Bolo de Morango',
        slug: 'bolo-de-morango',
        image: boloCheasecake,
        description: 'Delicioso bolo de morango com cobertura cremosa e recheio macio.'
      },
      {
        name: 'Bolo de Morango',
        slug: 'bolo-de-morango',
        image: boloChocolateMorango,
        description: 'Delicioso bolo de morango com cobertura cremosa e recheio macio.'
      },
      {
        name: 'Bolo de Morango',
        slug: 'bolo-de-morango',
        image: boloProfiterole,
        description: 'Delicioso bolo de morango com cobertura cremosa e recheio macio.'
      },
       
    ],
  },
// import boloCheasecake2 from '../assets/bolo-cheasecake2.avif';
// import boloProfiterole2 from '../assets/bolo-profiterole2.avif';
  {
    name: 'Petit gâteau',
    slug: 'petitgateau',
    image: petitgateauImgCapa,
    products: [
      { 
        name: 'Torta de Pêssego', 
        slug: 'torta-de-pessego', 
        image: tortaDePessego,
        description: 'Delicioso macaron de framboesa.' 
      },
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
  {
    name: 'Doces Assado',
    slug: 'Doces assado',
    image: doceAssadoImgCapa,
    products: [
      { 
        name: 'teste', 
        slug: '', 
        image: '',
        description: '' 
      },
    ],
  },
  {
    name: 'Han Nama Gashi',
    slug: 'hanNamaGashi',
    image: hanNamaGashiCapaImgCapa,
    products: [
      { 
        name: 'teste', 
        slug: '', 
        image: '',
        description: '' 
      },
    ],
  },
];
