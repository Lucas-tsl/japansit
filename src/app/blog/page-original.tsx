import Link from 'next/link';
import { BlogService } from '@/services/blogService';
import { BlogPost } from '@/data/blogData';
import OptimizedImage from '@/components/OptimizedImage';

export default function BlogPage() {
  const blogService = BlogService.getInstance();
  const featuredPosts = blogService.getFeaturedPosts(3);
  const recentPosts = blogService.getRecentPosts(9);
  const categories = blogService.getAllCategories();
  const popularTags = blogService.getPopularTags(8);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const PostCard = ({ post, featured = false }: { post: BlogPost; featured?: boolean }) => (
    <article className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${featured ? 'col-span-2 md:col-span-1' : ''}`}>
      {post.image && (
        <div className={`relative ${featured ? 'h-64' : 'h-48'}`}>
          <OptimizedImage
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-japan-red text-white px-2 py-1 rounded-full text-xs font-medium">
              {categories.find(cat => cat.id === post.category)?.name || post.category}
            </span>
          </div>
          {featured && (
            <div className="absolute top-4 right-4">
              <span className="bg-yellow-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                ⭐ À la une
              </span>
            </div>
          )}
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <span>{formatDate(post.publishedAt)}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime} min de lecture</span>
        </div>
        <h2 className={`font-bold text-gray-900 dark:text-white mb-3 ${featured ? 'text-xl' : 'text-lg'}`}>
          <Link href={`/blog/${post.slug}`} className="hover:text-japan-red transition-colors">
            {post.title}
          </Link>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-500 dark:text-gray-400">Par</span>
            <span className="text-sm font-medium text-gray-900 dark:text-white">{post.author}</span>
          </div>
          <div className="flex flex-wrap gap-1">
            {post.tags.slice(0, 2).map(tag => (
              <Link
                key={tag}
                href={`/blog/tag/${tag}`}
                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </article>
  );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 py-12 mb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Blog JapanSit
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Découvrez nos articles sur la culture, la vie et les opportunités au Japon
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Articles à la une */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
            <span className="mr-2">⭐</span>
            Articles à la une
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map(post => (
              <PostCard key={post.id} post={post} featured={true} />
            ))}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Articles récents */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="mr-2">📰</span>
              Articles récents
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentPosts.map(post => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Catégories */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">📂</span>
                Catégories
              </h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <Link
                    key={category.id}
                    href={`/blog/category/${category.slug}`}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors group"
                  >
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-japan-red">
                      {category.name}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-600 px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Tags populaires */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
                <span className="mr-2">🏷️</span>
                Tags populaires
              </h3>
              <div className="flex flex-wrap gap-2">
                {popularTags.map(tag => (
                  <Link
                    key={tag.id}
                    href={`/blog/tag/${tag.slug}`}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-japan-red hover:text-white transition-colors"
                  >
                    #{tag.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-gradient-to-r from-japan-red to-japan-gold rounded-lg shadow-lg p-6 text-white">
              <h3 className="text-lg font-semibold mb-2">
                📧 Newsletter
              </h3>
              <p className="text-sm mb-4 opacity-90">
                Recevez nos derniers articles directement dans votre boîte mail
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Votre email"
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
    </div>
  );
}
