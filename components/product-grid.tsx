'use client';

import { useState } from 'react';
import { ProductCard } from './product-card';

// Mock data - replace with actual API call
const products = [
  {
    id: '1',
    name: 'Modern Desk Lamp',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c',
    description: 'Elegant desk lamp with adjustable brightness and modern design.',
  },
  {
    id: '2',
    name: 'Minimalist Watch',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30',
    description: 'Classic minimalist watch with leather strap.',
  },
  // Add more products...
];

export function ProductGrid() {
  const [filteredProducts] = useState(products);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}