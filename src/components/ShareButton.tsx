'use client';

import { ShareIcon } from '@heroicons/react/24/outline';

interface ShareButtonProps {
  title: string;
  url?: string;
  description?: string;
  className?: string;
}

export default function ShareButton({ title, url, description, className = '' }: ShareButtonProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : '');
    const shareText = `${title} - ${description || 'Découvrez le Japon avec JapanSit'}`;
    
    // Vérifier si l'API native de partage est disponible
    if (navigator.share) {
      navigator.share({
        title,
        text: description,
        url: currentUrl
      }).catch(console.error);
    } else {
      // Fallback : copier le lien
      if (navigator.clipboard) {
        navigator.clipboard.writeText(currentUrl).then(() => {
          alert('Lien copié dans le presse-papiers !');
        }).catch(console.error);
      } else {
        // Ouvrir Twitter par défaut
        const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(currentUrl)}`;
        window.open(twitterUrl, '_blank', 'noopener,noreferrer');
      }
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`p-2 rounded-full bg-gray-50 text-gray-600 hover:bg-blue-50 hover:text-blue-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-blue-900/20 dark:hover:text-blue-400 transition-all duration-200 hover-lift ${className}`}
      aria-label="Partager"
    >
      <ShareIcon className="h-5 w-5" />
    </button>
  );
}
