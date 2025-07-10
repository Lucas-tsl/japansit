import Link from 'next/link';

export default function LanguePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Apprendre le Japonais
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">
              Guide complet pour apprendre le japonais
            </h2>
            <p className="text-gray-700 mb-4">
              Découvrez les meilleures méthodes, applications et ressources 
              pour maîtriser la langue japonaise efficacement.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📱 Applications recommandées
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Duolingo</h4>
                  <p className="text-gray-700 text-sm">Gratuit • Débutant à intermédiaire</p>
                  <p className="text-gray-700">Parfait pour commencer, leçons courtes et ludiques</p>
                </div>
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">WaniKani</h4>
                  <p className="text-gray-700 text-sm">Payant • Kanji spécialisé</p>
                  <p className="text-gray-700">Système SRS pour apprendre 2000+ kanji</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Anki</h4>
                  <p className="text-gray-700 text-sm">Gratuit • Tous niveaux</p>
                  <p className="text-gray-700">Cartes mémoire avec répétition espacée</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Busuu</h4>
                  <p className="text-gray-700 text-sm">Payant • Débutant à avancé</p>
                  <p className="text-gray-700">Cours structurés avec correction par natifs</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🎓 Formations et Cours
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900">INALCO</h4>
                  <p className="text-gray-700 text-sm">Paris • Cours universitaires</p>
                  <p className="text-gray-700">Formation complète en japonais</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Maison de la Culture du Japon</h4>
                  <p className="text-gray-700 text-sm">Paris • Cours culturels</p>
                  <p className="text-gray-700">Apprentissage avec contexte culturel</p>
                </div>
                <div className="border-l-4 border-teal-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Italki</h4>
                  <p className="text-gray-700 text-sm">En ligne • Professeurs natifs</p>
                  <p className="text-gray-700">Cours particuliers personnalisés</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Babbel</h4>
                  <p className="text-gray-700 text-sm">En ligne • Méthode structurée</p>
                  <p className="text-gray-700">Apprentissage progressif et pratique</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📚 Ressources Gratuites
              </h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🌐</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Tae Kim's Grammar</h4>
                    <p className="text-gray-700 text-sm">Guide complet de grammaire japonaise</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">📺</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">JapanesePod101</h4>
                    <p className="text-gray-700 text-sm">Podcasts et leçons vidéo</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">📖</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Jisho.org</h4>
                    <p className="text-gray-700 text-sm">Dictionnaire japonais-anglais</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-2xl">🎬</span>
                  <div>
                    <h4 className="font-semibold text-gray-900">Anime avec sous-titres</h4>
                    <p className="text-gray-700 text-sm">Immersion culturelle et linguistique</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🎯 Certifications JLPT
              </h3>
              <div className="space-y-3">
                <div className="bg-red-50 p-3 rounded">
                  <h4 className="font-semibold text-red-600">N5 (Débutant)</h4>
                  <p className="text-gray-700 text-sm">800 mots • 103 kanji • Phrases simples</p>
                </div>
                <div className="bg-orange-50 p-3 rounded">
                  <h4 className="font-semibold text-orange-600">N4 (Élémentaire)</h4>
                  <p className="text-gray-700 text-sm">1500 mots • 181 kanji • Conversations basiques</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded">
                  <h4 className="font-semibold text-yellow-600">N3 (Intermédiaire)</h4>
                  <p className="text-gray-700 text-sm">3750 mots • 284 kanji • Contextes variés</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <h4 className="font-semibold text-green-600">N2 (Avancé)</h4>
                  <p className="text-gray-700 text-sm">6000 mots • 415 kanji • Travail/études</p>
                </div>
                <div className="bg-blue-50 p-3 rounded">
                  <h4 className="font-semibold text-blue-600">N1 (Expert)</h4>
                  <p className="text-gray-700 text-sm">10000 mots • 1000+ kanji • Niveau natif</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              🗾 Méthode d'apprentissage recommandée
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-900">1. Hiragana & Katakana (1-2 mois)</h4>
                <p className="text-gray-700">Maîtrisez les deux alphabets syllabiques avant tout</p>
              </div>
              <div className="border-l-4 border-orange-500 pl-4">
                <h4 className="font-semibold text-gray-900">2. Grammaire de base (3-6 mois)</h4>
                <p className="text-gray-700">Particules, conjugaisons, structures de phrases</p>
              </div>
              <div className="border-l-4 border-yellow-500 pl-4">
                <h4 className="font-semibold text-gray-900">3. Kanji progressifs (continu)</h4>
                <p className="text-gray-700">Commencez par les plus fréquents, 10-20 par semaine</p>
              </div>
              <div className="border-l-4 border-green-500 pl-4">
                <h4 className="font-semibold text-gray-900">4. Pratique orale (dès le début)</h4>
                <p className="text-gray-700">Conversations avec natifs, shadowing, répétition</p>
              </div>
              <div className="border-l-4 border-blue-500 pl-4">
                <h4 className="font-semibold text-gray-900">5. Immersion (niveau intermédiaire)</h4>
                <p className="text-gray-700">Manga, anime, dramas, actualités japonaises</p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              💡 Conseils pour réussir
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Régularité :</strong> 15-30 minutes par jour valent mieux que 3h une fois par semaine</li>
              <li>• <strong>Diversité :</strong> Combinez apps, cours, médias japonais et conversation</li>
              <li>• <strong>Patience :</strong> Le japonais demande 2200h d'étude pour les francophones</li>
              <li>• <strong>Pratique :</strong> Écrivez un journal, parlez tout seul, trouvez un tandem</li>
              <li>• <strong>Culture :</strong> Comprenez le contexte culturel derrière la langue</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <Link href="/forum" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
              Rejoindre la communauté d'apprentissage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
