import { Link } from 'react-router-dom';
// src/components/ProductCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import p1 from '../assets/bolo-chocolate2.jpeg';
import p2 from '../assets/torta-maca.jpeg';
import p3 from '../assets/caramelo.jpeg';
import p4 from '../assets/cheasecake.jpeg';


const products = [
  { id: 1, name: 'bolo-chocolate', src: p1, alt: 'Produto 2' },
  { id: 2, name: 'torta-maca',src: p2, alt: 'Produto 2' },
  { id: 3, name: 'caramelo',src: p3, alt: 'Produto 3' },
  { id: 4, name: 'cheesecake',src: p4, alt: 'Produto 4' },
];

export default function ProductCarousel() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4">
      <Swiper
        modules={[Navigation, Autoplay]}
        loop={true}
        centeredSlides={true}
        slidesPerView={1.5} // mostra 1 inteira + 0.25 de cada lado
        spaceBetween={20}
        navigation
        autoplay={{ delay: 3000 }}
        speed={2000}
        breakpoints={{
          640: { slidesPerView: 1.5, spaceBetween: 20 },
          //1024: { slidesPerView: 2.2, spaceBetween: 30 }, // maior espaço em telas grandes
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="overflow-hidden rounded-lg shadow-md">
              <Link to={`/produto/${product.name}`}>  
              <img
                src={product.src}
                alt={product.alt}
                className="w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
              />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
