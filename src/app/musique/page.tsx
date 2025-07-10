export const metadata = {
  title: 'Musique Japonaise - J-Pop, J-Rock et plus | JapanSit',
  description: 'Découvrez la richesse de la musique japonaise : J-Pop, J-Rock, playlists, artistes incontournables et culture musicale du Japon.',
};

export default function MusiquePage() {
  const genres = [
    {
      name: 'J-Pop',
      description: 'La pop japonaise moderne avec ses mélodies accrocheuses et ses artistes emblématiques',
      artists: ['Hikaru Utada', 'Arashi', 'Perfume', 'AKB48'],
      color: 'bg-pink-500'
    },
    {
      name: 'J-Rock',
      description: 'Le rock japonais, de l\'alternatif au metal, avec une énergie unique',
      artists: ['X Japan', 'One OK Rock', 'Babymetal', 'The Gazette'],
      color: 'bg-red-500'
    },
    {
      name: 'City Pop',
      description: 'Le style rétro des années 80 qui revient à la mode',
      artists: ['Mariya Takeuchi', 'Tatsuro Yamashita', 'Anri', 'Casiopea'],
      color: 'bg-purple-500'
    },
    {
      name: 'Vocaloid',
      description: 'Musique créée avec des voix synthétiques, phénomène unique au Japon',
      artists: ['Hatsune Miku', 'Kagamine Rin/Len', 'Megurine Luka', 'KAITO'],
      color: 'bg-blue-500'
    },
    {
      name: 'Anime Songs',
      description: 'Génériques d\'anime et musiques de films d\'animation',
      artists: ['Yoko Kanno', 'Hiroyuki Sawano', 'LiSA', 'Aimer'],
      color: 'bg-green-500'
    },
    {
      name: 'Traditionnelle',
      description: 'Musique traditionnelle japonaise avec shamisen, koto et taiko',
      artists: ['Toru Takemitsu', 'Michio Mamiya', 'Ensemble Nipponia', 'Kodo'],
      color: 'bg-orange-500'
    }
  ];

  const playlists = [
    {
      title: 'Best of J-Pop 2024',
      description: 'Les tubes J-Pop incontournables de cette année',
      tracks: 25,
      duration: '1h 45min',
      image: '🎵'
    },
    {
      title: 'J-Rock Essentials',
      description: 'Les classiques du rock japonais à connaître absolument',
      tracks: 30,
      duration: '2h 10min',
      image: '🎸'
    },
    {
      title: 'City Pop Vibes',
      description: 'L\'ambiance rétro des années 80 japonaises',
      tracks: 20,
      duration: '1h 25min',
      image: '🌃'
    },
    {
      title: 'Anime Hits',
      description: 'Les meilleurs génériques d\'anime de tous les temps',
      tracks: 35,
      duration: '2h 30min',
      image: '🎬'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 via-purple-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Musique Japonaise
              <span className="block text-3xl mt-2 text-pink-200">日本音楽</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto">
              Plongez dans l'univers fascinant de la musique japonaise, de la J-Pop moderne aux traditions ancestrales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#playlists"
                className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                🎵 Découvrir les playlists
              </a>
              <a
                href="#genres"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300"
              >
                🎌 Explorer les genres
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Genres musicaux */}
      <section id="genres" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Genres musicaux</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explorez la diversité de la musique japonaise à travers ses différents genres
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {genres.map((genre, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`h-32 ${genre.color} flex items-center justify-center`}>
                  <div className="text-center text-white">
                    <div className="text-4xl mb-2">🎵</div>
                    <div className="text-xl font-bold">{genre.name}</div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{genre.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Artistes populaires:</h4>
                    <div className="flex flex-wrap gap-2">
                      {genre.artists.map((artist, idx) => (
                        <span key={idx} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                          {artist}
                        </span>
                      ))}
                    </div>
                  </div>
                  <button className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors">
                    Écouter maintenant
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Playlists */}
      <section id="playlists" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Playlists populaires</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos sélections musicales pour découvrir le meilleur de la musique japonaise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {playlists.map((playlist, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-pink-400 to-purple-500 flex items-center justify-center">
                  <div className="text-6xl">{playlist.image}</div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{playlist.title}</h3>
                  <p className="text-gray-600 mb-4">{playlist.description}</p>
                  <div className="flex justify-between text-sm text-gray-500 mb-4">
                    <span>{playlist.tracks} titres</span>
                    <span>{playlist.duration}</span>
                  </div>
                  <button className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors">
                    ▶️ Écouter
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications de musique */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Où écouter ?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Les meilleures plateformes pour découvrir la musique japonaise
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🎵</div>
              <h3 className="text-xl font-bold mb-2">Spotify</h3>
              <p className="text-gray-600 mb-4">Playlists J-Pop et J-Rock</p>
              <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors">
                Ouvrir
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🎬</div>
              <h3 className="text-xl font-bold mb-2">YouTube Music</h3>
              <p className="text-gray-600 mb-4">Clips et concerts live</p>
              <button className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors">
                Ouvrir
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🎤</div>
              <h3 className="text-xl font-bold mb-2">Apple Music</h3>
              <p className="text-gray-600 mb-4">Musique haute qualité</p>
              <button className="bg-gray-900 text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                Ouvrir
              </button>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🎹</div>
              <h3 className="text-xl font-bold mb-2">Niconico</h3>
              <p className="text-gray-600 mb-4">Plateforme japonaise</p>
              <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                Ouvrir
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Partagez votre passion pour la musique japonaise</h2>
          <p className="text-xl mb-8">
            Rejoignez notre communauté et découvrez de nouveaux artistes avec d'autres passionnés
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/forum"
              className="bg-white text-pink-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
            >
              Rejoindre le forum
            </a>
            <a
              href="/newsletter"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-pink-600 transition-all duration-300"
            >
              Newsletter musicale
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
