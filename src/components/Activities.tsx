import React from 'react';
import { Search, Pickaxe, GraduationCap, TrendingUp, Shield, Leaf } from 'lucide-react';

const Activities = () => {
  const activities = [
    {
      icon: Search,
      title: "Exploration Minière",
      description: "Identification et évaluation de nouveaux gisements avec des techniques modernes de prospection et d'analyse géologique.",
      details: ["Cartographie géologique", "Échantillonnage systématique", "Analyse de faisabilité", "Évaluation des réserves"]
    },
    {
      icon: Pickaxe,
      title: "Exploitation Artisanale Encadrée",
      description: "Extraction responsable et sécurisée des minerais avec respect des normes internationales et locales.",
      details: ["Méthodes d'extraction sécurisées", "Contrôle qualité continu", "Traçabilité complète", "Conformité réglementaire"]
    },
    {
      icon: GraduationCap,
      title: "Formation & Accompagnement",
      description: "Programmes de formation pour les artisans miniers sur les meilleures pratiques et la sécurité.",
      details: ["Formation aux techniques modernes", "Sensibilisation sécurité", "Gestion environnementale", "Développement des compétences"]
    },
    {
      icon: TrendingUp,
      title: "Commercialisation",
      description: "Mise sur le marché des minerais avec création de valeur ajoutée et partenariats stratégiques.",
      details: ["Négociation internationale", "Logistique optimisée", "Certification qualité", "Partenariats durables"]
    }
  ];

  return (
    <section id="activites" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Nos Activités & Expertise</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Quatre piliers d'excellence pour une exploitation minière moderne, responsable et profitable
          </p>
        </div>

        {/* Activities grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {activities.map((activity, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <activity.icon className="text-white" size={28} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{activity.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{activity.description}</p>
                  
                  <ul className="space-y-2">
                    {activity.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Methodology section */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8 mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Notre Méthodologie</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Sécurité d'abord</h4>
              <p className="text-gray-600 leading-relaxed">
                Protocoles stricts de sécurité et formation continue de nos équipes pour assurer un environnement de travail sûr.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Formation Continue</h4>
              <p className="text-gray-600 leading-relaxed">
                Programmes de développement des compétences pour maintenir les plus hauts standards de qualité.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="text-white" size={32} />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-4">Respect Environnemental</h4>
              <p className="text-gray-600 leading-relaxed">
                Pratiques durables et restauration des sites pour préserver l'écosystème local.
              </p>
            </div>
          </div>
        </div>

        {/* Specializations */}
        <div>
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Nos Spécialisations</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full mx-auto mb-4"></div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Or</h4>
                <p className="text-gray-600 text-sm">Extraction et traitement de l'or alluvionnaire et filonien</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-4"></div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Cuivre</h4>
                <p className="text-gray-600 text-sm">Exploitation des gisements de cuivre de haute qualité</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-4"></div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Cobalt</h4>
                <p className="text-gray-600 text-sm">Extraction responsable du cobalt pour l'industrie moderne</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full mx-auto mb-4"></div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Étain</h4>
                <p className="text-gray-600 text-sm">Exploitation de cassitérite avec techniques avancées</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-full mx-auto mb-4"></div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Tantale</h4>
                <p className="text-gray-600 text-sm">Extraction de coltan pour l'industrie électronique</p>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-4"></div>
                <h4 className="text-lg font-bold text-gray-800 mb-2">Autres Minerais</h4>
                <p className="text-gray-600 text-sm">Exploitation diversifiée selon les opportunités</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activities;