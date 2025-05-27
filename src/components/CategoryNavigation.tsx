import React from 'react';
import { categories } from '@/data/products';
import { ShoppingBag, Apple, Carrot, Package, Leaf } from 'lucide-react';

// Map category names to Lucide icons
const getCategoryIcon = (iconName: string) => {
  switch (iconName) {
    case 'apple':
      return <Apple className="w-5 h-5" />;
    case 'leaf':
      return <Leaf className="w-5 h-5" />;
    case 'carrot':
      return <Carrot className="w-5 h-5" />;
    case 'package':
      return <Package className="w-5 h-5" />;
    default:
      return <ShoppingBag className="w-5 h-5" />;
  }
};
const CategoryNavigation = () => {
  return <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-nunito font-bold mb-6 text-mixvinicius-green-dark text-center">CATEGORIAS</h2>
        
        <div className="grid grid-cols-4 md:grid-cols-8 gap-3">
          {categories.map(category => <a key={category.id} href={`#${category.name.toLowerCase()}`} className="flex flex-col items-center p-3 rounded-lg transition-all hover:bg-mixvinicius-green hover:bg-opacity-10">
              <div className="w-12 h-12 flex items-center justify-center bg-mixvinicius-green bg-opacity-10 rounded-full mb-2 text-mixvinicius-green">
                {getCategoryIcon(category.icon)}
              </div>
              <span className="text-xs md:text-sm font-medium text-center">{category.name}</span>
            </a>)}
        </div>
      </div>
    </section>;
};
export default CategoryNavigation;