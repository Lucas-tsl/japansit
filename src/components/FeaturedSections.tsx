import FavoriteButton from './FavoriteButton';
import ShareButton from './ShareButton';

export default function FeaturedSections() {
  const sections = [
    {
      title: 'Étudier au Japon',
      description: 'Universités, bourses, processus d\'admission et conseils pour étudier au Japon',
      href: '/etudier',
      color: 'bg-indigo-blue',
      emoji: '🎓'
    },
    {
      title: 'Travailler au Japon',
      description: 'Opportunités professionnelles, visa de travail et culture d\'entreprise',
      href: '/travailler',
      color: 'bg-bamboo-green',
      emoji: '💼'
    },
    {
      title: 'Voyager au Japon',
      description: 'Destinations, itinéraires, conseils pratiques et expériences uniques',
      href: '/voyager',
      color: 'bg-sakura-pink',
      emoji: '✈️'
    },
    {
      title: 'Se Préparer',
      description: 'Visa, logement, vol, restauration et toutes les démarches pratiques',
      href: '/preparer',
      color: 'bg-sunset-orange',
      emoji: '📋'
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
      color: 'bg-temple-gold',
      emoji: '🏯'
    },
    {
      title: 'Animés & Manga',
      description: 'Studios, œuvres cultes, culture otaku et nouveautés',
      href: '/animes',
      color: 'bg-indigo-blue',
      emoji: '🎌'
    },
    {
      title: 'Traditions',
      description: 'Cérémonies, arts martiaux, festivals et patrimoine culturel',
      href: '/traditions',
      color: 'bg-japan-red',
      emoji: '🏮'
    },
    {
      title: 'Histoire du Japon',
      description: 'Époques, personnages historiques et évolution culturelle',
      href: '/histoire',
      color: 'bg-cherry-blossom',
      emoji: '📜'
    },
    {
      title: 'Forum Communauté',
      description: 'Échanges, conseils et partages d\'expériences avec la communauté',
      href: '/forum',
      color: 'bg-bamboo-green',
      emoji: '💬'
    }
  ];

  return (
    <section className="py-20 bg-white texture-paper">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-soft-zoom">
          <h2 className="text-4xl font-bold text-japan-red mb-4 font-japanese animate-color-pulse">
            Explorez le Japon
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-elegant-slide delay-200">
            Découvrez tous les aspects de la culture japonaise et préparez votre aventure au pays du soleil levant
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className={`group relative bg-white dark:bg-gray-800 rounded-2xl japanese-shadow hover:japanese-shadow-hover hover-lift smooth-transition overflow-hidden animate-fade-in-up hover-glow micro-bounce theme-transition delay-${index * 150}`}
            >
              {/* Boutons d'action */}
              <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <FavoriteButton 
                  itemId={section.href} 
                  itemTitle={section.title}
                  className="scale-90"
                />
                <ShareButton 
                  title={section.title}
                  description={section.description}
                  className="scale-90"
                />
              </div>

              <a href={section.href} className="block p-8">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${section.color} mb-6 animate-breathe hover-scale`}>
                  <span className="text-white text-2xl">{section.emoji}</span>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-japan-red smooth-transition">
                  {section.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {section.description}
                </p>
                
                <div className="flex items-center text-sm font-medium group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors">
                  <span>En savoir plus</span>
                  <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </a>
              
              {/* Effet de vague au hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transform -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-out pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
