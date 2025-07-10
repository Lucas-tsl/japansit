import Link from 'next/link';

export default function ModePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Mode Japonaise
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">
              Styles vestimentaires japonais
            </h2>
            <p className="text-gray-700 mb-4">
              Découvrez les différents styles de mode japonaise, des plus traditionnels 
              aux plus avant-gardistes qui influencent la mode mondiale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🌸 Styles Traditionnels
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Kimono</h4>
                  <p className="text-gray-700 text-sm">Vêtement traditionnel japonais</p>
                  <p className="text-gray-700">Porté lors d'occasions spéciales, cérémonies</p>
                </div>
                <div className="border-l-4 border-pink-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Yukata</h4>
                  <p className="text-gray-700 text-sm">Kimono d'été en coton</p>
                  <p className="text-gray-700">Festivals, onsen, occasions décontractées</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Hakama</h4>
                  <p className="text-gray-700 text-sm">Pantalon traditionnel large</p>
                  <p className="text-gray-700">Arts martiaux, cérémonies de remise de diplômes</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🎭 Styles Alternatifs
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Harajuku</h4>
                  <p className="text-gray-700 text-sm">Excentrique, coloré, créatif</p>
                  <p className="text-gray-700">Mélange de kawaii, punk, gothic</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Cosplay</h4>
                  <p className="text-gray-700 text-sm">Costume de personnages</p>
                  <p className="text-gray-700">Anime, manga, jeux vidéo</p>
                </div>
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Visual Kei</h4>
                  <p className="text-gray-700 text-sm">Style rock japonais</p>
                  <p className="text-gray-700">Maquillage théâtral, androgyne</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                👗 Styles Kawaii
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-pink-400 pl-4">
                  <h4 className="font-semibold text-gray-900">Lolita</h4>
                  <p className="text-gray-700 text-sm">Élégant, victorien, poupée</p>
                  <p className="text-gray-700">Sweet, Gothic, Classic Lolita</p>
                </div>
                <div className="border-l-4 border-purple-400 pl-4">
                  <h4 className="font-semibold text-gray-900">Fairy Kei</h4>
                  <p className="text-gray-700 text-sm">Pastel, mignon, vintage</p>
                  <p className="text-gray-700">Couleurs douces, My Little Pony</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <h4 className="font-semibent text-gray-900">Decora</h4>
                  <p className="text-gray-700 text-sm">Surchargé d'accessoires</p>
                  <p className="text-gray-700">Barrettes, peluches, couleurs vives</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🏢 Styles Urbains
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-gray-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Minimalist</h4>
                  <p className="text-gray-700 text-sm">Épuré, monochrome</p>
                  <p className="text-gray-700">Uniqlo, Muji, COS</p>
                </div>
                <div className="border-l-4 border-black pl-4">
                  <h4 className="font-semibold text-gray-900">Streetwear</h4>
                  <p className="text-gray-700 text-sm">Urbain, décontracté</p>
                  <p className="text-gray-700">BAPE, Comme des Garçons, Yohji Yamamoto</p>
                </div>
                <div className="border-l-4 border-red-400 pl-4">
                  <h4 className="font-semibold text-gray-900">Gyaru</h4>
                  <p className="text-gray-700 text-sm">Glamour, bronzé, extravagant</p>
                  <p className="text-gray-700">Cheveux décolorés, maquillage prononcé</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              🛍️ Marques Japonaises Emblématiques
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Luxe & Avant-garde</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Comme des Garçons</li>
                  <li>• Yohji Yamamoto</li>
                  <li>• Issey Miyake</li>
                  <li>• Kenzo</li>
                  <li>• Junya Watanabe</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Streetwear</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• A Bathing Ape (BAPE)</li>
                  <li>• Neighborhood</li>
                  <li>• Undercover</li>
                  <li>• Visvim</li>
                  <li>• Human Made</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Accessible</h4>
                <ul className="space-y-1 text-gray-700">
                  <li>• Uniqlo</li>
                  <li>• Muji</li>
                  <li>• GU</li>
                  <li>• Onitsuka Tiger</li>
                  <li>• Asics</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              🌟 Quartiers Mode à Tokyo
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Harajuku</h4>
                <p className="text-gray-700 mb-2">Épicentre de la mode alternative japonaise</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Takeshita Street (kawaii, cosplay)</li>
                  <li>• Omotesando (luxe, international)</li>
                  <li>• Cat Street (vintage, indépendant)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Shibuya</h4>
                <p className="text-gray-700 mb-2">Mode jeune et tendance</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Center Gai (gyaru, streetwear)</li>
                  <li>• 109 (mode féminine)</li>
                  <li>• Shibuya Sky (observation)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Ginza</h4>
                <p className="text-gray-700 mb-2">Luxe et sophistication</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Grands magasins (Mitsukoshi, Ginza Six)</li>
                  <li>• Marques de luxe internationales</li>
                  <li>• Artisanat japonais haut de gamme</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Shinjuku</h4>
                <p className="text-gray-700 mb-2">Diversité et accessibilité</p>
                <ul className="space-y-1 text-gray-700 text-sm">
                  <li>• Lumine (mode féminine)</li>
                  <li>• Takashimaya Times Square</li>
                  <li>• Don Quijote (tout et n'importe quoi)</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              💡 Conseils pour adopter la mode japonaise
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Commencez doucement :</strong> Intégrez des éléments par petites touches</li>
              <li>• <strong>Qualité over quantité :</strong> Privilégiez des pièces bien faites</li>
              <li>• <strong>Mixez les styles :</strong> Combinez traditionnel et moderne</li>
              <li>• <strong>Accessoirisez :</strong> Les détails font la différence</li>
              <li>• <strong>Assumez votre style :</strong> La mode japonaise célèbre l'individualité</li>
              <li>• <strong>Respectez les codes :</strong> Apprenez les règles avant de les enfreindre</li>
            </ul>
          </div>

          <div className="mt-8 text-center">
            <Link href="/forum" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
              Partagez vos looks sur le forum
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
