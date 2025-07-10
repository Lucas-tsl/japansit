import Link from 'next/link';

export default function VoyagerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Voyager au Japon
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">
              Guide complet pour voyager au Japon
            </h2>
            <p className="text-gray-700 mb-4">
              Découvrez les meilleures destinations, conseils pratiques et 
              informations essentielles pour votre voyage au Japon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Destinations incontournables
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Tokyo :</strong> Shibuya, Shinjuku, Asakusa, Harajuku</li>
                <li>• <strong>Kyoto :</strong> Fushimi Inari, Arashiyama, Gion</li>
                <li>• <strong>Osaka :</strong> Dotonbori, Château d'Osaka, Kuromon Market</li>
                <li>• <strong>Nara :</strong> Parc aux cerfs, Todai-ji</li>
                <li>• <strong>Hiroshima :</strong> Mémorial de la paix, Miyajima</li>
                <li>• <strong>Mont Fuji :</strong> Kawaguchi-ko, Hakone</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Meilleures périodes
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Printemps (mars-mai) :</strong> Sakura, temps doux</li>
                <li>• <strong>Automne (septembre-novembre) :</strong> Koyo, températures agréables</li>
                <li>• <strong>Été (juin-août) :</strong> Festivals, mais chaud et humide</li>
                <li>• <strong>Hiver (décembre-février) :</strong> Neige, moins de touristes</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Transports
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>JR Pass :</strong> 7 jours (29,650¥), 14 jours (47,250¥)</li>
                <li>• <strong>Shinkansen :</strong> Tokyo-Kyoto (2h15), Tokyo-Osaka (2h30)</li>
                <li>• <strong>Métro :</strong> Cartes IC (Suica, Pasmo)</li>
                <li>• <strong>Bus :</strong> Économique pour les longues distances</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Budget quotidien
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Backpacker :</strong> 6,000-8,000¥/jour</li>
                <li>• <strong>Voyageur moyen :</strong> 12,000-15,000¥/jour</li>
                <li>• <strong>Confort :</strong> 20,000-30,000¥/jour</li>
                <li>• <strong>Luxe :</strong> 40,000¥+/jour</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Conseils pratiques
            </h3>
            <div className="prose text-gray-700">
              <p className="mb-4">
                <strong>Hébergement :</strong> Réservez à l'avance, surtout pendant les saisons hautes. 
                Les ryokan offrent une expérience authentique, les capsule hotels sont économiques.
              </p>
              <p className="mb-4">
                <strong>Nourriture :</strong> Essayez les konbini (supérettes 24h/24), les ramen shops, 
                et n'hésitez pas à goûter la street food.
              </p>
              <p className="mb-4">
                <strong>Étiquette :</strong> Retirez vos chaussures dans les maisons, ne mangez pas 
                en marchant, respectez les files d'attente.
              </p>
              <p className="mb-4">
                <strong>Langue :</strong> Apprenez quelques phrases de base en japonais, 
                téléchargez Google Translate avec l'appareil photo.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Itinéraires recommandés
            </h3>
            <div className="space-y-4">
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-900">1 semaine - Route classique</h4>
                <p className="text-gray-700">Tokyo (3 jours) → Kyoto (2 jours) → Osaka (2 jours)</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-900">2 semaines - Route étendue</h4>
                <p className="text-gray-700">Tokyo (4 jours) → Nikko (1 jour) → Hakone (1 jour) → Kyoto (3 jours) → Nara (1 jour) → Osaka (2 jours) → Hiroshima (2 jours)</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <h4 className="font-semibold text-gray-900">3 semaines - Route complète</h4>
                <p className="text-gray-700">Ajoutez Takayama, Shirakawa-go, Kanazawa, et explorez Kyushu ou Hokkaido</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/forum" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
              Partagez vos expériences sur le forum
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
