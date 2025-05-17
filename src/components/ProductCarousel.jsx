import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

import p1 from '../assets/プ2-ムースショコラキャフェ.avif';
import p2 from '../assets/プ5-キャラメルミルフィーユ.avif';
import p3 from '../assets/プ15-ゴーパチ５８ロール.avif';
import p4 from '../assets/プ19-生チョコロール.avif';

const products = [
  { id: 1, name: 'petitgateau/petitMousseCafe', src: p1, alt: 'ムースショコラキャフェ' },
  { id: 2, name: 'petitgateau/petitCaramelMillefeuille', src: p2, alt: 'キャラメルミルフィーユ 2' },
  { id: 3, name: 'petitgateau/petit58roll', src: p3, alt: 'ゴーパチ５８ロール' },
  { id: 4, name: 'petitgateau/petitRawChocolateRoll', src: p4, alt: '生チョコロール' },
];

export default function ProductCarousel() {
  return (
    <div className="w-full max-w-5xl mx-auto px-4 pb-20 relative">
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        loop={true}
        centeredSlides={true}
        slidesPerView={1.5}
        spaceBetween={20}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        speed={2000}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          640: { slidesPerView: 1.25, spaceBetween: 20 },
          1024: { slidesPerView: 1.5, spaceBetween: 30 },
        }}
        className="relative"
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

       {/* Estilo customizado da paginação */}
      <style>{`
        .swiper-pagination {
          bottom: 30px !important;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 8px;
          background: rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(6px);
          border-radius: 9999px;
          width: 150px !important;
          padding: 6px 12px;
          margin: 0 auto;
          left: 0;
          right: 0;
          position: absolute;
        }
        .swiper-pagination-bullet {
          background: #aaa;
          opacity: 0.7;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #000;
          opacity: 1;
        }
      `}</style>
    </div>
  );
}
