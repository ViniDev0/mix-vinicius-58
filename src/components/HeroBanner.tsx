
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden bg-[url('https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80')] bg-cover bg-center h-[60vh] md:h-[80vh]">
      <div className="absolute inset-0 bg-lumenhaus-black bg-opacity-25"></div>
      <div className="relative container mx-auto h-full flex flex-col justify-center px-4">
        <div className="max-w-lg">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-4">
            Iluminando espaços com estilo sustentável
          </h1>
          <p className="text-white text-lg mb-8 font-inter">
            Decoração minimalista e sustentável para trazer mais conforto e consciência ao seu lar.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="lumen-btn bg-lumenhaus-green hover:bg-lumenhaus-green/90">
              <Link to="/produtos">Explorar Coleção</Link>
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white hover:bg-opacity-20">
              <Link to="/sobre">Conheça Nossa História</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
