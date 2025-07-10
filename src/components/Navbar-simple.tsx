export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <span className="text-2xl">🇯🇵</span>
              <span className="text-xl font-bold text-red-600">JapanSit</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="/etudier" className="text-gray-700 hover:text-red-600 transition-colors">
              Étudier
            </a>
            <a href="/travailler" className="text-gray-700 hover:text-red-600 transition-colors">
              Travailler
            </a>
            <a href="/voyager" className="text-gray-700 hover:text-red-600 transition-colors">
              Voyager
            </a>
            <a href="/se-preparer" className="text-gray-700 hover:text-red-600 transition-colors">
              Se Préparer
            </a>
            <a href="/musique" className="text-gray-700 hover:text-red-600 transition-colors">
              Musique
            </a>
            <a href="/forum" className="text-gray-700 hover:text-red-600 transition-colors">
              Forum
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Rechercher..."
              className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <a
              href="/login"
              className="text-gray-700 hover:text-red-600 transition-colors"
            >
              Connexion
            </a>
            <a
              href="/signup"
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
            >
              Inscription
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button className="text-gray-700 hover:text-red-600">
              <span className="sr-only">Menu</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
