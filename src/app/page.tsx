import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Products from '../components/Products';
import CTASection from '../components/CTASection';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Products />
      <CTASection />
    </main>
  );
}
