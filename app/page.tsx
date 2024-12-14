import { ProductGrid } from '@/components/product-grid';
import { ProductFilters } from '@/components/product-filters';

export default function Home() {
  return (
    <div className="container py-8">
      <h1 className="text-4xl font-bold mb-8">Featured Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <aside className="md:col-span-1">
          <ProductFilters />
        </aside>
        <div className="md:col-span-3">
          <ProductGrid />
        </div>
      </div>
    </div>
  );
}