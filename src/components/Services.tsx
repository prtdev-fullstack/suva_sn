const services = [
  {
    title: 'Architecture',
    description: 'Conception architecturale innovante et fonctionnelle pour vos projets',
    image: 'https://plus.unsplash.com/premium_photo-1661335257817-4552acab9656?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbiUyMGQlRTIlODAlOTlhcmNoaXRlY3R1cmV8ZW58MHx8MHx8fDA%3D'
  },
  {
    title: 'Plans 2D/3D',
    description: 'Modélisation précise et visualisation réaliste de vos espaces',
    image: 'https://recrutement-immobilier.sextantfrance.fr/wp-content/uploads/2013/11/dreamstime_xs_17940835.jpg'
  },
  {
    title: 'Faux plafonds',
    description: 'Installation de faux plafonds design et acoustiques',
    image: 'https://www.brico-et-deco.com/wp-content/uploads/2024/01/amenagement-decoration-platre-tunisie-59.jpg'
  },
  {
    title: 'Aluminium',
    description: 'Menuiserie aluminium : portes, fenêtres et façades',
    image: 'https://arcencielgroupe.com/wp-content/uploads/2025/07/Aluminium-menuiserie-tn.jpg'
  },
  {
    title: 'Menuiserie',
    description: 'Travaux de menuiserie sur-mesure de haute qualité',
    image: 'https://media.istockphoto.com/id/1201660231/fr/photo/allons-couper.jpg?s=612x612&w=0&k=20&c=lIvE9WltskxUZ99buBlv4BmUFzHt8jF0-5FaBaB1XVA='
  },
  {
    title: 'Électricité',
    description: 'Installation électrique complète et sécurisée',
    image: 'https://www.illico-travaux.com/wp-content/uploads/2018/01/Electricit%C3%A9-1280x852.jpeg'
  },
  {
    title: 'Carrelage',
    description: 'Pose de carrelage et revêtements de sols élégants',
    image: 'https://img.freepik.com/photos-premium/homme-est-train-poser-carreaux-ceramique_926199-3655251.jpg?semt=ais_incoming&w=740&q=80'
  },
  {
    title: 'Peinture',
    description: 'Peinture intérieure et extérieure de qualité professionnelle',
    image: 'https://media.istockphoto.com/id/506677798/fr/photo/africain-construction-travailleur-peinture-sur-le-mur.jpg?s=612x612&w=0&k=20&c=-q6PcuSK9BLUno5twR_zjymBTn0bK-MOhz1s1mmW1IQ='
  },
  {
    title: 'Design intérieur',
    description: 'Création d\'espaces harmonieux et personnalisés',
    image: 'https://cdn.shopify.com/s/files/1/0065/1057/5680/files/1_cc2b5433-43a4-4c19-886c-e5d0fbaf3c08.jpg?v=1593332913'
  },
  {
    title: 'Ameublement',
    description: 'Mobilier sur-mesure et aménagement complet',
    image: 'https://additimedia.ouest-france.fr/wp-content/uploads/2023/02/istock-1293762741-1200x800.jpg'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider bg-orange-50 px-4 py-2 rounded-full inline-block">
            Nos services
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
            Une gamme complète de services
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            De la conception à la réalisation, nous maîtrisons tous les aspects de l'aménagement
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex items-center text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                  <span className="text-sm">En savoir plus</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
