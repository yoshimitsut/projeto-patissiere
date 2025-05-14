import React from 'react';
import ProductCarousel from '../components/ProductCarousel';
import ProductGrid from '../components/ProductGrid';
// import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';

export default function Home() {
  return (
    <div>
      <ProductCarousel />
      <ProductGrid />
    </div>
  );
}