
import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  isNew?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  id, 
  name, 
  price, 
  image, 
  category,
  isNew = false 
}) => {
  return (
    <div className="product-card group">
      <div className="relative overflow-hidden">
        {isNew && (
          <span className="absolute top-3 right-3 bg-lumenhaus-green text-white text-xs px-2 py-1 rounded-full z-10">
            Novo
          </span>
        )}
        <Link to={`/produto/${id}`}>
          <div className="h-64 overflow-hidden">
            <img 
              src={image} 
              alt={name} 
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </Link>
        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Button 
            className="w-full bg-lumenhaus-white text-lumenhaus-black hover:bg-lumenhaus-white/90 flex items-center justify-center gap-2"
          >
            <ShoppingCart size={16} />
            Adicionar ao Carrinho
          </Button>
        </div>
      </div>
      <div className="p-4">
        <span className="text-xs text-lumenhaus-green uppercase tracking-wider">{category}</span>
        <Link to={`/produto/${id}`}>
          <h3 className="font-medium mt-1 mb-2 hover:text-lumenhaus-green transition-colors">
            {name}
          </h3>
        </Link>
        <p className="font-semibold">R$ {price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
