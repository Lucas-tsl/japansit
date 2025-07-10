export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-japan-red via-sunset-orange to-temple-gold min-h-screen flex items-center justify-center overflow-hidden floating-particles">
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Éléments décoratifs animés */}
      <div className="absolute top-20 left-10 text-6xl opacity-30 animate-float hover-glow">🌸</div>
      <div className="absolute top-32 right-20 text-4xl opacity-40 animate-breathe delay-300">🏯</div>
      <div className="absolute bottom-40 left-20 text-5xl opacity-30 animate-gentle-rotate delay-500">⛩️</div>
      <div className="absolute bottom-20 right-10 text-3xl opacity-40 animate-bounce-gentle delay-200">🎋</div>
      <div className="absolute top-1/2 left-1/4 text-2xl opacity-20 animate-sakura-fall">🌸</div>
      <div className="absolute top-1/3 right-1/3 text-2xl opacity-20 animate-sakura-fall delay-300">�</div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-soft-zoom">
          <span className="block typewriter">Bienvenue au</span>
          <span className="block text-yellow-300 animate-color-pulse delay-200">Japon</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-white/90 mb-8 animate-elegant-slide delay-300">
          Votre guide ultime pour étudier, travailler, voyager et découvrir la culture japonaise
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-400">
          <a
            href="/etudier"
            className="btn-japan hover-lift smooth-transition hover-glow micro-bounce"
          >
            🎓 Étudier au Japon
          </a>
          <a
            href="/travailler"
            className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-japan-red smooth-transition hover-lift micro-bounce"
          >
            💼 Travailler au Japon
          </a>
          <a
            href="/voyager"
            className="bg-temple-gold text-japan-red px-8 py-4 rounded-full font-semibold hover:bg-yellow-300 smooth-transition hover-lift micro-bounce"
          >
            ✈️ Voyager au Japon
          </a>
        </div>
        
        <div className="mt-12 animate-fade-in-up delay-500">
          <p className="text-white/80 mb-4">Rejoignez notre communauté de passionnés</p>
          <div className="flex justify-center items-center space-x-8">
            <div className="text-center animate-breathe">
              <div className="text-2xl font-bold text-white">10K+</div>
              <div className="text-white/70">Membres</div>
            </div>
            <div className="text-center animate-breathe delay-100">
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
