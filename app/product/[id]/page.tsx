'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCart } from '@/components/cart-provider';
import { Button } from '@/components/ui/button';
import { SimilarProducts } from '@/components/similar-products';
import { Star, Plus, Minus, ShoppingCart } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ProductRating } from '@/components/product-rating';

// Mock data - replace with actual API call
const getProduct = (id: string) => ({
  id,
  name: 'Modern Desk Lamp',
  price: 89.99,
  image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c',
  description: 'Elegant desk lamp with adjustable brightness and modern design perfect for any workspace.',
  category: 'Lighting',
  rating: 4.5,
  reviews: 128,
  stock: 15,
  features: [
    'Adjustable brightness levels',
    'Touch-sensitive controls',
    'Energy efficient LED',
    'Modern minimalist design',
  ],
});

export default function ProductPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState<any>(null);
  const { addItem } = useCart();

  useEffect(() => {
    // Simulate API call
    setProduct(getProduct(params.id));
  }, [params.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container py-8">
      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative aspect-square rounded-lg overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <Badge>{product.category}</Badge>
            <h1 className="text-3xl font-bold mt-2">{product.name}</h1>
            <div className="mt-4">
              <ProductRating rating={product.rating} reviews={product.reviews} />
            </div>
          </div>

          <p className="text-2xl font-bold">${product.price.toFixed(2)}</p>

          <p className="text-muted-foreground">{product.description}</p>

          <div className="space-y-4">
            <h3 className="font-semibold">Key Features</h3>
            <ul className="list-disc list-inside space-y-2">
              {product.features.map((feature: string) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-8 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                {product.stock} units available
              </p>
            </div>

            <Button
              size="lg"
              className="w-full"
              onClick={() => {
                addItem({ ...product, quantity });
                setQuantity(1);
              }}
            >
              Add to Cart
              <ShoppingCart className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </motion.div>
      </div>

      <Separator className="my-12" />

      <SimilarProducts currentProductId={params.id} />
    </div>
  );
}