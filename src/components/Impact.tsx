import React from 'react';
import { Users, MapPin, Zap, TreePine, TrendingUp, Award } from 'lucide-react';

const Impact = () => {
  const metrics = [
    { icon: Users, value: "150+", label: "Emplois créés", color: "from-blue-500 to-blue-700" },
    { icon: MapPin, value: "12", label: "Sites d'exploitation", color: "from-green-500 to-green-700" },
    { icon: Zap, value: "500+", label: "Artisans formés", color: "from-purple-500 to-purple-700" },
    { icon: TreePine, value: "8", label: "Sites restaurés", color: "from-emerald-500 to-emerald-700" },
    { icon: TrendingUp, value: "25%", label: "Croissance annuelle", color: "from-orange-500 to-orange-700" },
    { icon: Award, value: "100%", label: "Conformité réglementaire", color: "from-amber-500 to-amber-700" }
  ];

  const projects = [
    {
      title: "Projet Tanganyika Gold",
      location: "Province du Tanganyika",
      description: "Exploitation aurifère responsable avec impact communautaire positif",
      impact: "80 emplois directs créés, formation de 150 artisans locaux",
      media: "/video/5.mp4",
      type: "video"
    },
    {
      title: "Initiative Cuivre Vert",
      location: "Région du Lualaba",
      description: "Extraction de cuivre avec techniques de restauration environnementale",
      impact: "3 sites restaurés, 200 familles bénéficiaires",
      media: "/video/8.mp4",
      type: "video"
    },
    {
      title: "Programme Formation Jeunes",
      location: "Province du Tanganyika",
      description: "Formation technique des jeunes aux métiers de la mine",
      impact: "300 jeunes formés, 85% d'insertion professionnelle",
      media: "/img/3.jpg",
      type: "image"
    }
  ];

  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Notre Impact</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Des résultats concrets qui témoignent de notre engagement envers le développement durable et responsable
          </p>
        </div>

        {/* Impact metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {metrics.map((metric, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 group">
              <div className={`w-20 h-20 bg-gradient-to-br ${metric.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <metric.icon className="text-white" size={32} />
              </div>
              <div className="text-4xl font-bold text-gray-800 mb-2">{metric.value}</div>
              <div className="text-gray-600 font-medium">{metric.label}</div>
            </div>
          ))}
        </div>

        {/* Featured projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Projets Emblématiques</h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  {project.type === "video" ? (
                    <video 
                      src={project.media}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />
                  ) : (
                    <img 
                      src={project.media}
                      alt={project.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">{project.location}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                  <div className="bg-amber-50 rounded-lg p-4">
                    <div className="text-sm font-medium text-amber-800 mb-1">Impact réalisé :</div>
                    <div className="text-sm text-amber-700">{project.impact}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Environmental commitment */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-800 mb-6">Engagement Environnemental</h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Chez R.S. Mining, nous croyons fermement qu'exploitation minière et préservation environnementale peuvent coexister harmonieusement.
                </p>
                <p>
                  Nos pratiques durables incluent la restauration systématique des sites, la gestion responsable des déchets et l'utilisation de techniques respectueuses de l'écosystème.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700 mb-1">100%</div>
                  <div className="text-sm text-gray-600">Sites restaurés</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-700 mb-1">Zero</div>
                  <div className="text-sm text-gray-600">Pollution majeure</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://tse3.mm.bing.net/th/id/OIP.pTDOMbaWG7Jdo6rWrchWhwHaFL?r=0&rs=1&pid=ImgDetMain&o=7&rm=3"
                alt="Site minier avec pratiques environnementales responsables"
                className="rounded-lg shadow-xl w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;