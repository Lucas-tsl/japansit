'use client';

import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export default function Pagination({ 
  currentPage, 
  totalPages, 
  onPageChange, 
  className = '' 
}: PaginationProps) {
  const generatePageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      // Si on a moins de 5 pages, on les affiche toutes
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Logique pour afficher les pages avec des ellipses
      const halfVisible = Math.floor(maxVisiblePages / 2);
      
      if (currentPage <= halfVisible + 1) {
        // Au début
        for (let i = 1; i <= maxVisiblePages - 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      } else if (currentPage >= totalPages - halfVisible) {
        // À la fin
        pages.push(1);
        pages.push('...');
        for (let i = totalPages - (maxVisiblePages - 2); i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Au milieu
        pages.push(1);
        pages.push('...');
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
          pages.push(i);
        }
        pages.push('...');
        pages.push(totalPages);
      }
    }
    
    return pages;
  };

  const pageNumbers = generatePageNumbers();

  if (totalPages <= 1) {
    return null;
  }

  return (
    <nav className={`flex items-center justify-center space-x-2 ${className}`} aria-label="Navigation par pages">
      {/* Bouton précédent */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`relative inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          currentPage === 1
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-700 dark:text-gray-300 hover:text-japan-red dark:hover:text-japan-red bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
        }`}
        aria-label="Page précédente"
      >
        <ChevronLeftIcon className="h-4 w-4" />
        <span className="ml-1 hidden sm:block">Précédent</span>
      </button>

      {/* Numéros de page */}
      <div className="flex items-center space-x-1">
        {pageNumbers.map((pageNumber, index) => (
          <div key={index}>
            {pageNumber === '...' ? (
              <span className="px-3 py-2 text-gray-400 text-sm">...</span>
            ) : (
              <button
                onClick={() => onPageChange(pageNumber as number)}
                className={`relative inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  pageNumber === currentPage
                    ? 'bg-japan-red text-white shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:text-japan-red dark:hover:text-japan-red bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
                }`}
                aria-label={`Page ${pageNumber}`}
                aria-current={pageNumber === currentPage ? 'page' : undefined}
              >
                {pageNumber}
              </button>
            )}
          </div>
        ))}
      </div>

      {/* Bouton suivant */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`relative inline-flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          currentPage === totalPages
            ? 'text-gray-400 cursor-not-allowed'
            : 'text-gray-700 dark:text-gray-300 hover:text-japan-red dark:hover:text-japan-red bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600'
        }`}
        aria-label="Page suivante"
      >
        <span className="mr-1 hidden sm:block">Suivant</span>
        <ChevronRightIcon className="h-4 w-4" />
      </button>
    </nav>
  );
}
