import { useState } from 'react';
import { motorcycles } from '@/data/motorcycles';
import MotorcycleCard from '@/components/MotorcycleCard';
import Filters from '@/components/Filters';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Catalog = () => {
  const [filters, setFilters] = useState({
    category: 'all',
    type: 'all',
    priceRange: [0, 30000] as [number, number],
    brand: 'all',
  });

  const handleFilterChange = (key: string, value: any) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({
      category: 'all',
      type: 'all',
      priceRange: [0, 30000],
      brand: 'all',
    });
  };

  const filteredMotorcycles = motorcycles.filter((moto) => {
    if (filters.category !== 'all' && moto.category !== filters.category) return false;
    if (filters.brand !== 'all' && moto.brand !== filters.brand) return false;
    if (moto.price < filters.priceRange[0] || moto.price > filters.priceRange[1]) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="container px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
          <aside className="lg:sticky lg:top-24 h-fit">
            <Filters
              filters={filters}
              onFilterChange={handleFilterChange}
              onReset={handleResetFilters}
            />
          </aside>

          <main>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredMotorcycles.slice(0, 16).map((motorcycle) => (
                <MotorcycleCard key={motorcycle.id} motorcycle={motorcycle} />
              ))}
            </div>

            {filteredMotorcycles.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">Мотоциклов не найдено</p>
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Catalog;
