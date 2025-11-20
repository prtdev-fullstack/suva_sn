export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider bg-orange-50 px-4 py-2 rounded-full">
                Qui sommes-nous
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 leading-tight">
              Votre partenaire de confiance en aménagement
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Bienvenue chez SUVA - Decoration et Amenagement,
votre partenaire de confiance dons les domaines de la finition interieure. Forts d'une expertise de plusieurs annees,
nous intervenons sur des projets residentiels, commerciaux et industriels.
Nous transformons vos idees en realisations concretes, alliant esthetisme, fonctionnalite et innovation.

            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              Notre équipe de professionnels qualifiés vous accompagne de la conception à la réalisation de
              vos projets, en combinant créativité, qualité et respect des délais.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-3 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-blue-800 font-medium">Expertise reconnue</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-3 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-blue-800 font-medium">Service personnalisé</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-50 px-4 py-3 rounded-lg">
                <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                <span className="text-blue-800 font-medium">Qualité garantie</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl transform rotate-3"></div>
            <img
              src="https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="À propos de SUVA SN"
              className="relative rounded-2xl shadow-2xl w-full h-[500px] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-xl shadow-xl">
              <div className="text-4xl font-bold">+500</div>
              <div className="text-sm">Clients satisfaits</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
