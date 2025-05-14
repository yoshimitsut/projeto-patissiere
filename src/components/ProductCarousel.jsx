import { Link } from 'react-router-dom';
// src/components/ProductCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';


import { motion } from 'framer-motion';

import p1 from '../assets/プ2-ムースショコラキャフェ.avif';
import p2 from '../assets/プ5-キャラメルミルフィーユ.avif';
import p3 from '../assets/プ15-ゴーパチ５８ロール.avif';
import p4 from '../assets/プ19-生チョコロール.avif';


const products = [
  { id: 1, name: 'petitgateau/petitMousseCafe', src: p1, alt: 'ムースショコラキャフェ' },
  { id: 2, name: 'petitgateau/petitCaramelMillefeuille',src: p2, alt: 'キャラメルミルフィーユ 2' },
  { id: 3, name: 'petitgateau/petit58roll',src: p3, alt: 'ゴーパチ５８ロール' },
  { id: 4, name: 'petitgateau/petitRawChocolateRoll',src: p4, alt: '生チョコロール' },
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
          0: { slidesPerView: 1, spaceBetween: 20},
          640: { slidesPerView: 1.25, spaceBetween: 20},
          1024: { slidesPerView: 1.5, spaceBetween: 30 }, // maior espaço em telas grandes
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="overflow-hidden rounded-lg shadow-md">
              <Link to={`/product/${product.name}`}>  
              <img
                src={product.src}
                alt={product.alt}
                className="w-full h-130 object-cover transition-transform duration-300 hover:scale-105"
              />
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
