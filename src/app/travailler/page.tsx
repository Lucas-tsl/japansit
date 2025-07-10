import Link from 'next/link';

export default function TravaillerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            Travailler au Japon
          </h1>
          
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-2xl font-semibold text-red-600 mb-4">
              Guide complet pour travailler au Japon
            </h2>
            <p className="text-gray-700 mb-4">
              Découvrez tout ce qu&apos;il faut savoir pour décrocher un emploi au Japon, 
              de la recherche d&apos;emploi aux visas de travail.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Types de visa de travail
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Visa de travail qualifié (技術・人文知識・国際業務)</li>
                <li>• Visa Working Holiday</li>
                <li>• Visa d&apos;investisseur/gérant d&apos;entreprise</li>
                <li>• Visa de professeur</li>
                <li>• Visa d&apos;ingénieur</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Secteurs qui recrutent
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Technologie et IT</li>
                <li>• Enseignement (anglais/français)</li>
                <li>• Tourisme et hôtellerie</li>
                <li>• Traduction et interprétariat</li>
                <li>• Finance et consulting</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Sites de recherche d&apos;emploi
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• GaijinPot Jobs</li>
                <li>• Jobs in Japan</li>
                <li>• CareerCross</li>
                <li>• Indeed Japan</li>
                <li>• LinkedIn Japan</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Salaires moyens
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Débutant: 3-4M¥/an</li>
                <li>• Expérimenté: 5-8M¥/an</li>
                <li>• Senior: 8-15M¥/an</li>
                <li>• Management: 15M¥+/an</li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 mt-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Conseils pour réussir
            </h3>
            <div className="prose text-gray-700">
              <p className="mb-4">
                <strong>1. Maîtrisez le japonais :</strong> Un niveau JLPT N2 minimum est souvent requis 
                pour les postes autres que l&apos;enseignement de l&apos;anglais.
              </p>
              <p className="mb-4">
                <strong>2. Adaptez votre CV :</strong> Utilisez le format japonais (rirekisho) et 
                incluez une photo professionnelle.
              </p>
              <p className="mb-4">
                <strong>3. Comprenez la culture d&apos;entreprise :</strong> Hiérarchie, respect des horaires, 
                travail en équipe (teamwork).
              </p>
              <p className="mb-4">
                <strong>4. Préparez-vous aux entretiens :</strong> Formalité, ponctualité, 
                questions sur votre motivation à travailler au Japon.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link href="/forum" className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700">
              Rejoindre le forum pour plus de conseils
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
