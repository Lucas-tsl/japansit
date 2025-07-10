import { BlogService } from '@/services/blogService';
import { BlogPost } from '@/data/blogData';
import BlogCard from '@/components/blog/BlogCard';
import BlogStats from '@/components/blog/BlogStats';
import PopularCategories from '@/components/blog/PopularCategories';
import PopularTags from '@/components/blog/PopularTags';

export default function BlogPage() {
  const blogService = BlogService.getInstance();
  const posts = blogService.getAllPosts({ limit: 9 });
  const featuredPosts = blogService.getFeaturedPosts(3);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-japan-red to-japan-red-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">
              Blog JapanSit
            </h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto animate-fade-in animation-delay-200">
              Découvrez le Japon à travers nos articles, guides et conseils pour 
              étudier, travailler et vivre au pays du soleil levant.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Statistics */}
        <BlogStats />

        {/* Layout with sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content */}
          <div className="lg:col-span-3">
            {/* Articles à la une */}
            {featuredPosts.length > 0 && (
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Articles à la une
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {featuredPosts.map((post: BlogPost) => (
                    <BlogCard key={post.id} post={post} featured={true} />
                  ))}
                </div>
              </div>
            )}

            {/* Articles */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Tous les articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post: BlogPost) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            <PopularCategories />
            <PopularTags />
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
