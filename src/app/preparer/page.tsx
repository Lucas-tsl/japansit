import Link from 'next/link';

export default function PreparerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Se préparer pour le Japon
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">
              Guide complet de préparation
            </h2>
            <p className="text-gray-700 mb-4">
              Toutes les démarches administratives, conseils pratiques et 
              informations essentielles pour bien préparer votre séjour au Japon.
            </p>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📋 Démarches Visa
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Visa Touriste (90 jours)</h4>
                  <p className="text-gray-700">Gratuit pour les citoyens français, pas de visa requis</p>
                </div>
                <div className="border-l-4 border-green-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Visa Étudiant</h4>
                  <p className="text-gray-700">Certificat d&apos;éligibilité (COE) requis, 3000¥</p>
                </div>
                <div className="border-l-4 border-purple-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Visa Working Holiday</h4>
                  <p className="text-gray-700">18-30 ans, 1 an renouvelable, gratuit</p>
                </div>
                <div className="border-l-4 border-orange-500 pl-4">
                  <h4 className="font-semibold text-gray-900">Visa Travail</h4>
                  <p className="text-gray-700">Offre d&apos;emploi requise, COE, 3000¥</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🏠 Logement
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Court terme</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Airbnb (3000-8000¥/nuit)</li>
                    <li>• Auberges de jeunesse (2000-4000¥/nuit)</li>
                    <li>• Capsule hotels (3000-5000¥/nuit)</li>
                    <li>• Ryokan (10000-30000¥/nuit)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Long terme</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Appartement (60000-150000¥/mois)</li>
                    <li>• Share house (40000-80000¥/mois)</li>
                    <li>• Résidence étudiante (30000-60000¥/mois)</li>
                    <li>• Famille d&apos;accueil (60000-100000¥/mois)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                🍽️ Nourriture et Restauration
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Restaurants</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Ramen shop (500-1000¥)</li>
                    <li>• Kaiten sushi (100-300¥/assiette)</li>
                    <li>• Izakaya (2000-4000¥/personne)</li>
                    <li>• Restaurant familial (1000-2000¥)</li>
                    <li>• Gastronomie (5000-20000¥+)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Faire ses courses</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Konbini (24h/24, pratique)</li>
                    <li>• Supermarché (moins cher)</li>
                    <li>• Depachika (sous-sol grands magasins)</li>
                    <li>• Marché local (produits frais)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                ✈️ Vol et Transport
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Vols Paris-Tokyo</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <strong>Direct :</strong> Air France, JAL, ANA (12h, 600-1200€)</li>
                    <li>• <strong>Escale :</strong> KLM, Lufthansa, Emirates (15-20h, 400-800€)</li>
                    <li>• <strong>Meilleure période :</strong> Janvier-mars, mai-juin</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Aéroports</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <strong>Narita (NRT) :</strong> 60km de Tokyo, Skyliner (41min, 2470¥)</li>
                    <li>• <strong>Haneda (HND) :</strong> 30km de Tokyo, Monorail (20min, 500¥)</li>
                    <li>• <strong>Kansai (KIX) :</strong> Pour Osaka/Kyoto, Rapid train (1h, 1210¥)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                📱 Préparation Numérique
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Apps essentielles</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Google Translate (appareil photo)</li>
                    <li>• Hyperdia (transports)</li>
                    <li>• Tabelog (restaurants)</li>
                    <li>• Suica (paiement transport)</li>
                    <li>• WeChat Pay / PayPay</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Internet</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Pocket WiFi (500-1000¥/jour)</li>
                    <li>• Carte SIM (2000-5000¥/mois)</li>
                    <li>• WiFi gratuit (konbini, gares)</li>
                    <li>• Roaming international</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                💰 Budget et Argent
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Change et banques</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Le Japon reste une société de cash</li>
                    <li>• Distributeurs 7-Eleven acceptent les cartes étrangères</li>
                    <li>• Taux de change : 1€ ≈ 140-160¥</li>
                    <li>• Cartes sans frais : Revolut, N26, Boursorama</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Coût de la vie</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Repas : 800-2000¥</li>
                    <li>• Transport local : 200-500¥/trajet</li>
                    <li>• Attractions : 300-2000¥/entrée</li>
                    <li>• Souvenirs : 500-5000¥</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-red-50 rounded-lg p-6 mt-8">
            <h3 className="text-xl font-semibold text-red-600 mb-4">
              ⚠️ Check-list avant le départ
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-700">
                <li>☐ Passeport valide (6 mois minimum)</li>
                <li>☐ Visa si nécessaire</li>
                <li>☐ Assurance voyage</li>
                <li>☐ Vaccinations à jour</li>
                <li>☐ Carte bancaire sans frais</li>
                <li>☐ Réservation hébergement</li>
              </ul>
              <ul className="space-y-2 text-gray-700">
                <li>☐ Adaptateur prise électrique</li>
                <li>☐ Apps téléchargées</li>
                <li>☐ Cash en yens</li>
                <li>☐ Numéros d&apos;urgence</li>
                <li>☐ Copies documents importants</li>
                <li>☐ Médicaments personnels</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/forum" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
              Posez vos questions sur le forum
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
