import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lieux Incontournables - Japon sit',
  description: 'Découvrez les lieux les plus fascinants du Japon : temples, villes, parcs et destinations secrètes',
};

export default function LieuxPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sakura-pink/20 via-white to-cherry-blossom/20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-japan-red mb-6 font-japanese">
            Lieux Incontournables
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explorez les destinations les plus emblématiques du Japon, des temples anciens aux gratte-ciels modernes
          </p>
        </div>

        {/* Major Cities */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-japan-red mb-12 font-japanese text-center">
            Grandes Villes
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-japan-red to-sunset-orange"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-japan-red mb-4">Tokyo</h3>
                <p className="text-gray-600 mb-4">
                  La capitale ultra-moderne, mélange fascinant de tradition et d&apos;innovation.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-japan-red rounded-full mr-3"></span>
                    Quartier de Shibuya
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-japan-red rounded-full mr-3"></span>
                    Senso-ji à Asakusa
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-japan-red rounded-full mr-3"></span>
                    Tokyo Skytree
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-temple-gold to-sunset-orange"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-japan-red mb-4">Kyoto</h3>
                <p className="text-gray-600 mb-4">
                  L&apos;ancienne capitale impériale, gardienne des traditions japonaises.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-temple-gold rounded-full mr-3"></span>
                    Fushimi Inari Taisha
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-temple-gold rounded-full mr-3"></span>
                    Kinkaku-ji (Pavillon d&apos;Or)
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-temple-gold rounded-full mr-3"></span>
                    Quartier de Gion
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-indigo-blue to-sakura-pink"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-japan-red mb-4">Osaka</h3>
                <p className="text-gray-600 mb-4">
                  La cuisine de rue, les châteaux et l&apos;hospitalité du Kansai.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-indigo-blue rounded-full mr-3"></span>
                    Château d&apos;Osaka
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-indigo-blue rounded-full mr-3"></span>
                    Dotonbori
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-indigo-blue rounded-full mr-3"></span>
                    Universal Studios Japan
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Temples & Shrines */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-japan-red mb-12 font-japanese text-center">
            Temples & Sanctuaires
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-temple-gold mb-4">Temples Bouddhistes</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-temple-gold mr-3">🏛️</span>
                  <div>
                    <strong>Kiyomizu-dera (Kyoto)</strong>
                    <p className="text-gray-600 text-sm">Temple en bois offrant une vue panoramique sur Kyoto</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-temple-gold mr-3">🏛️</span>
                  <div>
                    <strong>Todai-ji (Nara)</strong>
                    <p className="text-gray-600 text-sm">Abrite le Grand Bouddha de bronze</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-temple-gold mr-3">🏛️</span>
                  <div>
                    <strong>Zenko-ji (Nagano)</strong>
                    <p className="text-gray-600 text-sm">L&apos;un des temples les plus anciens du Japon</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-japan-red mb-4">Sanctuaires Shinto</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-japan-red mr-3">⛩️</span>
                  <div>
                    <strong>Fushimi Inari Taisha (Kyoto)</strong>
                    <p className="text-gray-600 text-sm">Milliers de torii vermillion dans la montagne</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-japan-red mr-3">⛩️</span>
                  <div>
                    <strong>Meiji Jingu (Tokyo)</strong>
                    <p className="text-gray-600 text-sm">Sanctuaire au cœur de la capitale</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-japan-red mr-3">⛩️</span>
                  <div>
                    <strong>Itsukushima (Hiroshima)</strong>
                    <p className="text-gray-600 text-sm">Le célèbre torii flottant</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Natural Places */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-japan-red mb-12 font-japanese text-center">
            Merveilles Naturelles
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-bamboo-green to-temple-gold"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-japan-red mb-2">Mont Fuji</h3>
                <p className="text-gray-600 text-sm">
                  Le symbole du Japon, volcan sacré et destination de pèlerinage
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-sakura-pink to-cherry-blossom"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-japan-red mb-2">Forêt de Bambous</h3>
                <p className="text-gray-600 text-sm">
                  Arashiyama à Kyoto, tunnel naturel de bambous géants
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-40 bg-gradient-to-br from-indigo-blue to-sunset-orange"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-japan-red mb-2">Hakone</h3>
                <p className="text-gray-600 text-sm">
                  Sources chaudes et vue sur le Mont Fuji depuis le lac Ashi
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Hidden Gems */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-japan-red mb-12 font-japanese text-center">
            Lieux Secrets
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-japan-red mb-4">Îles Méconnues</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-sakura-pink mr-3">🏝️</span>
                    <div>
                      <strong>Naoshima</strong>
                      <p className="text-gray-600 text-sm">L&apos;île de l&apos;art contemporain</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-sakura-pink mr-3">🏝️</span>
                    <div>
                      <strong>Yakushima</strong>
                      <p className="text-gray-600 text-sm">Forêt primitive et inspiration de Miyazaki</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-japan-red mb-4">Villages Traditionnels</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-bamboo-green mr-3">🏘️</span>
                    <div>
                      <strong>Shirakawa-go</strong>
                      <p className="text-gray-600 text-sm">Maisons aux toits de chaume</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-bamboo-green mr-3">🏘️</span>
                    <div>
                      <strong>Takayama</strong>
                      <p className="text-gray-600 text-sm">Ville historique des Alpes japonaises</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Tips */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-japan-red to-sunset-orange rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Conseils pour Visiter</h2>
            <p className="text-lg mb-6">
              Planifiez votre itinéraire en fonction des saisons et des festivals
            </p>
            <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/20 rounded-lg p-4">
                <h3 className="font-bold mb-2">🌸 Printemps</h3>
                <p className="text-sm">Sakura et températures douces</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h3 className="font-bold mb-2">🍂 Automne</h3>
                <p className="text-sm">Feuillages colorés et climat idéal</p>
              </div>
              <div className="bg-white/20 rounded-lg p-4">
                <h3 className="font-bold mb-2">❄️ Hiver</h3>
                <p className="text-sm">Moins de touristes et festivals lumineux</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
