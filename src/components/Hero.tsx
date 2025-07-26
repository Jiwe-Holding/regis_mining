import React from 'react';
import { ChevronRight, Shield, Users, Gem } from 'lucide-react';

const Hero = () => {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center">
      {/* Background image overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("/img/hero.jpg")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl">
          <div className="mb-6">
            <span className="inline-block bg-amber-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
              Depuis 2017 - Expertise Minière Artisanale
            </span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            R.S. MINING SARL
          </h1>
          
          <h2 className="text-xl md:text-2xl lg:text-3xl text-amber-300 mb-8 font-medium leading-relaxed">
            Expertise Minière Artisanale au Cœur du Tanganyika
          </h2>
          
          <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
            Partenaire de confiance pour une exploitation minière responsable et durable en République Démocratique du Congo
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 group">
              <span>Découvrir nos activités</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300">
              Nous contacter
            </button>
          </div>

          {/* Key metrics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 bg-white/10 backdrop-blur-sm rounded-2xl p-6">
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Shield className="text-amber-400" size={32} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">8+</div>
              <div className="text-gray-300 text-sm">Années d'expérience</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Users className="text-amber-400" size={32} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">150+</div>
              <div className="text-gray-300 text-sm">Emplois créés</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center mb-3">
                <Gem className="text-amber-400" size={32} />
              </div>
              <div className="text-2xl font-bold text-white mb-1">12</div>
              <div className="text-gray-300 text-sm">Sites d'exploitation</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;