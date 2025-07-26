import React from 'react';
import { Award, Target, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="apropos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">À Propos de R.S. Mining</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Une entreprise minière artisanale fondée sur l'expertise, l'intégrité et l'engagement envers le développement durable du secteur minier congolais.
          </p>
        </div>

        {/* Company story */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Notre Histoire</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Fondée en 2017 par Regis Shweka Bahati, R.S. Mining SARL s'est rapidement imposée comme un acteur de référence dans l'exploitation minière artisanale en République Démocratique du Congo.
              </p>
              <p>
                Basée à Kinshasa avec des opérations dans la région du Tanganyika, notre entreprise combine expertise technique et connaissance approfondie du terrain pour offrir des solutions minières durables et responsables.
              </p>
              <p>
                Aujourd'hui, nous employons plus de 150 personnes et avons formé des centaines d'artisans miniers aux meilleures pratiques du secteur.
              </p>
            </div>
          </div>
          
          <div className="relative">
            <img 
              src="/img/about.jpg"
              alt="Exploitation minière artisanale"
              className="rounded-lg shadow-xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
          </div>
        </div>

        {/* Founder profile */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-16">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-1">
              <div className="w-64 h-64 mx-auto bg-gradient-to-br from-amber-100 to-amber-200 rounded-full flex items-center justify-center">
                <div className="w-56 h-56 bg-gradient-to-br from-amber-600 to-amber-800 rounded-full flex items-center justify-center">
                  <span className="text-white text-6xl font-bold">RS</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Regis Shweka Bahati</h3>
              <p className="text-xl text-amber-700 mb-6 font-medium">Fondateur & Directeur Général</p>
              
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Visionnaire passionné par le développement du secteur minier congolais, Regis Shweka Bahati apporte plus de 15 ans d'expérience dans l'industrie minière africaine.
                </p>
                <p>
                  Sa vision : transformer l'exploitation minière artisanale en un secteur moderne, responsable et profitable pour toutes les parties prenantes, tout en préservant l'environnement et en soutenant les communautés locales.
                </p>
                <p>
                  Diplômé en géologie et fort d'une expertise terrain exceptionnelle, il dirige aujourd'hui une équipe dynamique incluant Grace Ngalula, responsable des opérations commerciales.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core values */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Nos Valeurs Fondamentales</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Intégrité</h4>
              <p className="text-gray-600 leading-relaxed">
                Transparence et honnêteté dans toutes nos opérations et relations d'affaires.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Target className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Excellence</h4>
              <p className="text-gray-600 leading-relaxed">
                Recherche constante de la qualité et de l'amélioration continue de nos services.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Heart className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Communauté</h4>
              <p className="text-gray-600 leading-relaxed">
                Engagement envers le développement socio-économique des communautés locales.
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Lightbulb className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Innovation</h4>
              <p className="text-gray-600 leading-relaxed">
                Adoption de technologies et méthodes modernes pour optimiser nos opérations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;