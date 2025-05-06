
import React from 'react';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  unit: string;
  isPromo?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  name,
  price,
  image,
  category,
  unit,
  isPromo = false,
}) => {
  const handleAddToCart = () => {
    console.log(`Added product ${id} to cart`);
    // Future implementation: Add to cart functionality
  };

  return (
    <div className="product-card flex flex-col h-full">
      <div className="relative">
        <img 
          src={image} 
          alt={name}
          className="w-full h-48 object-cover"
        />
        {isPromo && (
          <div className="absolute top-2 right-2 bg-mixvinicius-orange text-white text-xs font-montserrat py-1 px-2 rounded-full">
            OFERTA
          </div>
        )}
        <div className="absolute bottom-0 left-0 bg-mixvinicius-green text-white text-xs font-semibold py-1 px-3 rounded-tr-lg">
          {category}
        </div>
      </div>
      
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-semibold mb-1 text-mixvinicius-green-dark">{name}</h3>
        <div className="text-gray-600 text-sm mb-2">{unit}</div>
        <div className="mt-auto flex justify-between items-center">
          <div className="price text-xl">
            R$ {price.toFixed(2)}
          </div>
          <Button 
            onClick={handleAddToCart}
            variant="outline"
            size="sm"
            className={cn(
              "border-mixvinicius-green text-mixvinicius-green hover:bg-mixvinicius-green hover:text-white"
            )}
          >
            <PlusCircle className="mr-1 h-4 w-4" />
            Adicionar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
