import Link from 'next/link';
import { BlogService } from '@/services/blogService';

export default function PopularTags() {
  const blogService = BlogService.getInstance();
  const tags = blogService.getAllTags()
    .sort((a, b) => b.count - a.count)
    .slice(0, 12);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
        Tags populaires
      </h3>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Link
            key={tag.id}
            href={`/blog?tag=${tag.slug}`}
            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-japan-red hover:text-white dark:hover:bg-japan-red transition-colors"
          >
            {tag.name}
            <span className="ml-1 text-xs opacity-60">
              {tag.count}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
