
import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contacto" className="py-24 bg-slate-50 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Contáctanos</h2>
            <p className="text-slate-600 text-lg mb-10 leading-relaxed">
              ¿Tienes una emergencia técnica o un proyecto en mente? Nuestro equipo está listo para ayudarte. Envíanos un mensaje y te responderemos en menos de 24 horas.
            </p>

            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-cyan-600">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Email</h4>
                  <p className="text-slate-600">tecnico@sm.grupoherrera1.com</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-blue-600">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Teléfono / WhatsApp</h4>
                  <p className="text-slate-600">+593 98 280 8932</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white p-4 rounded-2xl shadow-sm text-indigo-600">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Ubicación Central</h4>
                  <p className="text-slate-600">Manta centro comercial manta centro local número 109 entre la calle 12y13 av. 7</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 sm:p-12 rounded-[2.5rem] shadow-xl shadow-slate-200/50">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Nombre</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Empresa (Opcional)</label>
                  <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Correo Electrónico</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Mensaje</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-blue-900 text-white py-4 rounded-xl font-bold shadow-lg shadow-blue-900/20 hover:bg-blue-950 transition-all flex items-center justify-center gap-2">
                Enviar Mensaje
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
