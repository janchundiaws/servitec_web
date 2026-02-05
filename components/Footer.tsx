
import React from 'react';
import { LOGO_URL } from '../constants';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/5 pb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <img src={LOGO_URL} alt="Servitec Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-white tracking-tighter">SERVITEC</span>
            </div>
            <p className="text-sm leading-relaxed">
              Liderando la innovación tecnológica con un compromiso inquebrantable con la calidad y la satisfacción del cliente. Tu socio estratégico en hardware y software.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-cyan-400 transition-colors"><Facebook size={20} /></a>
              <a href="#" className="hover:text-cyan-400 transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-cyan-400 transition-colors"><Linkedin size={20} /></a>
              <a href="#" className="hover:text-cyan-400 transition-colors"><Github size={20} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Servicios</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Reparación de PCs</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Mantenimiento Impresoras</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Soporte Televisores</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Venta de Repuestos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Desarrollo</h4>
            <ul className="space-y-4 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Sistemas Web ERP</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Apps iOS & Android</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">E-commerce a medida</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Software de Escritorio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Newsletter</h4>
            <p className="text-xs mb-4">Suscríbete para recibir tips técnicos y ofertas.</p>
            <div className="flex gap-2">
              <input type="email" placeholder="Tu email" className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm w-full outline-none focus:ring-1 focus:ring-cyan-500" />
              <button className="bg-cyan-500 text-slate-950 px-4 py-2 rounded-lg text-sm font-bold hover:bg-cyan-400">OK</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs gap-4">
          <p>© 2025 SERVITEC Soluciones Tecnológicas. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Políticas de Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
