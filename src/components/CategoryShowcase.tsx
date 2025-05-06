
import React from 'react';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 1,
    name: 'Velas Artesanais',
    image: 'https://images.unsplash.com/photo-1602874205527-0815546e6bac?auto=format&fit=crop&q=80',
    count: 12,
    slug: 'velas'
  },
  {
    id: 2,
    name: 'Luminárias LED',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80',
    count: 8,
    slug: 'luminarias'
  },
  {
    id: 3,
    name: 'Vasos & Cachepots',
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&q=80',
    count: 15,
    slug: 'vasos'
  }
];

const CategoryShowcase = () => {
  return (
    <section className="py-16 bg-lumenhaus-gray/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Nossas Categorias
          </h2>
          <p className="text-lumenhaus-black/70 max-w-2xl mx-auto">
            Explore nossa coleção de produtos organizados por categorias.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={`/categoria/${category.slug}`}>
              <div className="group relative h-72 overflow-hidden rounded-lg shadow-soft">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-lumenhaus-black/70 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl text-white font-medium">{category.name}</h3>
                  <p className="text-white/80">{category.count} produtos</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
