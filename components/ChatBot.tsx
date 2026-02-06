
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '593982808932'; // Reemplaza con el número de WhatsApp de Servitec
  const message = '¡Hola! Me gustaría obtener más información sobre los servicios de Servitec.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center p-4 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 group"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={32} className="fill-current" />
        <span className="absolute right-full mr-3 bg-slate-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chatea con nosotros
        </span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
