'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCart } from './cart-provider';
import { Button } from './ui/button';
import { Card, CardContent, CardFooter } from './ui/card';
import { Plus } from 'lucide-react';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    image: string;
    description: string;
  };
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          <div className="relative aspect-square">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform hover:scale-105"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold">{product.name}</h3>
            <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
              {product.description}
            </p>
            <p className="mt-2 font-bold">${product.price.toFixed(2)}</p>
          </div>
        </CardContent>
        <CardFooter className="p-4">
          <Button
            onClick={() => addItem(product)}
            className="w-full"
          >
            Add to Cart <Plus className="ml-2 h-4 w-4" />
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}