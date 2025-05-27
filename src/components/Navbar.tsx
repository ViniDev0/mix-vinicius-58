
import React, { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/eff02627-dbd8-449f-b7ae-86b8a97f2d72.png" 
              alt="MixVinicius Logo" 
              className="h-12 w-auto mr-2"
            />
          </div>

          {/* Search Bar - Hidden on Mobile */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Buscar produtos..."
                className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-mixvinicius-green"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-mixvinicius-green">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-gray-700 hover:text-mixvinicius-green flex items-center">
              <User className="h-5 w-5 mr-1" />
              <span>Entrar</span>
            </a>
            <a href="#" className="flex items-center text-gray-700 hover:text-mixvinicius-green relative">
              <ShoppingCart className="h-5 w-5 mr-1" />
              <span>Carrinho</span>
              <span className="absolute -top-2 -right-2 bg-mixvinicius-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </a>
          </nav>

          {/* Mobile Nav Trigger */}
          <div className="flex items-center md:hidden">
            <a href="#" className="mr-4 text-gray-700 relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-mixvinicius-orange text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </a>
            <button
              onClick={toggleMenu}
              className="text-gray-700"
              aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Search Bar on Mobile */}
        <div className="pb-3 pt-1 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar produtos..."
              className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-mixvinicius-green text-sm"
            />
            <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-3 animate-fade-in">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100">
                <User className="h-5 w-5 mr-3 text-mixvinicius-green" />
                <span>Minha Conta</span>
              </a>
              <a href="#" className="flex items-center py-2 px-3 rounded-lg hover:bg-gray-100">
                <ShoppingCart className="h-5 w-5 mr-3 text-mixvinicius-green" />
                <span>Meu Carrinho</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
