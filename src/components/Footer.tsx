import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <img 
                src="/lovable-uploads/063cf853-a110-4080-8401-5f71622fdccd.png" 
                alt="MixVinicius Logo" 
                className="h-12 w-auto mr-3" 
              />
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Seu mercadinho digital de bairro, unindo praticidade e proximidade.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-mixvinicius-green hover:text-mixvinicius-orange transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-mixvinicius-green hover:text-mixvinicius-orange transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-mixvinicius-green hover:text-mixvinicius-orange transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Produtos</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-mixvinicius-green transition-colors">Frutas e Verduras</a></li>
              <li><a href="#" className="hover:text-mixvinicius-green transition-colors">Mercearia</a></li>
              <li><a href="#" className="hover:text-mixvinicius-green transition-colors">Produtos de Limpeza</a></li>
              <li><a href="#" className="hover:text-mixvinicius-green transition-colors">Congelados</a></li>
              <li><a href="#" className="hover:text-mixvinicius-green transition-colors">Promoções</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Informações</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#" className="hover:text-mixvinicius-green transition-colors">Sobre nós</a></li>
              <li><a href="#" className="hover:text-mixvinicius-green transition-colors">Entregas</a></li>
              <li><a href="#" className="hover:text-mixvinicius-green transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-mixvinicius-green transition-colors">Termos e Condições</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Rua das Hortênsias, 123</li>
              <li>Bairro Jardim, São Paulo/SP</li>
              <li>contato@mixvinicius.com.br</li>
              <li>(11) 99999-9999</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} MixVinicius. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
