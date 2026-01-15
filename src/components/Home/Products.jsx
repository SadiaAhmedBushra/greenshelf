'use client';

import React from 'react';
import ProductCard from '@/components/Cards/ProductCard';

const Products = () => {
  return (
    <main className="bg-base-100 min-h-screen overflow-x-hidden">
      <section className="max-w-7xl mx-auto px-4 py-20">

        {/* Page Header */}
        <div className="text-center mb-14">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Sustainable Products
          </h1>
          <p className="text-neutral/80 max-w-xl mx-auto">
            Explore our curated collection of eco-friendly products designed
            to reduce waste and promote a greener lifestyle.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>

      </section>
    </main>
  );
};

export default Products;
