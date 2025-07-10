import { BlogService } from '@/services/blogService';
import { DocumentTextIcon, TagIcon, FolderIcon, UserIcon } from '@heroicons/react/24/outline';

export default function BlogStats() {
  const blogService = BlogService.getInstance();
  const allPosts = blogService.getAllPosts();
  const categories = blogService.getAllCategories();
  const tags = blogService.getAllTags();
  
  // Calculer les statistiques
  const totalPosts = allPosts.length;
  const totalCategories = categories.length;
  const totalTags = tags.length;
  const uniqueAuthors = new Set(allPosts.map(post => post.author)).size;
  const totalReadTime = allPosts.reduce((sum, post) => sum + post.readTime, 0);

  const stats = [
    {
      id: 'posts',
      name: 'Articles',
      value: totalPosts,
      icon: DocumentTextIcon,
      color: 'bg-blue-500',
      description: `${totalReadTime} min de lecture`
    },
    {
      id: 'categories',
      name: 'Catégories',
      value: totalCategories,
      icon: FolderIcon,
      color: 'bg-green-500',
      description: 'Sujets couverts'
    },
    {
      id: 'tags',
      name: 'Tags',
      value: totalTags,
      icon: TagIcon,
      color: 'bg-purple-500',
      description: 'Mots-clés'
    },
    {
      id: 'authors',
      name: 'Auteurs',
      value: uniqueAuthors,
      icon: UserIcon,
      color: 'bg-orange-500',
      description: 'Contributeurs'
    }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
      {stats.map((stat) => (
        <div key={stat.id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
          <div className="flex items-center">
            <div className={`${stat.color} p-3 rounded-lg`}>
              <stat.icon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500 dark:text-gray-400">
                {stat.name}
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
            </div>
          </div>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {stat.description}
          </p>
        </div>
      ))}
    </div>
  );
}
