'use client';

import { MagnifyingGlassIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { SearchService } from '@/services/searchService';
import { SearchResult, categories } from '@/data/searchData';
import Link from 'next/link';

export default function SearchPage() {
  const searchService = SearchService.getInstance();

  const getResultIcon = (type: string) => {
    switch (type) {
      case 'page':
        return '📄';
      case 'article':
        return '📰';
      case 'guide':
        return '📚';
      case 'resource':
        return '🔗';
      default:
        return '📄';
    }
  };

  const allResults = searchService.search('', { limit: 20 });
  const popularSearches = searchService.getPopularSearches();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Recherche JapanSit
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Découvrez tout ce que vous devez savoir sur le Japon
          </p>
        </div>

        {/* Barre de recherche principale */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <div className="flex items-center bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl shadow-lg focus-within:border-japan-red focus-within:ring-2 focus-within:ring-japan-red/20">
              <MagnifyingGlassIcon className="h-6 w-6 text-gray-400 ml-4" />
              <input
                type="text"
                placeholder="Rechercher sur JapanSit..."
                className="flex-1 px-4 py-4 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none text-lg"
              />
              <button
                className="p-3 mr-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                title="Filtres de recherche"
                aria-label="Filtres de recherche"
              >
                <FunnelIcon className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Recherches populaires */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Recherches populaires
          </h2>
          <div className="flex flex-wrap gap-3">
            {popularSearches.map((search: string, index: number) => (
              <Link
                key={index}
                href={`/recherche?q=${encodeURIComponent(search)}`}
                className="px-4 py-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                {search}
              </Link>
            ))}
          </div>
        </div>

        {/* Catégories */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Parcourir par catégorie
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.slice(1).map((category: string) => {
              const categoryResults = searchService.search('', { category, limit: 1 });
              const resultCount = categoryResults.length;
              
              return (
                <Link
                  key={category}
                  href={`/recherche?category=${encodeURIComponent(category)}`}
                  className="p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                    {category}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {resultCount} résultat{resultCount > 1 ? 's' : ''}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Contenu récent */}
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Contenu récent
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allResults.slice(0, 12).map((result: SearchResult) => (
              <Link
                key={result.id}
                href={result.url}
                className="block p-6 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <div className="flex items-start space-x-3">
                  <span className="text-2xl">{getResultIcon(result.type)}</span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 dark:text-white mb-2">
                      {result.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                      {result.description}
                    </p>
                    <div className="flex items-center text-xs text-gray-500 dark:text-gray-400">
                      <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded mr-2">
                        {result.category}
                      </span>
                      <span className="capitalize">{result.type}</span>
                      {result.publishedAt && (
                        <span className="ml-2">
                          • {new Date(result.publishedAt).toLocaleDateString('fr-FR')}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
