
import React from 'react';
import { Monitor, Printer, Tv, Package, CheckCircle2, ExternalLink, Wind, Droplets, Fan } from 'lucide-react';

const hardwareServices = [
  {
    title: "Soporte Computacional",
    desc: "Mantenimiento preventivo y correctivo de laptops y PCs. Reparación de placas y componentes.",
    icon: <Monitor className="w-8 h-8 text-cyan-500" />
  },
  {
    title: "Reparación de Impresoras",
    desc: "Especialistas en sistemas de tinta continua, láser y matriciales. Mantenimiento integral.",
    icon: <Printer className="w-8 h-8 text-blue-500" />
  },
  {
    title: "Servicio Técnico de TV",
    desc: "Cambio de backlights, tarjetas main y reparación de pantallas para todas las marcas.",
    icon: <Tv className="w-8 h-8 text-indigo-500" />
  },
  {
    title: "Reparación y mantenimiento de Aires Acondicionados",
    desc: "Instalación, mantenimiento y reparación de sistemas de climatización. Recarga de gas y limpieza profunda.",
    icon: <Wind className="w-8 h-8 text-sky-500" />
  },
  {
    title: "Reparación y mantenimiento de Lavadoras",
    desc: "Servicio técnico especializado para lavadoras de todas las marcas. Cambio de componentes y mantenimiento.",
    icon: <Droplets className="w-8 h-8 text-teal-500" />
  },
  {
    title: "Reparación y mantenimiento de Secadoras",
    desc: "Mantenimiento y reparación de secadoras. Cambio de resistencias, termostatos y componentes eléctricos.",
    icon: <Fan className="w-8 h-8 text-orange-500" />
  }
];

const repairGallery = [
  { title: "Reparación de Placa Madre", category: "Laptop", img: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=800&auto=format&fit=crop" },
  { title: "Mantenimiento Cabezal", category: "Impresora", img: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?q=80&w=800&auto=format&fit=crop" },
  { title: "Cambio de LEDs", category: "Televisores", img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop" },
  { title: "Limpieza Profunda PC", category: "Desktop", img: "https://images.unsplash.com/photo-1547082299-de196ea013d6?q=80&w=800&auto=format&fit=crop" },
];

const HardwareSection: React.FC = () => {
  return (
    <section id="hardware" className="py-24 bg-white overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-2">Hardware Solutions</h2>
          <p className="text-4xl font-extrabold text-slate-900 sm:text-5xl tracking-tight">Especialistas en Reparación</p>
          <div className="mt-4 max-w-2xl mx-auto text-lg text-slate-500">
            Nuestro laboratorio está equipado con la última tecnología para diagnósticos precisos.
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {hardwareServices.map((service, idx) => (
            <div key={idx} className="group p-8 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-slate-100">
              <div className="mb-6 p-3 bg-white w-fit rounded-2xl shadow-sm group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 text-slate-800">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed mb-6">{service.desc}</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm text-slate-500">
                  <CheckCircle2 className="w-4 h-4 text-green-500" /> Garantía de Calidad
                </li>
              </ul>
            </div>
          ))}
        </div>

        {/* Catálogo de Galería */}
        <div className="space-y-8">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-slate-900">Catálogo de Reparaciones</h3>
            <p className="text-slate-500 text-sm hidden sm:block">Trabajos recientes en nuestro taller</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {repairGallery.map((item, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-200">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                  <span className="text-cyan-400 text-xs font-bold uppercase tracking-wider mb-1">{item.category}</span>
                  <h4 className="text-white font-bold">{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HardwareSection;
