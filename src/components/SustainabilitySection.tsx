
import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const SustainabilitySection = () => {
  return (
    <section className="py-16 bg-lumenhaus-brown/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-10 items-center">
          <div className="md:w-1/2">
            <img 
              src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80" 
              alt="Sustentabilidade" 
              className="rounded-lg shadow-soft w-full h-auto"
            />
          </div>
          <div className="md:w-1/2">
            <span className="text-lumenhaus-green uppercase tracking-wider text-sm font-medium">
              Nossa Filosofia
            </span>
            <h2 className="text-3xl md:text-4xl font-playfair font-bold mt-2 mb-6">
              Compromisso com a <br/>Sustentabilidade
            </h2>
            <p className="text-lg mb-4">
              Na LumenHaus, acreditamos que a beleza não precisa comprometer nosso planeta. Cada produto é cuidadosamente criado com materiais sustentáveis e processos eco-friendly.
            </p>
            <p className="mb-8">
              Do design à embalagem, pensamos em cada detalhe para minimizar nosso impacto ambiental enquanto maximizamos a estética e funcionalidade dos nossos produtos.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-lumenhaus-green hover:bg-lumenhaus-green/90">
                <Link to="/sobre">Conheça Nossa História</Link>
              </Button>
              <Button variant="outline" className="border-lumenhaus-green text-lumenhaus-black hover:bg-lumenhaus-green/10">
                <Link to="/materiais">Nossos Materiais</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;
