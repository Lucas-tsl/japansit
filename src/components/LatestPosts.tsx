export default function LatestPosts() {
  const posts = [
    {
      title: 'Guide Complet pour Étudier à Tokyo',
      excerpt: 'Découvrez les meilleures universités, les démarches à suivre et les conseils pratiques pour étudier dans la capitale japonaise.',
      category: 'Étudier',
      date: '2024-01-15',
      readTime: '8 min'
    },
    {
      title: 'Top 10 des Plats Japonais à Absolument Goûter',
      excerpt: 'Une exploration culinaire des saveurs authentiques du Japon, des sushis aux ramens en passant par les spécialités locales.',
      category: 'Culture',
      date: '2024-01-12',
      readTime: '6 min'
    },
    {
      title: 'Visa de Travail au Japon : Tout ce qu\'il Faut Savoir',
      excerpt: 'Les différents types de visa, les documents nécessaires et les étapes pour obtenir un permis de travail au Japon.',
      category: 'Travailler',
      date: '2024-01-10',
      readTime: '10 min'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Derniers Articles
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Restez informé avec nos derniers conseils, guides et actualités sur le Japon
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="relative h-48 bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-4xl mb-2">🇯🇵</div>
                  <div className="text-sm font-semibold">{post.category}</div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-block bg-red-600 text-white text-xs px-3 py-1 rounded-full font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                <div className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors">
                  Lire l&apos;article
                  <span className="ml-2">→</span>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-gray-900 text-white rounded-full font-semibold hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Voir tous les articles
            <span className="ml-2">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
