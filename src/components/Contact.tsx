import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, MessageSquare, Building, Users } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    type: 'information',
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    alert('Merci pour votre message. Nous vous contacterons bientôt !');
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Contactez-nous</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Prêt à explorer de nouvelles opportunités ? Notre équipe est là pour répondre à toutes vos questions
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact information */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Informations de Contact</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-amber-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Adresse</h4>
                    <p className="text-gray-600 leading-relaxed">
                      Avenue Lubumbashi, Commune de la Gombe<br />
                      Kinshasa, République Démocratique du Congo
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Téléphone</h4>
                                    <p className="text-gray-600">+243 800 000 000</p>
                <p className="text-gray-600">+243 800 000 000</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">contact@rsmining.cd</p>
                    <p className="text-gray-600">direction@rsmining.cd</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Horaires</h4>
                    <p className="text-gray-600">Lun - Ven: 08h00 - 17h00</p>
                    <p className="text-gray-600">Sam: 08h00 - 12h00</p>
                  </div>
                </div>
              </div>

              {/* Quick contact options */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-gray-800 mb-4">Contact Rapide</h4>
                <div className="grid grid-cols-2 gap-4">
                  <button className="bg-amber-600 hover:bg-amber-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2">
                    <Phone size={18} />
                    <span className="text-sm">Appeler</span>
                  </button>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 flex items-center justify-center space-x-2">
                    <Mail size={18} />
                    <span className="text-sm">Email</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-8">Envoyez-nous un Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Form type selection */}
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3">Type de demande</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <label className="relative">
                      <input
                        type="radio"
                        name="type"
                        value="information"
                        checked={formData.type === 'information'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        formData.type === 'information' 
                          ? 'border-amber-500 bg-amber-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <MessageSquare className={`mx-auto mb-2 ${
                          formData.type === 'information' ? 'text-amber-600' : 'text-gray-400'
                        }`} size={24} />
                        <div className="text-center text-sm font-medium">Information</div>
                      </div>
                    </label>

                    <label className="relative">
                      <input
                        type="radio"
                        name="type"
                        value="partenariat"
                        checked={formData.type === 'partenariat'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        formData.type === 'partenariat' 
                          ? 'border-amber-500 bg-amber-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <Building className={`mx-auto mb-2 ${
                          formData.type === 'partenariat' ? 'text-amber-600' : 'text-gray-400'
                        }`} size={24} />
                        <div className="text-center text-sm font-medium">Partenariat</div>
                      </div>
                    </label>

                    <label className="relative">
                      <input
                        type="radio"
                        name="type"
                        value="recrutement"
                        checked={formData.type === 'recrutement'}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <div className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                        formData.type === 'recrutement' 
                          ? 'border-amber-500 bg-amber-50' 
                          : 'border-gray-200 hover:border-gray-300'
                      }`}>
                        <Users className={`mx-auto mb-2 ${
                          formData.type === 'recrutement' ? 'text-amber-600' : 'text-gray-400'
                        }`} size={24} />
                        <div className="text-center text-sm font-medium">Recrutement</div>
                      </div>
                    </label>
                  </div>
                </div>

                {/* Form fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      placeholder="Votre nom complet"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                      placeholder="votre@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-bold text-gray-700 mb-2">
                    Entreprise / Organisation
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300"
                    placeholder="Nom de votre entreprise"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all duration-300 resize-y"
                    placeholder="Décrivez votre demande en détail..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 text-white py-4 px-8 rounded-lg font-bold text-lg transition-all duration-300 flex items-center justify-center space-x-3 group"
                >
                  <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                  <span>Envoyer le Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Notre Localisation</h3>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8198!2d15.3222!3d-4.3224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6a3b8b8b8b8b8b%3A0x1a6a3b8b8b8b8b8b!2sKinshasa%2C%20Democratic%20Republic%20of%20the%20Congo!5e0!3m2!1sen!2sfr!4v1234567890"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localisation R.S. Mining - Kinshasa"
                className="w-full h-64 md:h-96"
              ></iframe>
            </div>
            <div className="mt-4 text-center text-gray-600">
              <p className="text-sm">Avenue Lubumbashi, Commune de la Gombe, Kinshasa, RDC</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;