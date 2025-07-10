import Link from 'next/link';
import { BlogService } from '@/services/blogService';
import { BlogPost } from '@/data/blogData';
import OptimizedImage from '@/components/OptimizedImage';

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

function BlogCard({ post, featured = false }: { post: BlogPost; featured?: boolean }) {
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
        <div className="p-6">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
            <span className="bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded text-xs">
              {post.category}
            </span>
            <span className="mx-2">•</span>
            <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
            <span className="mx-2">•</span>
            <span>{post.readTime} min</span>
          </div>
          <h2 className={`font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 ${featured ? 'text-xl' : 'text-lg'}`}>
            {post.title}
          </h2>
          <p className="text-gray-600 dark:text-gray-400 line-clamp-3 mb-4">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">Par {post.author}</span>
            </div>
            <div className="flex flex-wrap gap-1">
              {post.tags.slice(0, 2).map(tag => (
                <span key={tag} className="text-xs bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function BlogPageSimple() {
  const blogService = BlogService.getInstance();
  const posts = blogService.getAllPosts({ limit: 9 });
  const featuredPosts = blogService.getFeaturedPosts(3);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-japan-red to-japan-red-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Blog JapanSit
            </h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Découvrez le Japon à travers nos articles, guides et conseils pour 
              étudier, travailler et vivre au pays du soleil levant.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Articles à la une */}
        {featuredPosts.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Articles à la une
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredPosts.map(post => (
                <BlogCard key={post.id} post={post} featured={true} />
              ))}
            </div>
          </div>
        )}

        {/* Tous les articles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Tous les articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map(post => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="bg-gradient-to-r from-japan-red to-japan-red-dark rounded-lg p-8 mt-12">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Restez informé
            </h3>
            <p className="text-red-100 mb-6">
              Recevez nos derniers articles et conseils directement dans votre boîte mail.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="w-full px-3 py-2 rounded-lg bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="w-full bg-white text-japan-red font-medium py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors"
              >
                S&apos;abonner
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
