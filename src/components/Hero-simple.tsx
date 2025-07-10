export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          <span className="block">Bienvenue au</span>
          <span className="block text-yellow-300">Japon</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 animate-slide-up">
          Votre guide ultime pour étudier, travailler, voyager et découvrir la culture japonaise
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <a
            href="/etudier"
            className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Étudier au Japon
          </a>
          <a
            href="/travailler"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300 transform hover:scale-105"
          >
            Travailler au Japon
          </a>
          <a
            href="/voyager"
            className="bg-yellow-400 text-gray-900 px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Voyager au Japon
          </a>
        </div>
        
        <div className="mt-12 animate-slide-up">
          <p className="text-white/80 mb-4">Rejoignez notre communauté de passionnés</p>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-white/70">Membres</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">500+</div>
              <div className="text-white/70">Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-white">50+</div>
              <div className="text-white/70">Villes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
