import React from 'react';
import ProductCarousel from '../components/ProductCarousel';
import ProductGrid from '../components/ProductGrid';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div>
      <ProductCarousel />
      <ProductGrid />
      <Hero />
    </div>
  );
}