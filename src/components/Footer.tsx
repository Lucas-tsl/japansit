import ShareButton from './ShareButton';

export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white theme-transition">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl animate-bounce-gentle">🇯🇵</span>
              <span className="text-xl font-bold text-red-600">JapanSit</span>
            </div>
            <p className="text-gray-300 mb-4">
              Votre guide ultime pour découvrir, étudier, travailler et vivre au Japon.
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex space-x-4">
                <a href="#" className="text-2xl hover:text-red-600 transition-colors hover-scale">📺</a>
                <a href="#" className="text-2xl hover:text-red-600 transition-colors hover-scale">📸</a>
                <a href="#" className="text-2xl hover:text-red-600 transition-colors hover-scale">🐦</a>
              </div>
              <ShareButton 
                title="JapanSit - Votre guide du Japon"
                description="Découvrez, étudiez, travaillez et vivez au Japon"
                className="ml-4"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Découvrir</h3>
            <ul className="space-y-2">
              <li><a href="/etudier" className="text-gray-300 hover:text-white transition-colors hover-lift">Étudier au Japon</a></li>
              <li><a href="/travailler" className="text-gray-300 hover:text-white transition-colors hover-lift">Travailler au Japon</a></li>
              <li><a href="/voyager" className="text-gray-300 hover:text-white transition-colors hover-lift">Voyager au Japon</a></li>
              <li><a href="/se-preparer" className="text-gray-300 hover:text-white transition-colors hover-lift">Se préparer</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Culture</h3>
            <ul className="space-y-2">
              <li><a href="/musique" className="text-gray-300 hover:text-white transition-colors">Musique japonaise</a></li>
              <li><a href="/mode" className="text-gray-300 hover:text-white transition-colors">Mode japonaise</a></li>
              <li><a href="/animes" className="text-gray-300 hover:text-white transition-colors">Animés & Manga</a></li>
              <li><a href="/culture" className="text-gray-300 hover:text-white transition-colors">Traditions</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-yellow-400">Communauté</h3>
            <ul className="space-y-2">
              <li><a href="/forum" className="text-gray-300 hover:text-white transition-colors">Forum</a></li>
              <li><a href="/langue" className="text-gray-300 hover:text-white transition-colors">Apprendre le japonais</a></li>
              <li><a href="/lieux" className="text-gray-300 hover:text-white transition-colors">Lieux importants</a></li>
              <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-300">
            © 2024 JapanSit. Tous droits réservés. Fait avec ❤️ pour la communauté française au Japon.
          </p>
        </div>
      </div>
    </footer>
  );
}
