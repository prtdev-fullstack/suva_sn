import { CheckCircle, Clock, Shield, Star, TrendingUp, ThumbsUp } from 'lucide-react';

const reasons = [
  {
    icon: Star,
    title: 'Expertise éprouvée',
    description: 'Plus de 10 ans d\'expérience dans le secteur de l\'aménagement et de la décoration'
  },
  {
    icon: CheckCircle,
    title: 'Qualité garantie',
    description: 'Matériaux premium et finitions irréprochables sur tous nos projets'
  },
  {
    icon: Clock,
    title: 'Respect des délais',
    description: 'Nous nous engageons à livrer vos projets dans les temps convenus'
  },
  {
    icon: Shield,
    title: 'Garantie & SAV',
    description: 'Service après-vente réactif et garanties sur tous nos travaux'
  },
  {
    icon: TrendingUp,
    title: 'Innovation constante',
    description: 'Veille technologique et tendances design pour des solutions modernes'
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction client',
    description: '100% de nos clients nous recommandent à leur entourage'
  }
];

export default function WhyUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider bg-orange-50 px-4 py-2 rounded-full inline-block">
            Pourquoi nous choisir
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">
            Ce qui fait notre différence
          </h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Six raisons qui font de SUVA SN votre partenaire idéal
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center mb-6">
                  <Icon className="text-white" size={28} />
                </div>

                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {reason.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

          <div className="relative text-center max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Prêt à transformer vos espaces ?
            </h3>
            <p className="text-xl text-blue-100 mb-8">
              Contactez-nous dès aujourd'hui pour un devis gratuit et sans engagement
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
              >
                Demander un devis
              </a>
              <a
                href="tel:+221123456789"
                className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border-2 border-white/50 hover:border-white"
              >
                Appelez-nous
              </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12 pt-12 border-t border-white/20">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-1">+500</div>
                <div className="text-blue-100 text-sm">Projets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-1">10+</div>
                <div className="text-blue-100 text-sm">Ans</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-1">50+</div>
                <div className="text-blue-100 text-sm">Professionnels</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-400 mb-1">100%</div>
                <div className="text-blue-100 text-sm">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
