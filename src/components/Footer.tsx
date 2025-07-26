import React from 'react';
import { Facebook, Twitter, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Main footer content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">RS</span>
              </div>
              <div>
                <div className="text-xl font-bold">R.S. MINING</div>
                <div className="text-sm text-gray-400">SARL</div>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Expertise minière artisanale au cœur du Tanganyika. Partenaire de confiance pour une exploitation minière responsable et durable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-amber-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Liens Rapides</h3>
            <ul className="space-y-3">
              <li><a href="#accueil" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Accueil</a></li>
              <li><a href="#apropos" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">À Propos</a></li>
              <li><a href="#activites" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Nos Activités</a></li>
              <li><a href="#partenariats" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Partenariats</a></li>
              <li><a href="#impact" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Notre Impact</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-6">Nos Services</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400">Exploration Minière</span></li>
              <li><span className="text-gray-400">Exploitation Artisanale</span></li>
              <li><span className="text-gray-400">Formation & Accompagnement</span></li>
              <li><span className="text-gray-400">Commercialisation</span></li>
              <li><span className="text-gray-400">Conseil & Expertise</span></li>
              <li><span className="text-gray-400">Partenariats Stratégiques</span></li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-6">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="text-amber-500 mt-1 flex-shrink-0" size={18} />
                <div className="text-gray-400 text-sm leading-relaxed">
                  Avenue Lubumbashi, Commune de la Gombe<br />
                  Kinshasa, RDC
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-amber-500 flex-shrink-0" size={18} />
                <div className="text-gray-400 text-sm">+243 800 000 000</div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="text-amber-500 flex-shrink-0" size={18} />
                <div className="text-gray-400 text-sm">contact@rsmining.cd</div>
              </div>
            </div>

            {/* Newsletter signup */}
            <div className="mt-6">
              <h4 className="font-medium mb-3">Newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-l-lg text-sm focus:outline-none focus:border-amber-500"
                />
                <button className="bg-amber-600 hover:bg-amber-700 px-4 py-2 rounded-r-lg transition-colors duration-300">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom footer */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm text-center md:text-left">
              © 2025 R.S. Mining SARL. Tous droits réservés.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Politique de Confidentialité</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Mentions Légales</a>
              <a href="#" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">Conditions d'Utilisation</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;