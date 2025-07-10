'use client';

import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { SearchService } from '@/services/searchService';
import { categories } from '@/data/searchData';
import Link from 'next/link';

interface SimpleAdvancedSearchProps {
  onClose?: () => void;
  className?: string;
}

export default function SimpleAdvancedSearch({ onClose, className = '' }: SimpleAdvancedSearchProps) {
  const searchService = SearchService.getInstance();
  return (
    <div className={`relative ${className}`}>
      {/* Version simplifiée de la recherche */}
      <div className="relative">
        <div className="flex items-center bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl shadow-lg focus-within:border-japan-red focus-within:ring-2 focus-within:ring-japan-red/20">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 ml-4" />
          <input
            type="text"
            placeholder="Rechercher sur JapanSit..."
            className="flex-1 px-4 py-3 bg-transparent text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none"
          />
          {onClose && (
            <button
              onClick={onClose}
              className="p-2 mr-2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
              title="Fermer la recherche"
              aria-label="Fermer la recherche"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Suggestions de recherche populaire */}
        <div className="absolute top-full mt-2 left-0 right-0 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-lg p-4 z-40">
          <div className="mb-4">
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Recherches populaires
            </h3>
            <div className="flex flex-wrap gap-2">
              {searchService.getPopularSearches().map((search: string, index: number) => (
                <Link
                  key={index}
                  href={`/recherche?q=${encodeURIComponent(search)}`}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                >
                  {search}
                </Link>
              ))}
            </div>
          </div>
          
          {/* Catégories rapides */}
          <div>
            <h3 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Catégories
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {categories.slice(1, 9).map((category: string) => (
                <Link
                  key={category}
                  href={`/recherche?category=${encodeURIComponent(category)}`}
                  className="px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors text-center"
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
