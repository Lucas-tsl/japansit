'use client';

const MegaMenu = () => {
  const menuSections = {
    'Vie au Japon': {
      color: 'japan-red',
      items: [
        { name: 'Étudier', href: '/etudier', description: 'Universités et bourses', icon: '🎓' },
        { name: 'Travailler', href: '/travailler', description: 'Emploi et visa de travail', icon: '💼' },
        { name: 'Se Préparer', href: '/preparer', description: 'Démarches et logement', icon: '📋' },
        { name: 'Voyager', href: '/voyager', description: 'Destinations et itinéraires', icon: '✈️' }
      ]
    },
    'Culture': {
      color: 'sakura-pink',
      items: [
        { name: 'Traditions', href: '/traditions', description: 'Arts et cérémonies', icon: '🎋' },
        { name: 'Histoire', href: '/histoire', description: 'Époques et patrimoine', icon: '🏛️' },
        { name: 'Animés', href: '/animes', description: 'Manga et studios', icon: '🎨' },
        { name: 'Lieux', href: '/lieux', description: 'Temples et destinations', icon: '⛩️' }
      ]
    },
    'Apprentissage': {
      color: 'indigo-blue',
      items: [
        { name: 'Langue', href: '/langue', description: 'Apprendre le japonais', icon: '📚' },
        { name: 'Musique', href: '/musique', description: 'J-Pop et playlists', icon: '🎵' },
        { name: 'Mode', href: '/mode', description: 'Style et tendances', icon: '👘' },
        { name: 'Forum', href: '/forum', description: 'Communauté et discussions', icon: '💬' }
      ]
    }
  };

  return (
    <div className="relative">
      {/* Menu Items */}
      <div className="flex items-center space-x-8">
        {Object.entries(menuSections).map(([sectionName, section]) => (
          <div
            key={sectionName}
            className="relative group"
          >
            <button className="nav-link text-gray-700 hover:text-japan-red transition-colors font-medium py-2 px-1">
              {sectionName}
              <svg 
                className="inline-block ml-1 w-4 h-4 transition-transform group-hover:rotate-180" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-80 bg-white rounded-xl shadow-xl border border-gray-100 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 mega-menu-dropdown japanese-shadow">
              <div className="p-6">
                <h3 className={`text-lg font-bold text-${section.color} mb-4`}>
                  {sectionName}
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {section.items.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="group/item mega-menu-item flex items-start p-3 rounded-lg hover:bg-gray-50 transition-all duration-200"
                    >
                      <span className="text-2xl mr-3 group-hover/item:scale-110 transition-transform">
                        {item.icon}
                      </span>
                      <div>
                        <div className="font-semibold text-gray-900 group-hover/item:text-japan-red transition-colors">
                          {item.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {item.description}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;
