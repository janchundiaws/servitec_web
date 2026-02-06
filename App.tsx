
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HardwareSection from './components/HardwareSection';
import SoftwareSection from './components/SoftwareSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/ChatBot';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HardwareSection />
        <SoftwareSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
