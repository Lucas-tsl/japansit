import { Squares2X2Icon, ListBulletIcon, AdjustmentsHorizontalIcon } from '@heroicons/react/24/outline';

interface BlogViewControlsProps {
  viewMode: 'grid' | 'list';
  onViewModeChange: (mode: 'grid' | 'list') => void;
  totalPosts: number;
  currentPage: number;
  postsPerPage: number;
  showFilters: boolean;
  onToggleFilters: () => void;
}

export default function BlogViewControls({
  viewMode,
  onViewModeChange,
  totalPosts,
  currentPage,
  postsPerPage,
  showFilters,
  onToggleFilters,
}: BlogViewControlsProps) {
  const startIndex = (currentPage - 1) * postsPerPage + 1;
  const endIndex = Math.min(currentPage * postsPerPage, totalPosts);

  return (
    <div className="flex items-center justify-between bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-6">
      <div className="flex items-center space-x-4">
        <button
          onClick={onToggleFilters}
          className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-colors ${
            showFilters 
              ? 'bg-japan-red text-white' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
          aria-label="Afficher/masquer les filtres"
        >
          <AdjustmentsHorizontalIcon className="h-5 w-5" />
          <span className="hidden sm:inline">Filtres</span>
        </button>
        
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {totalPosts === 0 ? (
            'Aucun article trouvé'
          ) : (
            <>
              <span className="hidden sm:inline">
                Affichage de {startIndex} à {endIndex} sur {totalPosts} articles
              </span>
              <span className="sm:hidden">
                {totalPosts} article{totalPosts > 1 ? 's' : ''}
              </span>
            </>
          )}
        </div>
      </div>

      <div className="flex items-center space-x-2">
        <div className="flex rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600">
          <button
            onClick={() => onViewModeChange('grid')}
            className={`p-2 transition-colors ${
              viewMode === 'grid'
                ? 'bg-japan-red text-white'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            aria-label="Vue en grille"
          >
            <Squares2X2Icon className="h-5 w-5" />
          </button>
          <button
            onClick={() => onViewModeChange('list')}
            className={`p-2 transition-colors ${
              viewMode === 'list'
                ? 'bg-japan-red text-white'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            }`}
            aria-label="Vue en liste"
          >
            <ListBulletIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
