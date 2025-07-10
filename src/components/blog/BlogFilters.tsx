import { BlogCategory, BlogTag } from '@/data/blogData';
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

interface BlogFiltersProps {
  categories: BlogCategory[];
  tags: BlogTag[];
  selectedCategory: string;
  selectedTag: string;
  searchQuery: string;
  sortBy: 'newest' | 'oldest' | 'popular';
  onCategoryChange: (category: string) => void;
  onTagChange: (tag: string) => void;
  onSearchChange: (query: string) => void;
  onSortChange: (sort: 'newest' | 'oldest' | 'popular') => void;
  onClearFilters: () => void;
}

export default function BlogFilters({
  categories,
  tags,
  selectedCategory,
  selectedTag,
  searchQuery,
  sortBy,
  onCategoryChange,
  onTagChange,
  onSearchChange,
  onSortChange,
  onClearFilters,
}: BlogFiltersProps) {
  const hasActiveFilters = selectedCategory || selectedTag || searchQuery;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
      {/* Search Bar */}
      <div className="space-y-6">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Rechercher un article..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                     bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                     placeholder-gray-500 dark:placeholder-gray-400
                     focus:outline-none focus:ring-2 focus:ring-japan-red focus:border-transparent"
          />
        </div>

        {/* Filters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Catégorie
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => onCategoryChange(e.target.value)}
              aria-label="Filtrer par catégorie"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-japan-red focus:border-transparent"
            >
              <option value="">Toutes les catégories</option>
              {categories.map(category => (
                <option key={category.id} value={category.id}>
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
          </div>

          {/* Tag Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Tag
            </label>
            <select
              value={selectedTag}
              onChange={(e) => onTagChange(e.target.value)}
              aria-label="Filtrer par tag"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-japan-red focus:border-transparent"
            >
              <option value="">Tous les tags</option>
              {tags.map(tag => (
                <option key={tag.id} value={tag.slug}>
                  {tag.name} ({tag.count})
                </option>
              ))}
            </select>
          </div>

          {/* Sort Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Trier par
            </label>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as 'newest' | 'oldest' | 'popular')}
              aria-label="Trier les articles"
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg 
                       bg-white dark:bg-gray-700 text-gray-900 dark:text-white
                       focus:outline-none focus:ring-2 focus:ring-japan-red focus:border-transparent"
            >
              <option value="newest">Plus récent</option>
              <option value="oldest">Plus ancien</option>
              <option value="popular">Populaire</option>
            </select>
          </div>
        </div>

        {/* Active Filters & Clear Button */}
        {hasActiveFilters && (
          <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap gap-2">
              {selectedCategory && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-japan-red text-white">
                  {categories.find(c => c.id === selectedCategory)?.name}
                  <button
                    onClick={() => onCategoryChange('')}
                    className="ml-2 hover:bg-red-700 rounded-full p-1 transition-colors"
                    aria-label="Supprimer le filtre de catégorie"
                  >
                    <XMarkIcon className="h-3 w-3" />
                  </button>
                </span>
              )}
              {selectedTag && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-500 text-white">
                  {tags.find(t => t.slug === selectedTag)?.name}
                  <button
                    onClick={() => onTagChange('')}
                    className="ml-2 hover:bg-blue-700 rounded-full p-1 transition-colors"
                    aria-label="Supprimer le filtre de tag"
                  >
                    <XMarkIcon className="h-3 w-3" />
                  </button>
                </span>
              )}
              {searchQuery && (
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-green-500 text-white">
                  &quot;{searchQuery}&quot;
                  <button
                    onClick={() => onSearchChange('')}
                    className="ml-2 hover:bg-green-700 rounded-full p-1 transition-colors"
                    aria-label="Supprimer le filtre de recherche"
                  >
                    <XMarkIcon className="h-3 w-3" />
                  </button>
                </span>
              )}
            </div>
            <button
              onClick={onClearFilters}
              className="px-4 py-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Effacer tout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
