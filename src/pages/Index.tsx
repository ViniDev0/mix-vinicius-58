
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import FeaturedProducts from '@/components/FeaturedProducts';
import CategoryShowcase from '@/components/CategoryShowcase';
import SustainabilitySection from '@/components/SustainabilitySection';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';
import ChatBubble from '@/components/ChatBubble';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-lumenhaus-white">
      <Navbar />
      <main>
        <HeroBanner />
        <FeaturedProducts />
        <CategoryShowcase />
        <SustainabilitySection />
        <Newsletter />
      </main>
      <Footer />
      <ChatBubble />
    </div>
  );
};

export default Index;
