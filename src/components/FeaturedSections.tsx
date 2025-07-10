export default function FeaturedSections() {
  const sections = [
    {
      title: 'Étudier au Japon',
      description: 'Universités, bourses, processus d\'admission et conseils pour étudier au Japon',
      href: '/etudier',
      color: 'bg-blue-500'
    },
    {
      title: 'Travailler au Japon',
      description: 'Opportunités professionnelles, visa de travail et culture d\'entreprise',
      href: '/travailler',
      color: 'bg-green-500'
    },
    {
      title: 'Voyager au Japon',
      description: 'Destinations, itinéraires, conseils pratiques et expériences uniques',
      href: '/voyager',
      color: 'bg-purple-500'
    },
    {
      title: 'Se Préparer',
      description: 'Visa, logement, vol, restauration et toutes les démarches pratiques',
      href: '/preparer',
      color: 'bg-orange-500'
    },
    {
      title: 'Musique Japonaise',
      description: 'J-Pop, J-Rock, playlists et artistes incontournables',
      href: '/musique',
      color: 'bg-pink-500'
    },
    {
      title: 'Apprendre le Japonais',
      description: 'Applications, cours, méthodes et ressources pour maîtriser la langue',
      href: '/langue',
      color: 'bg-indigo-500'
    },
    {
      title: 'Mode & Style',
      description: 'Tendances, streetwear, marques japonaises et style kawaii',
      href: '/mode',
      color: 'bg-red-500'
    },
    {
      title: 'Lieux Incontournables',
      description: 'Temples, villes, parcs naturels et destinations secrètes',
      href: '/lieux',
      color: 'bg-yellow-500'
    },
    {
      title: 'Animés & Manga',
      description: 'Studios, œuvres cultes, culture otaku et nouveautés',
      href: '/animes',
      color: 'bg-teal-500'
    },
    {
      title: 'Traditions',
      description: 'Cérémonies, arts martiaux, festivals et patrimoine culturel',
      href: '/traditions',
      color: 'bg-amber-500'
    },
    {
      title: 'Histoire du Japon',
      description: 'Époques, personnages historiques et évolution culturelle',
      href: '/histoire',
      color: 'bg-slate-500'
    },
    {
      title: 'Forum Communauté',
      description: 'Échanges, conseils et partages d\'expériences avec la communauté',
      href: '/forum',
      color: 'bg-cyan-500'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explorez le Japon
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez tous les aspects de la culture japonaise et préparez votre aventure au pays du soleil levant
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <a
              key={section.title}
              href={section.href}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
            >
              <div className="relative p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${section.color} mb-6`}>
                  <span className="text-white text-2xl">🇯🇵</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                  {section.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {section.description}
                </p>
                
                <div className="flex items-center text-sm font-medium group-hover:text-gray-700 transition-colors">
                  <span>En savoir plus</span>
                  <span className="ml-2">→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
