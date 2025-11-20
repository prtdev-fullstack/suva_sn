import { Target, Award, Users, Heart } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'Nous visons la perfection dans chaque projet, du plus petit détail à l\'ensemble de la réalisation.'
  },
  {
    icon: Award,
    title: 'Qualité',
    description: 'Matériaux premium et artisanat expert pour garantir des résultats durables et esthétiques.'
  },
  {
    icon: Users,
    title: 'Attentif',
    description: 'Écoute active et accompagnement personnalisé tout au long de votre projet.'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Notre amour du métier transparaît dans chaque création que nous livrons.'
  }
];

export default function Values() {
  return (
    <section id="values" className="py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-10"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-400 font-semibold text-sm uppercase tracking-wider bg-orange-500/20 px-4 py-2 rounded-full inline-block">
            Nos valeurs
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white">
            Ce qui nous anime au quotidien
          </h2>
          <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
            Des principes forts qui guident chacune de nos actions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-xl">
                  <Icon className="text-white" size={32} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  {value.title}
                </h3>

                <p className="text-blue-100 leading-relaxed">
                  {value.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">Transparence</div>
              <p className="text-blue-100">Communication claire et honnête</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">Innovation</div>
              <p className="text-blue-100">Solutions créatives et modernes</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">Respect</div>
              <p className="text-blue-100">Des délais et de votre budget</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
