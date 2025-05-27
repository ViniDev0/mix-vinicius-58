import React from 'react';
import ProductCard from './ProductCard';
import { products } from '@/data/products';
const FeaturedProducts = () => {
  // Take only the featured products
  const featuredProducts = products.filter(product => product.isFeatured);
  return <section className="py-12 bg-mixvinicius-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-nunito font-bold mb-3 text-mixvinicius-green-dark">PRODUTOS FRESQUINHOS</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Selecionados especialmente para você, entregues com rapidez e qualidade.
          </p>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {featuredProducts.map(product => <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} image={product.image} category={product.category} unit={product.unit} isPromo={product.isPromo} />)}
        </div>
      </div>
    </section>;
};
export default FeaturedProducts;