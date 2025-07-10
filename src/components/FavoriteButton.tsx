'use client';

import { HeartIcon } from '@heroicons/react/24/outline';

interface FavoriteButtonProps {
  itemId: string;
  itemTitle: string;
  className?: string;
}

export default function FavoriteButton({ itemId, itemTitle, className = '' }: FavoriteButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Logique de favoris simplifiée pour l'instant
    console.log(`Toggle favorite for: ${itemTitle} (ID: ${itemId})`);
    
    // TODO: Implémenter la logique de favoris
    // En attendant la résolution du problème React 19
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-red-50 hover:text-red-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-red-900/20 dark:hover:text-red-400 transition-all duration-200 hover-lift ${className}`}
      aria-label="Ajouter aux favoris"
    >
      <HeartIcon className="h-5 w-5" />
    </button>
  );
}
