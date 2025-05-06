
import React, { useState } from 'react';
import { MessageSquare, ShoppingBag, X } from 'lucide-react';

const ChatBubble = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <>
      {/* Chat bubble button */}
      <button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 bg-mixvinicius-orange text-white rounded-full p-4 shadow-lg hover:bg-mixvinicius-green transition-colors duration-300 z-50 flex items-center justify-center"
        aria-label="Abrir chat"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <div className="relative">
            <ShoppingBag className="h-6 w-6" />
            <div className="absolute -top-1 -right-1 bg-white rounded-full w-3 h-3">
              <MessageSquare className="h-3 w-3 text-mixvinicius-orange" />
            </div>
          </div>
        )}
      </button>
      
      {/* Chat modal */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 md:w-96 bg-white rounded-xl shadow-xl z-50 overflow-hidden border border-gray-200 animate-fade-in">
          <div className="bg-mixvinicius-green px-4 py-3 text-white flex justify-between items-center">
            <div className="flex items-center">
              <ShoppingBag className="mr-2 h-5 w-5" />
              <h3 className="font-medium">Assistente MixVinicius</h3>
            </div>
            <button onClick={toggleChat} className="text-white hover:text-gray-200">
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="h-80 overflow-y-auto p-4 bg-gray-50">
            <div className="mb-4">
              <div className="bg-gray-200 rounded-lg py-2 px-4 inline-block max-w-[80%]">
                <p className="text-sm">Olá! Como posso ajudar com suas compras hoje?</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">Assistente • 12:00</p>
            </div>
            
            <div className="mb-4 flex justify-end">
              <div className="flex flex-col items-end">
                <div className="bg-mixvinicius-green text-white rounded-lg py-2 px-4 inline-block max-w-[80%]">
                  <p className="text-sm">Vocês tem frutas orgânicas?</p>
                </div>
                <p className="text-xs text-gray-500 mt-1">Você • 12:01</p>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="bg-gray-200 rounded-lg py-2 px-4 inline-block max-w-[80%]">
                <p className="text-sm">Sim! Temos diversas opções de frutas orgânicas. Você pode encontrá-las na seção de Frutas, com o selo de produto orgânico. Posso te recomendar algumas?</p>
              </div>
              <p className="text-xs text-gray-500 mt-1">Assistente • 12:02</p>
            </div>
          </div>
          
          <div className="p-3 border-t border-gray-200">
            <form className="flex gap-2">
              <input
                type="text"
                placeholder="Digite sua mensagem..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-mixvinicius-green text-sm"
              />
              <button
                type="submit"
                className="bg-mixvinicius-green text-white rounded-lg px-4 py-2 text-sm font-medium hover:bg-opacity-90"
              >
                Enviar
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBubble;
