
import React, { useState, useEffect } from 'react';
import { Menu, X, Monitor, Code, MessageCircle } from 'lucide-react';
import { LOGO_URL } from '../constants';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Hardware', href: '#hardware', icon: <Monitor size={18} /> },
    { name: 'Software', href: '#software', icon: <Code size={18} /> },
    { name: 'Contacto', href: '#contacto', icon: <MessageCircle size={18} /> },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 cursor-pointer" onClick={scrollToTop}>
            <img src={LOGO_URL} alt="Servitec Logo" className="h-10 w-auto" />
            <span className={`text-2xl font-bold tracking-tighter ${scrolled ? 'text-blue-900' : 'text-white'}`}>SERVITEC</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`flex items-center gap-1 font-medium hover:text-cyan-400 transition-colors ${scrolled ? 'text-slate-700' : 'text-white'}`}
              >
                {link.icon}
                {link.name}
              </a>
            ))}
            <a 
              href="#contacto"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-full font-semibold transition-transform active:scale-95 shadow-lg"
            >
              Cotizar Ahora
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-slate-800' : 'text-white'}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full p-4 border-t border-slate-100 flex flex-col space-y-4 animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-3 text-slate-700 text-lg font-medium p-2 hover:bg-slate-50 rounded-lg"
            >
              <span className="text-cyan-500">{link.icon}</span>
              {link.name}
            </a>
          ))}
          <a 
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="w-full bg-blue-900 text-white py-3 rounded-lg font-bold shadow-md text-center"
          >
            Solicitar Presupuesto
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
