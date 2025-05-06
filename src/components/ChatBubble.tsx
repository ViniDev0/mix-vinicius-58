
import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{text: string, isUser: boolean}[]>([
    {text: 'Olá! Como posso ajudar com sua decoração hoje?', isUser: false}
  ]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add user message
    setMessages([...messages, {text: message, isUser: true}]);
    setMessage('');
    
    // Simulate response after a short delay
    setTimeout(() => {
      setMessages(prev => [
        ...prev, 
        {
          text: 'Obrigado por sua mensagem! Um de nossos consultores de design responderá em breve.',
          isUser: false
        }
      ]);
    }, 1000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      {isOpen && (
        <div className="bg-white rounded-lg shadow-lg w-80 sm:w-96 mb-4 animate-fade-in overflow-hidden">
          <div className="bg-lumenhaus-green p-4 flex justify-between items-center">
            <h3 className="text-white font-medium">Chat com Consultor</h3>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-white hover:text-lumenhaus-white/80"
            >
              <X size={20} />
            </button>
          </div>
          <div className="h-80 overflow-y-auto p-4">
            {messages.map((msg, index) => (
              <div 
                key={index} 
                className={`mb-3 ${msg.isUser ? 'text-right' : 'text-left'}`}
              >
                <div 
                  className={`inline-block rounded-lg px-4 py-2 max-w-[80%] ${
                    msg.isUser 
                      ? 'bg-lumenhaus-green text-white' 
                      : 'bg-lumenhaus-gray/30 text-lumenhaus-black'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="p-3 border-t border-lumenhaus-gray">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Digite sua mensagem..."
                className="flex-1 border border-lumenhaus-gray rounded-full px-4 py-2 focus:outline-none focus:border-lumenhaus-green"
              />
              <Button type="submit" className="bg-lumenhaus-green hover:bg-lumenhaus-green/90 rounded-full px-4">
                Enviar
              </Button>
            </div>
          </form>
        </div>
      )}

      {/* Chat Bubble Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className={`bg-lumenhaus-green text-white p-4 rounded-full shadow-md hover:bg-lumenhaus-green/90 transition-all ${
          isOpen ? 'scale-90' : 'scale-100'
        }`}
      >
        <MessageSquare size={24} />
      </button>
    </div>
  );
};

export default ChatBubble;
