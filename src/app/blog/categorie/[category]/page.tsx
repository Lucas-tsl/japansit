import { BlogService } from '@/services/blogService';
import { BlogPost } from '@/data/blogData';
import BlogCard from '@/components/blog/BlogCard';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';

interface CategoryPageProps {
  params: Promise<{
    category: string;
  }>;
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category: categorySlug } = await params;
  const blogService = BlogService.getInstance();
  const category = blogService.getCategoryBySlug(categorySlug);
  
  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Catégorie introuvable
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              La catégorie demandée n&apos;existe pas ou a été supprimée.
            </p>
            <Link
              href="/blog"
              className="inline-flex items-center px-6 py-3 bg-japan-red text-white rounded-lg hover:bg-japan-red-dark transition-colors"
            >
              <ChevronLeftIcon className="h-5 w-5 mr-2" />
              Retour au blog
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const posts = blogService.getPostsByCategory(category.id);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <div className="bg-gradient-to-r from-japan-red to-japan-red-dark text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-4">
            <Link
              href="/blog"
              className="inline-flex items-center text-red-100 hover:text-white transition-colors"
            >
              <ChevronLeftIcon className="h-5 w-5 mr-2" />
              Retour au blog
            </Link>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <div 
                className="w-6 h-6 rounded-full mr-3 opacity-80 bg-white"
                aria-hidden="true"
              />
              <h1 className="text-4xl md:text-5xl font-bold">
                {category.name}
              </h1>
            </div>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              {category.description}
            </p>
            <div className="mt-4 text-red-200">
              {category.count} article{category.count > 1 ? 's' : ''}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Articles */}
        <div className="mb-12">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                Aucun article trouvé dans cette catégorie.
              </p>
              <Link
                href="/blog"
                className="mt-4 inline-flex items-center px-6 py-2 bg-japan-red text-white rounded-lg hover:bg-japan-red-dark transition-colors"
              >
                Voir tous les articles
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post: BlogPost) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
