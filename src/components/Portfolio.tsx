const projects = [
  {
    title: 'Villa Moderne Dakar',
    category: 'Design intérieur',
    image: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Aménagement complet d\'une villa de luxe'
  },
  {
    title: 'Bureau Entreprise',
    category: 'Ameublement',
    image: 'https://www.bestar.ca/wp-content/uploads/2019/06/Capture-de%CC%81cran-le-2021-02-19-a%CC%80-10.16.35.jpg',
    description: 'Design d\'espace de travail moderne'
  },
  {
    title: 'Restaurant Gastronomique',
    category: 'Architecture',
    image: 'https://images.pexels.com/photos/1579253/pexels-photo-1579253.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Création d\'une ambiance chaleureuse'
  },
  {
    title: 'Appartement Cosy',
    category: 'Décoration',
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Transformation complète d\'un appartement'
  },
  {
    title: 'Hôtel Boutique',
    category: 'Faux plafonds',
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Plafonds design pour un hôtel de charme'
  },
  {
    title: 'Showroom Commercial',
    category: 'Peinture',
    image: 'https://images.pexels.com/photos/2251247/pexels-photo-2251247.jpeg?auto=compress&cs=tinysrgb&w=800',
    description: 'Finitions haut de gamme'
  }
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider bg-orange-50 px-4 py-2 rounded-full inline-block">
            Nos réalisations
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
            Des projets qui inspirent
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos créations qui témoignent de notre savoir-faire
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-blue-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-white text-xl font-bold mb-2">
                  {project.title}
                </h3>
                <p className="text-blue-100 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105">
            Voir plus de réalisations
          </button>
        </div>
      </div>
    </section>
  );
}
