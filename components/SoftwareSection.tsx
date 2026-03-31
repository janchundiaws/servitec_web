
import React from 'react';
import { Globe, Smartphone, Server, Layers, Code2, Rocket, Play, ExternalLink } from 'lucide-react';

const softwareProjects = [
  {
    title: "ERP Control de Inventarios",
    category: "Sistema Web",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    url: "https://demo-inventarios.servitec.tech",
    desc: "Gestión avanzada de stock, proveedores y facturación electrónica."
  },
  {
    title: "Zhanter - Firma de abogados",
    category: "Página Web",
    img: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=800&auto=format&fit=crop",
    url: "https://zhanter.gintrich.cloud/",
    desc: "Pagina web corporativa con portafolio de servicios, blog y contacto integrado."
  },
  {
    title: "App Finanzas Personales",
    category: "Mobile App",
    img: "https://william-as.com/finanzasapp/assets/screen-2.png",
    url: "https://william-as.com/finanzasapp",
    desc: "Aplicación para Android/iOS que ayuda a gestionar gastos e ingresos personales."
  },
  {
    title: "Gestor de Clínicas",
    category: "Sistema Desktop",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=800&auto=format&fit=crop",
    url: "https://download.servitec.tech/clinica-setup.exe",
    desc: "Software de escritorio para gestión de pacientes e historias clínicas."
  }
];

const SoftwareSection: React.FC = () => {
  return (
    <section id="software" className="py-24 bg-slate-900 text-white relative overflow-hidden scroll-mt-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#1e3a8a_0%,transparent_50%)] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-500/10 text-cyan-400 font-semibold mb-6 border border-cyan-500/20">
            <Code2 size={16} />
            Desarrollo a Medida
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Portafolio de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Sistemas</span></h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Desarrollamos herramientas potentes y fáciles de usar. Explora nuestras demos y comprueba la calidad de nuestro código.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {softwareProjects.map((project, idx) => (
            <div key={idx} className="group bg-slate-800/50 rounded-[2rem] border border-white/5 overflow-hidden backdrop-blur-sm hover:border-cyan-500/30 transition-all flex flex-col h-full">
              <div className="relative aspect-video overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600/90 text-white text-[10px] font-bold rounded-full uppercase">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-sm text-slate-400 mb-6 flex-1">{project.desc}</p>
                
                <div className="flex gap-3">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-slate-950 font-bold py-3 px-4 rounded-xl text-sm transition-all active:scale-95 shadow-lg shadow-cyan-500/10"
                  >
                    <Play size={16} fill="currentColor" />
                    Visitar Demo
                  </a>
                  <button className="p-3 bg-white/5 hover:bg-white/10 text-white rounded-xl transition-all border border-white/10">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-10 bg-gradient-to-r from-blue-900/50 to-slate-800/50 rounded-[3rem] border border-white/5 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">¿Necesitas un sistema personalizado?</h3>
            <p className="text-slate-400">Nuestro equipo de arquitectos de software está listo para diseñar tu próxima gran idea.</p>
          </div>
          <a 
            href="#contacto"
            className="bg-white text-blue-950 px-8 py-4 rounded-2xl font-bold hover:bg-cyan-400 transition-all shadow-xl flex items-center gap-2"
          >
            Solicitar Consultoría Técnica
            <Rocket size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default SoftwareSection;
