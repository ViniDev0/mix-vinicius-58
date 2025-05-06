
import React from 'react';
import ProductCard from './ProductCard';
import { products } from '@/data/products';

const FeaturedProducts = () => {
  // Take only the first 4 products for featured section
  const featuredProducts = products.slice(0, 4);
  
  return (
    <section className="py-16 bg-lumenhaus-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Produtos em Destaque
          </h2>
          <p className="text-lumenhaus-black/70 max-w-2xl mx-auto">
            Itens cuidadosamente selecionados para transformar seu espaço com elegância e sustentabilidade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              category={product.category}
              isNew={product.isNew}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
