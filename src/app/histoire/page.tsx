import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Histoire du Japon - Japon sit',
  description: 'Voyage à travers l\'histoire du Japon : époques, événements marquants, et évolution culturelle',
};

export default function HistoirePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-japan-red/20 via-white to-temple-gold/20">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-japan-red mb-6 font-japanese">
            Histoire du Japon
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez l'histoire fascinante du Japon, des origines aux temps modernes
          </p>
        </div>

        {/* Timeline */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-japan-red mb-12 font-japanese text-center">
            Grandes Époques
          </h2>
          <div className="space-y-8">
            {/* Jomon Period */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-japan-red mb-2">14 000 - 300 av. J.-C.</div>
                  <div className="text-lg font-semibold text-gray-700">Période Jomon</div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold text-japan-red mb-3">縄文時代 - Jomon</h3>
                  <p className="text-gray-600 mb-4">
                    Première civilisation japonaise connue, caractérisée par une culture de chasseurs-cueilleurs 
                    et une poterie décorée de cordes (jomon).
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-japan-red rounded-full mr-3"></span>
                      Poterie décorée
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-japan-red rounded-full mr-3"></span>
                      Chasse et cueillette
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Heian Period */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sakura-pink mb-2">794 - 1185</div>
                  <div className="text-lg font-semibold text-gray-700">Période Heian</div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold text-japan-red mb-3">平安時代 - Heian</h3>
                  <p className="text-gray-600 mb-4">
                    Âge d'or de la culture aristocratique japonaise, naissance de la littérature classique 
                    et raffinement des arts.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-sakura-pink rounded-full mr-3"></span>
                      Le Dit du Genji
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-sakura-pink rounded-full mr-3"></span>
                      Culture de cour
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kamakura Period */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-blue mb-2">1185 - 1333</div>
                  <div className="text-lg font-semibold text-gray-700">Période Kamakura</div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold text-japan-red mb-3">鎌倉時代 - Kamakura</h3>
                  <p className="text-gray-600 mb-4">
                    Premier shogunat, naissance de la classe guerrière et du bouddhisme zen. 
                    Invasions mongoles repoussées.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-indigo-blue rounded-full mr-3"></span>
                      Shogunat Minamoto
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-indigo-blue rounded-full mr-3"></span>
                      Invasions mongoles
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Edo Period */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-bamboo-green mb-2">1603 - 1868</div>
                  <div className="text-lg font-semibold text-gray-700">Période Edo</div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold text-japan-red mb-3">江戸時代 - Edo</h3>
                  <p className="text-gray-600 mb-4">
                    Ère de paix sous les Tokugawa, isolement du pays (sakoku), développement 
                    de la culture urbaine et des arts.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-bamboo-green rounded-full mr-3"></span>
                      Sakoku (isolement)
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-bamboo-green rounded-full mr-3"></span>
                      Ukiyo-e (estampes)
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Meiji Era */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-sunset-orange mb-2">1868 - 1912</div>
                  <div className="text-lg font-semibold text-gray-700">Ère Meiji</div>
                </div>
                <div className="md:col-span-3">
                  <h3 className="text-xl font-bold text-japan-red mb-3">明治時代 - Meiji</h3>
                  <p className="text-gray-600 mb-4">
                    Restauration impériale, modernisation rapide, ouverture à l'Occident 
                    et transformation en puissance mondiale.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-sunset-orange rounded-full mr-3"></span>
                      Modernisation
                    </div>
                    <div className="flex items-center text-sm text-gray-500">
                      <span className="w-2 h-2 bg-sunset-orange rounded-full mr-3"></span>
                      Ouverture au monde
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Figures */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-japan-red mb-12 font-japanese text-center">
            Personnages Historiques
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-japan-red to-sunset-orange"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-japan-red mb-2">Oda Nobunaga</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Daimyo révolutionnaire qui débuta l'unification du Japon au 16ème siècle.
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">Période:</span> 1534-1582
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-temple-gold to-sunset-orange"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-japan-red mb-2">Tokugawa Ieyasu</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Fondateur du shogunat Tokugawa qui gouverna le Japon pendant 265 ans.
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">Période:</span> 1543-1616
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-indigo-blue to-sakura-pink"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-japan-red mb-2">Empereur Meiji</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Empereur qui présida à la modernisation et à l'ouverture du Japon.
                </p>
                <div className="text-sm text-gray-500">
                  <span className="font-semibold">Période:</span> 1852-1912
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural Evolution */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-japan-red mb-12 font-japanese text-center">
            Évolution Culturelle
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-japan-red mb-4">Arts & Littérature</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-japan-red mr-3">📚</span>
                  <div>
                    <strong>Époque Heian</strong>
                    <p className="text-gray-600 text-sm">Le Dit du Genji, premier roman au monde</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-japan-red mr-3">🎭</span>
                  <div>
                    <strong>Époque Kamakura</strong>
                    <p className="text-gray-600 text-sm">Naissance du théâtre Nô</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-japan-red mr-3">🎨</span>
                  <div>
                    <strong>Époque Edo</strong>
                    <p className="text-gray-600 text-sm">Ukiyo-e et culture populaire</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-japan-red mb-4">Innovations Sociales</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-temple-gold mr-3">⚖️</span>
                  <div>
                    <strong>Système des Castes</strong>
                    <p className="text-gray-600 text-sm">Shi-no-ko-sho (guerriers, fermiers, artisans, marchands)</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-temple-gold mr-3">🏫</span>
                  <div>
                    <strong>Éducation</strong>
                    <p className="text-gray-600 text-sm">Écoles temple (terakoya) pendant Edo</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-temple-gold mr-3">🌾</span>
                  <div>
                    <strong>Agriculture</strong>
                    <p className="text-gray-600 text-sm">Techniques avancées de riziculture</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Modern Era */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-japan-red mb-12 font-japanese text-center">
            Japon Moderne
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold text-japan-red mb-2">Industrialisation</h3>
                <p className="text-gray-600 text-sm">
                  Transformation rapide en puissance industrielle moderne
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🗾</div>
                <h3 className="text-xl font-bold text-japan-red mb-2">Reconstruction</h3>
                <p className="text-gray-600 text-sm">
                  Miracle économique d'après-guerre (1945-1990)
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-japan-red mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  Leader mondial en technologie et culture populaire
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Historical Sites */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-japan-red mb-12 font-japanese text-center">
            Sites Historiques
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-japan-red to-sunset-orange"></div>
              <div className="p-4">
                <h3 className="font-bold text-japan-red mb-2">Château d'Himeji</h3>
                <p className="text-gray-600 text-sm">Chef-d'œuvre d'architecture militaire</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-temple-gold to-sunset-orange"></div>
              <div className="p-4">
                <h3 className="font-bold text-japan-red mb-2">Nijo-jo</h3>
                <p className="text-gray-600 text-sm">Palais des shogun Tokugawa</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-indigo-blue to-sakura-pink"></div>
              <div className="p-4">
                <h3 className="font-bold text-japan-red mb-2">Hiroshima</h3>
                <p className="text-gray-600 text-sm">Mémorial de la paix</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-32 bg-gradient-to-br from-bamboo-green to-temple-gold"></div>
              <div className="p-4">
                <h3 className="font-bold text-japan-red mb-2">Nikko</h3>
                <p className="text-gray-600 text-sm">Sanctuaires et mausolées</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-japan-red to-temple-gold rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Découvrez les Traditions Vivantes</h2>
            <p className="text-lg mb-6">
              Explorez comment l'histoire a façonné les traditions japonaises d'aujourd'hui
            </p>
            <button className="bg-white text-japan-red font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
              Explorer les Traditions
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
