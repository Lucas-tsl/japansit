import SearchComponent from './SearchComponent';
import MegaMenu from './MegaMenu';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  return (
    <>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2">
                <span className="text-2xl">🇯🇵</span>
                <span className="text-xl font-bold text-gradient-japan font-japanese">JapanSit</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <MegaMenu />
            </div>

            {/* Search & Auth */}
            <div className="hidden md:flex items-center space-x-4">
              <div className="w-64">
                <SearchComponent />
              </div>
              <a
                href="/login"
                className="text-gray-700 hover:text-japan-red transition-colors font-medium"
              >
                Connexion
              </a>
              <a
                href="/signup"
                className="bg-japan-red text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
              >
                Inscription
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center">
              <details className="relative">
                <summary className="text-gray-700 hover:text-japan-red p-2 cursor-pointer list-none">
                  <span className="sr-only">Menu</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </summary>
                <div className="absolute right-0 top-full mt-2 w-screen max-w-sm bg-white border border-gray-200 rounded-lg shadow-lg z-50">
                  <MobileMenu />
                </div>
              </details>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
