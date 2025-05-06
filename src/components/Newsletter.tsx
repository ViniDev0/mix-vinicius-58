
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Email inválido",
        description: "Por favor, insira um endereço de email válido.",
        variant: "destructive"
      });
      return;
    }
    
    // Success message
    toast({
      title: "Inscrição realizada!",
      description: "Você foi inscrito com sucesso em nossa newsletter.",
    });
    
    setEmail('');
  };
  
  return (
    <section className="py-16 bg-lumenhaus-green/10">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-playfair font-bold mb-3">
            Receba nossa newsletter
          </h2>
          <p className="text-lumenhaus-black/70 mb-8">
            Inscreva-se para receber nossas novidades, inspirações de decoração e ofertas exclusivas.
          </p>
          
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Seu endereço de email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-full border-lumenhaus-gray focus:border-lumenhaus-green"
              required
            />
            <Button 
              type="submit" 
              className="bg-lumenhaus-green hover:bg-lumenhaus-green/90 text-white rounded-full px-8 py-3"
            >
              Inscrever-se
            </Button>
          </form>
          <p className="text-sm text-lumenhaus-black/60 mt-4">
            Respeitamos sua privacidade. Você pode cancelar sua inscrição a qualquer momento.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
