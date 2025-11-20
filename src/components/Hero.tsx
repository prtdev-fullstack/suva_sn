import { ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-screen flex items-center pt-20">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-blue-700 to-blue-600 opacity-95"></div>

      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center mix-blend-overlay opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <div className="space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
            Transformez vos espaces
            <span className="block text-orange-400 mt-2">en œuvres d'art</span>
          </h1>

          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Excellence en décoration et aménagement intérieur au Sénégal
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#services"
              className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 flex items-center space-x-2 shadow-xl hover:shadow-2xl hover:scale-105"
            >
              <span>Découvrir nos services</span>
              <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </a>

            <a
              href="#contact"
              className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 border-2 border-white/50 hover:border-white"
            >
              Nous contacter
            </a>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-4xl mx-auto pt-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-400">+500</div>
              <div className="text-blue-100 mt-2">Projets réalisés</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-400">10+</div>
              <div className="text-blue-100 mt-2">Ans d'expérience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-orange-400">100%</div>
              <div className="text-blue-100 mt-2">Satisfaction client</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
}
