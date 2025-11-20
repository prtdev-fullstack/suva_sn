import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">SUVA SN</h3>
                <p className="text-blue-200 text-sm">Décoration & Aménagement</p>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed mb-6 max-w-md">
              Votre partenaire de confiance pour la transformation de vos espaces.
              Excellence, qualité et passion depuis plus de 10 ans au Sénégal.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Facebook size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Instagram size={20} className="text-white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Linkedin size={20} className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {['Accueil', 'Qui sommes-nous', 'Nos services', 'Nos valeurs', 'Nos réalisations'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-200 hover:text-orange-400 transition-colors duration-300 flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                    <span>{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+221123456789"
                  className="text-blue-200 hover:text-orange-400 transition-colors duration-300 flex items-start space-x-3"
                >
                  <Phone size={20} className="mt-0.5 flex-shrink-0" />
                  <span>+221 12 345 67 89</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@suvasn.com"
                  className="text-blue-200 hover:text-orange-400 transition-colors duration-300 flex items-start space-x-3"
                >
                  <Mail size={20} className="mt-0.5 flex-shrink-0" />
                  <span>contact@suvasn.com</span>
                </a>
              </li>
              <li>
                <div className="text-blue-200 flex items-start space-x-3">
                  <MapPin size={20} className="mt-0.5 flex-shrink-0" />
                  <span>Dakar, Sénégal</span>
                </div>
              </li>
            </ul>

            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-blue-200 text-sm mb-2">Horaires d'ouverture</p>
              <p className="text-white text-sm font-medium">Lun - Sam: 8h - 18h</p>
              <p className="text-blue-200 text-sm">Dimanche: Fermé</p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-blue-200 text-sm">
              © {currentYear} SUVA SN. Tous droits réservés.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-200 hover:text-orange-400 transition-colors duration-300">
                Mentions légales
              </a>
              <a href="#" className="text-blue-200 hover:text-orange-400 transition-colors duration-300">
                Politique de confidentialité
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
