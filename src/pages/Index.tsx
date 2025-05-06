
import React from 'react';
import Navbar from '@/components/Navbar';
import PromoBanner from '@/components/PromoBanner';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoryNavigation from '@/components/CategoryNavigation';
import Footer from '@/components/Footer';
import ChatBubble from '@/components/ChatBubble';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-mixvinicius-gray">
      <Navbar />
      <main>
        <PromoBanner />
        <CategoryNavigation />
        <FeaturedProducts />
      </main>
      <Footer />
      <ChatBubble />
    </div>
  );
};

export default Index;
