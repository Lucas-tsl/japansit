'use client';

import { useSearchParams } from 'next/navigation';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const searchContent = [
    { title: 'Étudier au Japon', href: '/etudier', keywords: 'université bourse études admission', description: 'Universités, bourses, processus d\'admission et conseils pour étudier au Japon' },
    { title: 'Travailler au Japon', href: '/travailler', keywords: 'emploi visa travail entreprise', description: 'Opportunités professionnelles, visa de travail et culture d\'entreprise' },
    { title: 'Voyager au Japon', href: '/voyager', keywords: 'voyage destination itinéraire tourisme', description: 'Destinations, itinéraires, conseils pratiques et expériences uniques' },
    { title: 'Se Préparer', href: '/preparer', keywords: 'visa logement vol démarches', description: 'Visa, logement, vol, restauration et toutes les démarches pratiques' },
    { title: 'Musique Japonaise', href: '/musique', keywords: 'jpop jrock musique artiste', description: 'J-Pop, J-Rock, playlists et artistes incontournables' },
    { title: 'Apprendre le Japonais', href: '/langue', keywords: 'langue japonais apprentissage cours', description: 'Applications, cours, méthodes et ressources pour maîtriser la langue' },
    { title: 'Mode & Style', href: '/mode', keywords: 'mode style kawaii streetwear', description: 'Tendances, streetwear, marques japonaises et style kawaii' },
    { title: 'Lieux Incontournables', href: '/lieux', keywords: 'lieux destinations temples villes', description: 'Temples, villes, parcs naturels et destinations secrètes' },
    { title: 'Animés & Manga', href: '/animes', keywords: 'anime manga otaku studio', description: 'Studios, œuvres cultes, culture otaku et nouveautés' },
    { title: 'Traditions', href: '/traditions', keywords: 'traditions culture cérémonie festival', description: 'Cérémonies, arts martiaux, festivals et patrimoine culturel' },
    { title: 'Histoire du Japon', href: '/histoire', keywords: 'histoire époque samouraï meiji', description: 'Époques, personnages historiques et évolution culturelle' },
    { title: 'Forum', href: '/forum', keywords: 'forum communauté discussion', description: 'Échanges, conseils et partages d\'expériences avec la communauté' }
  ];

  const filteredResults = query.length > 0 
    ? searchContent.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.keywords.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-16">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Résultats de recherche
          </h1>
          {query && (
            <p className="text-gray-600">
              Recherche pour: <span className="font-semibold text-japan-red">"{query}"</span>
              {filteredResults.length > 0 && (
                <span className="ml-2">({filteredResults.length} résultat{filteredResults.length > 1 ? 's' : ''})</span>
              )}
            </p>
          )}
        </div>

        {query.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Effectuez une recherche
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Utilisez la barre de recherche pour trouver du contenu sur le Japon
            </p>
          </div>
        ) : filteredResults.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">😞</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Aucun résultat trouvé
            </h2>
            <p className="text-gray-600 max-w-md mx-auto">
              Essayez avec des mots-clés différents comme "voyage", "étudier", "musique", etc.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {filteredResults.map((item) => (
              <div key={item.href} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                <a href={item.href} className="block group">
                  <h3 className="text-xl font-bold text-japan-red mb-2 group-hover:text-japan-red/80">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {item.description}
                  </p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="bg-gray-100 px-2 py-1 rounded text-xs mr-2">
                      {item.href.replace('/', '').toUpperCase()}
                    </span>
                    <span>{item.keywords}</span>
                  </div>
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return <SearchResults />;
}
