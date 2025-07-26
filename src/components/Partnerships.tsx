import React from 'react';
import { Handshake, Globe, Building, Users, ArrowRight, Star } from 'lucide-react';

const Partnerships = () => {
  const partnerTypes = [
    {
      icon: Building,
      title: "Partenaires Institutionnels",
      description: "Collaboration avec les autorités locales et organismes de régulation",
      partners: ["Ministère des Mines", "SAEMAPE", "Gouvernement Provincial", "CAMI"]
    },
    {
      icon: Globe,
      title: "Partenaires Internationaux",
      description: "Relations commerciales avec des acheteurs et investisseurs internationaux",
      partners: ["Traders Internationaux", "Raffineries", "Investisseurs Privés", "ONG Internationales"]
    },
    {
      icon: Users,
      title: "Communautés Locales",
      description: "Engagement avec les communautés et coopératives d'artisans",
      partners: ["Coopératives Minières", "Chefs Coutumiers", "Associations Locales", "Groupes d'Artisans"]
    }
  ];

  const opportunities = [
    {
      title: "Investisseurs",
      description: "Opportunités d'investissement dans l'expansion de nos opérations",
      benefits: ["ROI attractif", "Secteur en croissance", "Expertise locale", "Transparence totale"],
      cta: "Découvrir les opportunités"
    },
    {
      title: "Acheteurs",
      description: "Approvisionnement direct en minerais certifiés et traçables",
      benefits: ["Qualité garantie", "Traçabilité complète", "Prix compétitifs", "Livraison fiable"],
      cta: "Devenir acheteur"
    },
    {
      title: "Partenaires Techniques",
      description: "Collaboration pour l'amélioration des techniques et technologies",
      benefits: ["Innovation partagée", "Transfert de compétences", "Projets conjoints", "Développement durable"],
      cta: "Proposer un partenariat"
    }
  ];

  const testimonials = [
    {
      name: "Jean-Baptiste Mukendi",
      role: "Coopérative Minière Tanganyika",
      content: "R.S. Mining a transformé notre façon de travailler. Grâce à leurs formations, nos rendements ont augmenté de 40% tout en respectant l'environnement.",
      rating: 5
    },
    {
      name: "Sarah Richardson",
      role: "International Mining Trader",
      content: "La qualité et la traçabilité des minerais de R.S. Mining sont exceptionnelles. Un partenaire de confiance pour nos approvisionnements en RDC.",
      rating: 5
    }
  ];

  return (
    <section id="partenariats" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Partenariats & Écosystème</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Un réseau solide de partenaires pour maximiser l'impact et créer de la valeur partagée
          </p>
        </div>

        {/* Partner types */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {partnerTypes.map((type, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <type.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{type.title}</h3>
                <p className="text-gray-600 leading-relaxed">{type.description}</p>
              </div>
              
              <div className="space-y-3">
                {type.partners.map((partner, idx) => (
                  <div key={idx} className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-amber-600 rounded-full mr-3"></div>
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Partnership opportunities */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Opportunités de Collaboration</h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {opportunities.map((opportunity, index) => (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-2xl font-bold text-gray-800">{opportunity.title}</h4>
                  <Handshake className="text-amber-600 group-hover:scale-110 transition-transform duration-300" size={32} />
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">{opportunity.description}</p>
                
                <div className="space-y-3 mb-8">
                  {opportunity.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-gray-700">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                      {benefit}
                    </div>
                  ))}
                </div>
                
                <button className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2 group">
                  <span>{opportunity.cta}</span>
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-2xl p-8">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">Témoignages de nos Partenaires</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-amber-500 fill-current" size={20} />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold">{testimonial.name.charAt(0)}</span>
                  </div>
                  <div>
                    <div className="font-bold text-gray-800">{testimonial.name}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnerships;