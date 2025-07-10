export default function NewsletterSignup() {
  return (
    <section className="py-20 bg-gradient-to-br from-red-600 via-orange-600 to-yellow-600 relative overflow-hidden">
      {/* Éléments décoratifs animés */}
      <div className="absolute top-10 left-10 text-4xl opacity-30 animate-float">📧</div>
      <div className="absolute top-20 right-20 text-3xl opacity-20 animate-gentle-rotate">🌸</div>
      <div className="absolute bottom-10 left-1/4 text-2xl opacity-25 animate-bounce-gentle">✨</div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="relative">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in-up">
              Restez Connecté au Japon
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto animate-fade-in-up delay-200">
              Recevez nos derniers articles, conseils exclusifs et actualités sur le Japon directement dans votre boîte mail
            </p>
            
            <form className="max-w-md mx-auto animate-fade-in-up delay-400">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-6 py-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-white/50 text-lg hover-lift smooth-transition"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-red-600 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg hover-glow micro-bounce"
                >
                  S&apos;abonner
                </button>
              </div>
            </form>
            
            <div className="mt-8 flex items-center justify-center space-x-8 text-white/80">
              <div className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Pas de spam</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Contenu exclusif</span>
              </div>
              <div className="flex items-center">
                <span className="mr-2">✓</span>
                <span>Désabonnement facile</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
