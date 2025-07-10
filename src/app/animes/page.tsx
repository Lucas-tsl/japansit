import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Animés & Manga - Japon sit',
  description: 'Plongez dans l\'univers des animés et mangas japonais : studios, œuvres cultes, et culture otaku',
};

export default function AnimesPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-blue/10 via-sakura-pink/5 to-temple-gold/10 dark:from-indigo-blue/20 dark:via-sakura-pink/10 dark:to-temple-gold/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-japan-red dark:text-japan-red-light-light mb-6 font-japanese">
            Animés & Manga
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explorez l&apos;univers fascinant de l&apos;animation et de la bande dessinée japonaise
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">

        {/* Famous Studios */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-japan-red dark:text-japan-red-light-light mb-12 font-japanese text-center">
            Studios Légendaires
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-bamboo-green to-temple-gold"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-japan-red dark:text-japan-red-light mb-4">Studio Ghibli</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Les chefs-d&apos;œuvre de Miyazaki et Takahata qui ont enchanté le monde entier.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-bamboo-green rounded-full mr-3"></span>
                    Le Voyage de Chihiro
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-bamboo-green rounded-full mr-3"></span>
                    Mon Voisin Totoro
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-bamboo-green rounded-full mr-3"></span>
                    Princesse Mononoké
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-sunset-orange to-japan-red"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-japan-red dark:text-japan-red-light mb-4">Studio Madhouse</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Réputé pour ses animations de haute qualité et ses adaptations fidèles.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-sunset-orange rounded-full mr-3"></span>
                    Death Note
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-sunset-orange rounded-full mr-3"></span>
                    One Punch Man
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-sunset-orange rounded-full mr-3"></span>
                    Hunter x Hunter
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-indigo-blue to-sakura-pink"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-japan-red dark:text-japan-red-light mb-4">Studio Pierrot</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Spécialisé dans les shonen à long terme et les adaptations populaires.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-indigo-blue rounded-full mr-3"></span>
                    Naruto
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-indigo-blue rounded-full mr-3"></span>
                    Bleach
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-indigo-blue rounded-full mr-3"></span>
                    Black Clover
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Genres */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-japan-red dark:text-japan-red-light mb-12 font-japanese text-center">
            Genres Populaires
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-japan-red dark:text-japan-red-light mb-6">Shonen</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Destiné aux jeunes hommes, avec des thèmes d&apos;aventure et de combat.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">⚔️</span>
                  <div>
                    <strong>Dragon Ball</strong>
                    <p className="text-gray-500 text-sm">Le pionnier des shonen modernes</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🏴‍☠️</span>
                  <div>
                    <strong>One Piece</strong>
                    <p className="text-gray-500 text-sm">L&apos;aventure pirate ultime</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">⚡</span>
                  <div>
                    <strong>Demon Slayer</strong>
                    <p className="text-gray-500 text-sm">Animation révolutionnaire</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-japan-red dark:text-japan-red-light mb-6">Shojo</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Visant les jeunes femmes, avec des histoires romantiques et émotionnelles.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🌙</span>
                  <div>
                    <strong>Sailor Moon</strong>
                    <p className="text-gray-500 text-sm">L&apos;icône des magical girls</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">🌸</span>
                  <div>
                    <strong>Fruits Basket</strong>
                    <p className="text-gray-500 text-sm">Romance et famille</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <span className="text-2xl mr-3">💕</span>
                  <div>
                    <strong>Ouran High School Host Club</strong>
                    <p className="text-gray-500 text-sm">Comédie romantique</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Manga Industry */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-japan-red dark:text-japan-red-light mb-12 font-japanese text-center">
            L&apos;Industrie du Manga
          </h2>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-japan-red dark:text-japan-red-light mb-2">200M+</div>
                <p className="text-gray-600 dark:text-gray-300">Mangas vendus par an au Japon</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-temple-gold mb-2">40%</div>
                <p className="text-gray-600 dark:text-gray-300">Part du marché mondial de l&apos;édition</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-indigo-blue mb-2">3000+</div>
                <p className="text-gray-600 dark:text-gray-300">Nouveaux titres publiés chaque année</p>
              </div>
            </div>
          </div>
        </section>

        {/* Otaku Culture */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-japan-red dark:text-japan-red-light mb-12 font-japanese text-center">
            Culture Otaku
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-japan-red dark:text-japan-red-light mb-4">Lieux Emblématiques</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-sakura-pink mr-3">🏢</span>
                  <div>
                    <strong>Akihabara (Tokyo)</strong>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Le quartier électronique et otaku</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-sakura-pink mr-3">🎭</span>
                  <div>
                    <strong>Harajuku (Tokyo)</strong>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Mode kawaii et cosplay</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-sakura-pink mr-3">🏪</span>
                  <div>
                    <strong>Den Den Town (Osaka)</strong>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">L&apos;Akihabara du Kansai</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-japan-red dark:text-japan-red-light mb-4">Événements Majeurs</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-temple-gold mr-3">📅</span>
                  <div>
                    <strong>Comiket (Tokyo)</strong>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Plus grand salon manga au monde</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-temple-gold mr-3">🎨</span>
                  <div>
                    <strong>AnimeJapan</strong>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Salon officiel de l&apos;industrie</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-temple-gold mr-3">🎪</span>
                  <div>
                    <strong>World Cosplay Summit</strong>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Compétition internationale</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Trending Anime */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-japan-red dark:text-japan-red-light mb-12 font-japanese text-center">
            Animés Tendance 2024
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gradient-to-br from-japan-red to-sunset-orange"></div>
              <div className="p-4">
                <h3 className="font-bold text-japan-red dark:text-japan-red-light mb-2">Jujutsu Kaisen</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Action surnaturelle</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gradient-to-br from-indigo-blue to-sakura-pink"></div>
              <div className="p-4">
                <h3 className="font-bold text-japan-red dark:text-japan-red-light mb-2">Attack on Titan</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Final season</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gradient-to-br from-bamboo-green to-temple-gold"></div>
              <div className="p-4">
                <h3 className="font-bold text-japan-red dark:text-japan-red-light mb-2">My Hero Academia</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Super-héros japonais</p>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-40 bg-gradient-to-br from-sakura-pink to-cherry-blossom"></div>
              <div className="p-4">
                <h3 className="font-bold text-japan-red dark:text-japan-red-light mb-2">Spy x Family</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Comédie familiale</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-indigo-blue to-sakura-pink rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Rejoignez la Communauté</h2>
            <p className="text-lg mb-6">
              Partagez vos animés préférés et découvrez de nouvelles œuvres
            </p>
            <button className="bg-white text-indigo-blue font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
              Accéder au Forum
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
