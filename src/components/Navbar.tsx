
import React, { useState } from 'react';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-lumenhaus-white shadow-subtle">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-playfair font-bold text-lumenhaus-black">
              Lumen<span className="text-lumenhaus-green">Haus</span>
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link to="/" className="text-lumenhaus-black hover:text-lumenhaus-green transition-colors">
              Home
            </Link>
            <Link to="/produtos" className="text-lumenhaus-black hover:text-lumenhaus-green transition-colors">
              Produtos
            </Link>
            <Link to="/colecoes" className="text-lumenhaus-black hover:text-lumenhaus-green transition-colors">
              Coleções
            </Link>
            <Link to="/sobre" className="text-lumenhaus-black hover:text-lumenhaus-green transition-colors">
              Sobre
            </Link>
            <Link to="/contato" className="text-lumenhaus-black hover:text-lumenhaus-green transition-colors">
              Contato
            </Link>
          </nav>

          {/* Desktop Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button 
              onClick={() => setShowSearch(!showSearch)} 
              className="p-2 hover:bg-lumenhaus-gray hover:bg-opacity-20 rounded-full transition-colors"
            >
              <Search size={20} className="text-lumenhaus-black" />
            </button>
            <Link to="/login" className="p-2 hover:bg-lumenhaus-gray hover:bg-opacity-20 rounded-full transition-colors">
              <User size={20} className="text-lumenhaus-black" />
            </Link>
            <Link to="/carrinho" className="p-2 hover:bg-lumenhaus-gray hover:bg-opacity-20 rounded-full transition-colors">
              <ShoppingCart size={20} className="text-lumenhaus-black" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-3 md:hidden">
            <Link to="/carrinho" className="p-2">
              <ShoppingCart size={20} className="text-lumenhaus-black" />
            </Link>
            <button 
              onClick={() => setShowMobileMenu(!showMobileMenu)}
              className="p-2"
            >
              <Menu size={24} className="text-lumenhaus-black" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        {showSearch && (
          <div className="py-4 animate-fade-in">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lumenhaus-black opacity-70" size={18} />
              <Input 
                placeholder="Buscar produtos..." 
                className="w-full pl-10 py-2 rounded-full border-lumenhaus-gray focus:border-lumenhaus-green"
                autoFocus
              />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden pt-4 pb-3 border-t border-lumenhaus-gray animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="py-2 px-4 hover:bg-lumenhaus-gray hover:bg-opacity-20 rounded-md">
                Home
              </Link>
              <Link to="/produtos" className="py-2 px-4 hover:bg-lumenhaus-gray hover:bg-opacity-20 rounded-md">
                Produtos
              </Link>
              <Link to="/colecoes" className="py-2 px-4 hover:bg-lumenhaus-gray hover:bg-opacity-20 rounded-md">
                Coleções
              </Link>
              <Link to="/sobre" className="py-2 px-4 hover:bg-lumenhaus-gray hover:bg-opacity-20 rounded-md">
                Sobre
              </Link>
              <Link to="/contato" className="py-2 px-4 hover:bg-lumenhaus-gray hover:bg-opacity-20 rounded-md">
                Contato
              </Link>
              <Link to="/login" className="py-2 px-4 hover:bg-lumenhaus-gray hover:bg-opacity-20 rounded-md flex items-center">
                <User size={18} className="mr-2" />
                Login / Cadastro
              </Link>
              <div className="pt-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-lumenhaus-black opacity-70" size={18} />
                  <Input 
                    placeholder="Buscar produtos..." 
                    className="w-full pl-10 py-2 rounded-full border-lumenhaus-gray focus:border-lumenhaus-green"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
