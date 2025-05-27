
import React from 'react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { ShoppingCart, Plus, Minus, Trash2 } from 'lucide-react';

interface CartModalProps {
  children: React.ReactNode;
}

const CartModal = ({ children }: CartModalProps) => {
  // Dados fictícios do carrinho para demonstração
  const cartItems = [
    {
      id: 1,
      name: 'Tomate Orgânico',
      price: 8.99,
      quantity: 2,
      unit: 'kg',
      image: '/lovable-uploads/063cf853-a110-4080-8401-5f71622fdccd.png'
    },
    {
      id: 2,
      name: 'Banana Prata',
      price: 4.50,
      quantity: 1,
      unit: 'kg',
      image: '/lovable-uploads/063cf853-a110-4080-8401-5f71622fdccd.png'
    },
    {
      id: 3,
      name: 'Leite Integral',
      price: 5.99,
      quantity: 3,
      unit: 'un',
      image: '/lovable-uploads/063cf853-a110-4080-8401-5f71622fdccd.png'
    }
  ];

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <Sheet>
      <SheetTrigger asChild>
        {children}
      </SheetTrigger>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="text-mixvinicius-green flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            Meu Carrinho
          </SheetTitle>
        </SheetHeader>
        
        <div className="flex flex-col h-full">
          <div className="flex-1 overflow-y-auto py-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-8">
                <ShoppingCart className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500">Seu carrinho está vazio</p>
              </div>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex items-center gap-3 p-3 border rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium text-sm">{item.name}</h4>
                      <p className="text-mixvinicius-green font-bold">
                        R$ {item.price.toFixed(2)} / {item.unit}
                      </p>
                      <div className="flex items-center gap-2 mt-2">
                        <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium">{item.quantity}</span>
                        <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center">
                          <Plus className="h-3 w-3" />
                        </button>
                        <button className="ml-auto text-red-500">
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          {cartItems.length > 0 && (
            <div className="border-t pt-4 space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-xl font-bold text-mixvinicius-green">
                  R$ {total.toFixed(2)}
                </span>
              </div>
              <Button className="w-full bg-mixvinicius-green hover:bg-mixvinicius-green-dark">
                Finalizar Compra
              </Button>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CartModal;
