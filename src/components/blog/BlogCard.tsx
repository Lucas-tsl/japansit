import Link from 'next/link';
import { BlogPost } from '@/data/blogData';
import OptimizedImage from '@/components/OptimizedImage';
import FavoriteButton from '@/components/FavoriteButton';
import ShareButton from '@/components/ShareButton';
import { CalendarIcon, ClockIcon, UserIcon } from '@heroicons/react/24/outline';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  viewMode?: 'grid' | 'list';
}

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

export default function BlogCard({ post, featured = false, viewMode = 'grid' }: BlogCardProps) {
  if (viewMode === 'list') {
    return (
      <article className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="md:flex">
          <div className="md:w-1/3">
            <Link href={`/blog/${post.slug}`}>
              <div className="relative h-48 md:h-full">
                <OptimizedImage
                  src={post.image || '/placeholder-blog.jpg'}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="object-cover w-full h-full"
                />
                {post.featured && (
                  <div className="absolute top-4 left-4 bg-japan-red text-white px-3 py-1 rounded-full text-sm font-medium">
                    À la une
                  </div>
                )}
              </div>
            </Link>
          </div>
          <div className="md:w-2/3 p-6">
            <Link href={`/blog/${post.slug}`}>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">
                  {post.category}
                </span>
                <span className="mx-2">•</span>
                <CalendarIcon className="h-4 w-4 mr-1" />
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                <span className="mx-2">•</span>
                <ClockIcon className="h-4 w-4 mr-1" />
                <span>{post.readTime} min</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-japan-red dark:hover:text-japan-red transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                {post.excerpt}
              </p>
            </Link>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <UserIcon className="h-4 w-4 text-gray-400" />
                <span className="text-sm text-gray-500 dark:text-gray-400">Par {post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex flex-wrap gap-1">
                  {post.tags.slice(0, 2).map(tag => (
                    <span key={tag} className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center space-x-1 ml-4">
                  <FavoriteButton itemId={post.id} itemTitle={post.title} />
                  <ShareButton 
                    url={`/blog/${post.slug}`}
                    title={post.title}
                    description={post.excerpt}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${featured ? 'col-span-2 md:col-span-1' : ''}`}>
      <Link href={`/blog/${post.slug}`}>
        <div className={`relative ${featured ? 'h-64' : 'h-48'}`}>
          <OptimizedImage
            src={post.image || '/placeholder-blog.jpg'}
            alt={post.title}
            width={400}
            height={featured ? 256 : 192}
            className="object-cover w-full h-full"
          />
          {post.featured && (
            <div className="absolute top-4 left-4 bg-japan-red text-white px-3 py-1 rounded-full text-sm font-medium">
              À la une
            </div>
          )}
        </div>
      </Link>
      <div className="p-6">
        <Link href={`/blog/${post.slug}`}>
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
            <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">
              {post.category}
            </span>
            <span className="mx-2">•</span>
            <CalendarIcon className="h-4 w-4 mr-1" />
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span className="mx-2">•</span>
            <ClockIcon className="h-4 w-4 mr-1" />
            <span>{post.readTime} min</span>
          </div>
          <h2 className={`font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 hover:text-japan-red dark:hover:text-japan-red transition-colors ${featured ? 'text-xl' : 'text-lg'}`}>
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
            {post.excerpt}
          </p>
        </Link>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <UserIcon className="h-4 w-4 text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">Par {post.author}</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="flex flex-wrap gap-1">
              {post.tags.slice(0, 2).map(tag => (
                <span key={tag} className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center space-x-1 ml-2">
              <FavoriteButton itemId={post.id} itemTitle={post.title} />
              <ShareButton 
                url={`/blog/${post.slug}`}
                title={post.title}
                description={post.excerpt}
              />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
