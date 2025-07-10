const MobileMenu = () => {
  const menuSections = [
    { name: 'Étudier', href: '/etudier', icon: '🎓' },
    { name: 'Travailler', href: '/travailler', icon: '💼' },
    { name: 'Voyager', href: '/voyager', icon: '✈️' },
    { name: 'Se Préparer', href: '/preparer', icon: '📋' },
    { name: 'Langue', href: '/langue', icon: '📚' },
    { name: 'Musique', href: '/musique', icon: '🎵' },
    { name: 'Mode', href: '/mode', icon: '👘' },
    { name: 'Lieux', href: '/lieux', icon: '⛩️' },
    { name: 'Animés', href: '/animes', icon: '🎨' },
    { name: 'Traditions', href: '/traditions', icon: '🎋' },
    { name: 'Histoire', href: '/histoire', icon: '🏛️' },
    { name: 'Forum', href: '/forum', icon: '💬' }
  ];

  return (
    <div className="p-4">
      <div className="grid grid-cols-2 gap-2 mb-4">
        {menuSections.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="flex items-center px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-100 hover:text-japan-red transition-colors"
          >
            <span className="text-lg mr-2">{item.icon}</span>
            <span className="text-sm font-medium">{item.name}</span>
          </a>
        ))}
      </div>
      
      {/* Search for mobile */}
      <div className="mb-4 border-t border-gray-200 pt-4">
        <input
          type="text"
          placeholder="Rechercher..."
          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-japan-red focus:border-transparent text-sm"
        />
      </div>

      {/* Auth buttons for mobile */}
      <div className="space-y-2 border-t border-gray-200 pt-4">
        <a
          href="/login"
          className="block w-full text-center px-3 py-2 text-gray-700 hover:text-japan-red transition-colors font-medium"
        >
          Connexion
        </a>
        <a
          href="/signup"
          className="block w-full text-center px-3 py-2 bg-japan-red text-white rounded-lg hover:bg-red-700 transition-colors font-medium"
        >
          Inscription
        </a>
      </div>
    </div>
  );
};

export default MobileMenu;
