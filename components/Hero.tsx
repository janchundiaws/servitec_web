
import React from 'react';
import { ArrowRight, Laptop, Smartphone, Settings } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-servitec-dark">
      {/* Background patterns */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 -left-4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-white leading-tight">
            Elevamos tu <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Tecnología</span> al siguiente nivel
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto lg:mx-0">
            En Servitec somos especialistas en reparación de hardware y desarrollo de software a medida. Soluciones integrales para que tu negocio nunca se detenga.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a 
              href="#hardware"
              className="group px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white rounded-xl font-bold text-lg shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 transition-all"
            >
              Nuestros Servicios
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#software"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-bold text-lg backdrop-blur-md transition-all text-center"
            >
              Ver Portafolio
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8">
            <div className="flex flex-col items-center lg:items-start">
              <span className="text-3xl font-bold text-white">500+</span>
              <span className="text-slate-400 uppercase text-xs tracking-widest font-semibold">Reparaciones</span>
            </div>
            <div className="flex flex-col items-center lg:items-start border-l border-white/10 pl-8">
              <span className="text-3xl font-bold text-white">100+</span>
              <span className="text-slate-400 uppercase text-xs tracking-widest font-semibold">Proyectos SW</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="relative z-10 bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-2 rounded-3xl backdrop-blur-sm shadow-2xl">
            <img 
              src="https://picsum.photos/seed/tech6/800/600" 
              alt="Tech Workspace" 
              className="rounded-2xl w-full h-auto object-cover"
            />
          </div>
          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 p-6 bg-white rounded-2xl shadow-2xl animate-bounce duration-[3000ms]">
            <Laptop className="text-cyan-500 w-8 h-8" />
          </div>
          <div className="absolute -bottom-10 -left-10 p-6 bg-blue-600 rounded-2xl shadow-2xl animate-pulse">
            <Smartphone className="text-white w-8 h-8" />
          </div>
          <div className="absolute top-1/2 -right-12 p-4 bg-slate-800 rounded-full shadow-2xl">
            <Settings className="text-cyan-400 w-10 h-10 animate-spin-slow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
