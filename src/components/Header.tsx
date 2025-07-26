import React, { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-amber-700 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone size={14} />
                              <span>+243 800 000 000</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail size={14} />
              <span>contact@rsmining.cd</span>
            </div>
          </div>
          <div className="hidden md:block text-sm">
            Kinshasa, République Démocratique du Congo
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">RS</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">R.S. MINING</h1>
              <p className="text-sm text-gray-600">SARL</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex space-x-8">
            <a href="#accueil" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">Accueil</a>
            <a href="#apropos" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">À Propos</a>
            <a href="#activites" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">Activités</a>
            <a href="#partenariats" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">Partenariats</a>
            <a href="#impact" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">Impact</a>
            <a href="#contact" className="text-gray-700 hover:text-amber-700 font-medium transition-colors">Contact</a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-amber-700 hover:bg-gray-100"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden pb-4 border-t border-gray-200">
            <div className="flex flex-col space-y-3 pt-4">
              <a href="#accueil" className="text-gray-700 hover:text-amber-700 font-medium" onClick={toggleMenu}>Accueil</a>
              <a href="#apropos" className="text-gray-700 hover:text-amber-700 font-medium" onClick={toggleMenu}>À Propos</a>
              <a href="#activites" className="text-gray-700 hover:text-amber-700 font-medium" onClick={toggleMenu}>Activités</a>
              <a href="#partenariats" className="text-gray-700 hover:text-amber-700 font-medium" onClick={toggleMenu}>Partenariats</a>
              <a href="#impact" className="text-gray-700 hover:text-amber-700 font-medium" onClick={toggleMenu}>Impact</a>
              <a href="#contact" className="text-gray-700 hover:text-amber-700 font-medium" onClick={toggleMenu}>Contact</a>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;