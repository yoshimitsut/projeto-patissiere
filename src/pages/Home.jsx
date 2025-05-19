import React from 'react';
import ProductCarousel from '../components/ProductCarousel';
import ProductGrid from '../components/ProductGrid';
// import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import PageWrapper from '../components/PageWrapper';

export default function Home() {
  return (
    <PageWrapper>
      <div>
        <ProductCarousel />
        <ProductGrid />
      </div>
    </PageWrapper>
  );
}