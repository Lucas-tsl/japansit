import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Traditions Japonaises - Japon sit',
  description: 'Découvrez les traditions ancestrales du Japon : cérémonies, arts, philosophie et mode de vie',
};

export default function TraditionsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-temple-gold/10 via-japan-red/5 to-sakura-pink/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-japan-red mb-6 font-japanese">
            Traditions Japonaises
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Plongez dans l&apos;héritage culturel millénaire du Japon et ses traditions vivantes
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">

        {/* Tea Ceremony */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-japan-red mb-12 font-japanese text-center">
            Arts Traditionnels
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-bamboo-green to-temple-gold"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-japan-red mb-4">茶道 - Sado (Cérémonie du thé)</h3>
                <p className="text-gray-600 mb-4">
                  Art de préparer et de servir le thé matcha selon des règles précises, 
                  incarnant l&apos;harmonie, le respect, la pureté et la tranquillité.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-bamboo-green rounded-full mr-3"></span>
                    École Urasenke
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-bamboo-green rounded-full mr-3"></span>
                    École Omotesenke
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-bamboo-green rounded-full mr-3"></span>
                    École Mushanokojisenke
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-sakura-pink to-cherry-blossom"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-japan-red mb-4">華道 - Kado (Art floral)</h3>
                <p className="text-gray-600 mb-4">
                  L&apos;art d&apos;arranger les fleurs selon des principes esthétiques et spirituels, 
                  reflétant la beauté éphémère de la nature.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-sakura-pink rounded-full mr-3"></span>
                    École Ikenobo
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-sakura-pink rounded-full mr-3"></span>
                    École Ohara
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="w-2 h-2 bg-sakura-pink rounded-full mr-3"></span>
                    École Sogetsu
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Martial Arts */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-japan-red mb-12 font-japanese text-center">
            Arts Martiaux
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="h-32 bg-gradient-to-br from-japan-red to-sunset-orange rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-japan-red mb-2">空手 - Karate</h3>
              <p className="text-gray-600 text-sm">
                Art martial à mains nues développé à Okinawa, basé sur la discipline et la maîtrise de soi.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="h-32 bg-gradient-to-br from-indigo-blue to-sakura-pink rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-japan-red mb-2">柔道 - Judo</h3>
              <p className="text-gray-600 text-sm">
                &quot;La voie de la souplesse&quot;, art martial créé par Jigoro Kano, sport olympique.
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="h-32 bg-gradient-to-br from-bamboo-green to-temple-gold rounded-lg mb-4"></div>
              <h3 className="text-xl font-bold text-japan-red mb-2">剣道 - Kendo</h3>
              <p className="text-gray-600 text-sm">
                Escrime japonaise au sabre de bambou, héritière des techniques de sabre des samouraïs.
              </p>
            </div>
          </div>
        </section>

        {/* Festivals */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-japan-red mb-12 font-japanese text-center">
            Festivals & Célébrations
          </h2>
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-japan-red mb-4">Festivals Saisonniers</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">🌸</span>
                      <div>
                        <strong>Hanami (Printemps)</strong>
                        <p className="text-gray-600 text-sm">Observation des fleurs de cerisier</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">🎋</span>
                      <div>
                        <strong>Tanabata (Juillet)</strong>
                        <p className="text-gray-600 text-sm">Festival des étoiles</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">🍂</span>
                      <div>
                        <strong>Momijigari (Automne)</strong>
                        <p className="text-gray-600 text-sm">Observation des feuilles colorées</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-japan-red mb-4">Célébrations Nationales</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">🎌</span>
                      <div>
                        <strong>Nouvel An (Shogatsu)</strong>
                        <p className="text-gray-600 text-sm">Fête la plus importante de l&apos;année</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">🎎</span>
                      <div>
                        <strong>Hinamatsuri (Mars)</strong>
                        <p className="text-gray-600 text-sm">Fête des petites filles</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-2xl mr-3">🎏</span>
                      <div>
                        <strong>Kodomo no Hi (Mai)</strong>
                        <p className="text-gray-600 text-sm">Fête des enfants</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Philosophy & Religion */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-japan-red mb-12 font-japanese text-center">
            Philosophie & Spiritualité
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-temple-gold mb-4">Bouddhisme</h3>
              <p className="text-gray-600 mb-4">
                Arrivé au Japon au 6ème siècle, le bouddhisme a profondément influencé la culture japonaise.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-temple-gold mr-3">🏛️</span>
                  <div>
                    <strong>Zen</strong>
                    <p className="text-gray-600 text-sm">Méditation et simplicité</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-temple-gold mr-3">🙏</span>
                  <div>
                    <strong>Terre Pure</strong>
                    <p className="text-gray-600 text-sm">Dévotion à Amida Buddha</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-japan-red mb-4">Shintoïsme</h3>
              <p className="text-gray-600 mb-4">
                Religion autochtone du Japon, vénération des kami (divinités) et de la nature.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <span className="text-japan-red mr-3">⛩️</span>
                  <div>
                    <strong>Sanctuaires</strong>
                    <p className="text-gray-600 text-sm">Lieux de culte des kami</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-japan-red mr-3">🌿</span>
                  <div>
                    <strong>Purification</strong>
                    <p className="text-gray-600 text-sm">Rituels de purification</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Traditional Crafts */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-japan-red mb-12 font-japanese text-center">
            Artisanat Traditionnel
          </h2>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="h-24 bg-gradient-to-br from-indigo-blue to-sakura-pink rounded-lg mb-4"></div>
              <h3 className="font-bold text-japan-red mb-2">Céramique</h3>
              <p className="text-gray-600 text-sm">Raku, Imari, Kutani</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="h-24 bg-gradient-to-br from-temple-gold to-sunset-orange rounded-lg mb-4"></div>
              <h3 className="font-bold text-japan-red mb-2">Laque</h3>
              <p className="text-gray-600 text-sm">Urushi, art du vernissage</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="h-24 bg-gradient-to-br from-bamboo-green to-temple-gold rounded-lg mb-4"></div>
              <h3 className="font-bold text-japan-red mb-2">Textile</h3>
              <p className="text-gray-600 text-sm">Kimono, teinture</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="h-24 bg-gradient-to-br from-japan-red to-sunset-orange rounded-lg mb-4"></div>
              <h3 className="font-bold text-japan-red mb-2">Ferronnerie</h3>
              <p className="text-gray-600 text-sm">Katana, outils</p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-japan-red mb-12 font-japanese text-center">
            Valeurs Traditionnelles
          </h2>
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🙏</div>
                <h3 className="text-xl font-bold text-japan-red mb-2">Respect</h3>
                <p className="text-gray-600 text-sm">
                  Respect des autres, des anciens et de la nature
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">⚖️</div>
                <h3 className="text-xl font-bold text-japan-red mb-2">Harmonie</h3>
                <p className="text-gray-600 text-sm">
                  Équilibre et éviter les conflits
                </p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">💪</div>
                <h3 className="text-xl font-bold text-japan-red mb-2">Persévérance</h3>
                <p className="text-gray-600 text-sm">
                  Gaman - endurance et détermination
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-temple-gold to-japan-red rounded-xl p-8 text-white">
            <h2 className="text-3xl font-bold mb-4">Explorez Plus Profondément</h2>
            <p className="text-lg mb-6">
              Découvrez l&apos;histoire qui a façonné ces traditions millénaires
            </p>
            <button className="bg-white text-temple-gold font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
              Découvrir l&apos;Histoire
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}