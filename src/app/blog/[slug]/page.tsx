import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BlogService } from '@/services/blogService';
import OptimizedImage from '@/components/OptimizedImage';
import ShareButton from '@/components/ShareButton';
import FavoriteButton from '@/components/FavoriteButton';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const blogService = BlogService.getInstance();
  const post = blogService.getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogService.getRelatedPosts(post.id, 3);
  const comments = blogService.getCommentsByPost(post.id);
  const category = blogService.getAllCategories().find(cat => cat.id === post.category);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('fr-FR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Convertir le contenu Markdown en HTML basique
  const formatContent = (content: string) => {
    return content
      .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6 mt-8">$1</h1>')
      .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-4 mt-6">$1</h2>')
      .replace(/^### (.*$)/gm, '<h3 class="text-xl font-medium text-gray-900 dark:text-white mb-3 mt-4">$1</h3>')
      .replace(/^\- (.*$)/gm, '<li class="mb-2">$1</li>')
      .replace(/\n\n/g, '</p><p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">')
      .replace(/^\n/, '<p class="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">')
      .replace(/\n$/, '</p>');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header avec image */}
      <div className="relative">
        {post.image && (
          <div className="relative h-96 bg-gray-800">
            <OptimizedImage
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
        )}
        
        <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center space-x-4 mb-4">
              {category && (
                <Link
                  href={`/blog/category/${category.slug}`}
                  className="bg-japan-red text-white px-3 py-1 rounded-full text-sm font-medium hover:bg-red-600 transition-colors"
                >
                  {category.name}
                </Link>
              )}
              {post.featured && (
                <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  ⭐ À la une
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center space-x-6 text-sm">
              <span>Par {post.author}</span>
              <span>{formatDate(post.publishedAt)}</span>
              <span>{post.readTime} min de lecture</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Contenu de l'article */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="p-8">
            {/* Boutons d'actions */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <FavoriteButton 
                  itemId={post.id}
                  itemTitle={post.title}
                  className="text-sm"
                />
                <ShareButton 
                  url={`/blog/${post.slug}`}
                  title={post.title}
                  className="text-sm"
                />
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map(tag => (
                  <Link
                    key={tag}
                    href={`/blog/tag/${tag}`}
                    className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-full text-sm hover:bg-japan-red hover:text-white transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Résumé */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                En résumé
              </h2>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                {post.excerpt}
              </p>
            </div>

            {/* Contenu principal */}
            <div 
              className="prose prose-lg dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: formatContent(post.content) }}
            />
          </div>
        </div>

        {/* Section commentaires */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-8">
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <span className="mr-2">💬</span>
              Commentaires ({comments.length})
            </h2>

            {/* Formulaire de commentaire */}
            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Laisser un commentaire
              </h3>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Votre nom"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-japan-red focus:border-transparent"
                  />
                  <input
                    type="email"
                    placeholder="Votre email"
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-japan-red focus:border-transparent"
                  />
                </div>
                <textarea
                  placeholder="Votre commentaire..."
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-japan-red focus:border-transparent"
                />
                <button
                  type="submit"
                  className="bg-japan-red text-white px-6 py-2 rounded-lg hover:bg-red-600 transition-colors"
                >
                  Publier le commentaire
                </button>
              </form>
            </div>

            {/* Liste des commentaires */}
            <div className="space-y-6">
              {comments.map(comment => (
                <div key={comment.id} className="border-l-4 border-japan-red pl-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {comment.author}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {formatDate(comment.createdAt)}
                    </span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                    {comment.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Articles connexes */}
        {relatedPosts.length > 0 && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg mt-8">
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <span className="mr-2">📚</span>
                Articles connexes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map(relatedPost => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="block bg-gray-50 dark:bg-gray-700 rounded-lg p-4 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                      {relatedPost.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                      {relatedPost.excerpt.substring(0, 100)}...
                    </p>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {formatDate(relatedPost.publishedAt)} • {relatedPost.readTime} min
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
