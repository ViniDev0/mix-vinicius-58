
import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-lumenhaus-black text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div>
            <h2 className="font-playfair text-2xl font-bold mb-4">
              Lumen<span className="text-lumenhaus-green">Haus</span>
            </h2>
            <p className="text-gray-300 mb-6">
              Decoração minimalista e sustentável para transformar seu espaço em um ambiente acolhedor e consciente.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-lumenhaus-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white hover:text-lumenhaus-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-lumenhaus-green transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h3 className="text-lg font-medium mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-lumenhaus-green transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/produtos" className="text-gray-300 hover:text-lumenhaus-green transition-colors">
                  Produtos
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-lumenhaus-green transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-300 hover:text-lumenhaus-green transition-colors">
                  Contato
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-lumenhaus-green transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="text-lg font-medium mb-4">Categorias</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/categoria/velas" className="text-gray-300 hover:text-lumenhaus-green transition-colors">
                  Velas Artesanais
                </Link>
              </li>
              <li>
                <Link to="/categoria/luminarias" className="text-gray-300 hover:text-lumenhaus-green transition-colors">
                  Luminárias LED
                </Link>
              </li>
              <li>
                <Link to="/categoria/vasos" className="text-gray-300 hover:text-lumenhaus-green transition-colors">
                  Vasos & Cachepots
                </Link>
              </li>
              <li>
                <Link to="/categoria/objetos" className="text-gray-300 hover:text-lumenhaus-green transition-colors">
                  Objetos Decorativos
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-lg font-medium mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail size={18} className="mr-2 mt-1 text-lumenhaus-green" />
                <span className="text-gray-300">contato@lumenhaus.com</span>
              </li>
              <li className="flex items-start">
                <Phone size={18} className="mr-2 mt-1 text-lumenhaus-green" />
                <span className="text-gray-300">(11) 1234-5678</span>
              </li>
              <li className="text-gray-300 mt-4">
                São Paulo, SP - Brasil
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} LumenHaus. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
