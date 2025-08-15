import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

const WhatsAppWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const openWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá! Estou interessado em saber mais sobre seus materiais de construção e gostaria de solicitar um orçamento."
    );
    window.open(`https://wa.me/5571986873417?text=${message}`, "_blank");
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 bg-white rounded-2xl shadow-strong border border-green-100 p-4 max-w-xs animate-scale-in">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="font-semibold text-foreground text-sm">
                PJN Support
              </div>
              <div className="text-xs text-muted-foreground">
                Responderemos o mais rápido possível
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-3 mb-3">
            <p className="text-sm text-foreground">
              👋 Olá! Precisa de ajuda com materiais de construção? Estou aqui
              para ajudar com orçamentos e informações sobre produtos.
            </p>
          </div>

          <button
            onClick={openWhatsApp}
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition-colors text-sm font-medium"
          >
            Iniciar Chat no WhatsApp
          </button>
        </div>
      )}

      <button
        onClick={toggleWidget}
        className="group relative w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-strong hover:shadow-glow transition-all duration-300 flex items-center justify-center animate-float"
        aria-label="Open WhatsApp chat"
      >
        <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>

        <div className="relative z-10 transition-transform duration-300 group-hover:scale-110">
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <MessageCircle className="w-6 h-6 text-white" />
          )}
        </div>

        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs text-white font-bold">1</span>
          </div>
        )}
      </button>

      {!isOpen && (
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          Fale conosco pelo WhatsApp
          <div className="absolute top-1/2 right-0 transform translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
        </div>
      )}
    </div>
  );
};

export default WhatsAppWidget;
