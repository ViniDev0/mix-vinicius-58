import React from 'react';
import { ArrowRight } from 'lucide-react';
const PromoBanner = () => {
  return <section className="bg-white py-6">
      <div className="container mx-auto px-4">
        <div className="bg-gradient-to-r from-mixvinicius-green to-mixvinicius-green-dark rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-8 md:p-10">
              <h2 className="text-white text-2xl md:text-3xl font-bold font-nunito mb-4">Entregas rápidas para todos os bairros!</h2>
              <p className="text-white text-opacity-90 mb-6">
                Receba suas compras em até 45 minutos ou no mesmo dia para pedidos maiores.
              </p>
              <button className="bg-mixvinicius-orange text-white py-3 px-6 rounded-lg font-medium flex items-center hover:bg-opacity-90 transition-all">
                Saiba mais
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
            <div className="md:w-1/2 p-6">
              <img src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80" alt="Frutas e vegetais frescos" className="rounded-lg w-full h-56 md:h-64 object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default PromoBanner;