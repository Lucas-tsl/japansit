import Link from 'next/link';
import { BlogService } from '@/services/blogService';
import { ChevronRightIcon } from '@heroicons/react/24/outline';

export default function PopularCategories() {
  const blogService = BlogService.getInstance();
  const categories = blogService.getAllCategories()
    .sort((a, b) => b.count - a.count)
    .slice(0, 6);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Catégories populaires
      </h3>
      <div className="space-y-2">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/blog?category=${category.id}`}
            className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
          >
            <div className="flex items-center space-x-3">
              <div 
                className="w-4 h-4 rounded-full"
                style={{ backgroundColor: category.color }}
                aria-hidden="true"
              />
              <div>
                <span className="text-sm font-medium text-gray-900 dark:text-white group-hover:text-japan-red dark:group-hover:text-japan-red transition-colors">
                  {category.name}
                </span>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {category.description}
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {category.count}
              </span>
              <ChevronRightIcon className="h-4 w-4 text-gray-400 group-hover:text-japan-red transition-colors" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
