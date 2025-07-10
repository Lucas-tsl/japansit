export const metadata = {
  title: 'Forum - Communauté JapanSit',
  description: 'Échangez avec notre communauté passionnée du Japon. Posez vos questions, partagez vos expériences et découvrez les conseils des autres membres.',
};

export default function ForumPage() {
  const categories = [
    {
      title: 'Étudier au Japon',
      description: 'Questions sur les universités, bourses et vie étudiante',
      posts: 234,
      color: 'bg-blue-500'
    },
    {
      title: 'Travailler au Japon',
      description: 'Recherche d\'emploi, visa de travail et culture d\'entreprise',
      posts: 189,
      color: 'bg-green-500'
    },
    {
      title: 'Voyager au Japon',
      description: 'Conseils de voyage, itinéraires et bons plans',
      posts: 456,
      color: 'bg-purple-500'
    },
    {
      title: 'Vie quotidienne',
      description: 'Logement, démarches administratives et vie pratique',
      posts: 312,
      color: 'bg-orange-500'
    },
    {
      title: 'Culture et Langue',
      description: 'Apprentissage du japonais, traditions et culture',
      posts: 278,
      color: 'bg-indigo-500'
    },
    {
      title: 'Discussions générales',
      description: 'Tout ce qui concerne le Japon et la communauté',
      posts: 567,
      color: 'bg-gray-500'
    }
  ];

  const recentPosts = [
    {
      title: 'Recherche colocation à Tokyo',
      author: 'Marie_K',
      replies: 12,
      time: '2h',
      category: 'Vie quotidienne'
    },
    {
      title: 'Université de Kyoto - Retour d\'expérience',
      author: 'Alex_Student',
      replies: 8,
      time: '4h',
      category: 'Étudier au Japon'
    },
    {
      title: 'Conseils pour le JLPT N2',
      author: 'Yuki_Sensei',
      replies: 25,
      time: '6h',
      category: 'Culture et Langue'
    },
    {
      title: 'Itinéraire 10 jours Osaka-Tokyo',
      author: 'Travel_Lover',
      replies: 15,
      time: '1j',
      category: 'Voyager au Japon'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Forum JapanSit
            </h1>
            <p className="text-xl mb-8 max-w-3xl mx-auto">
              Rejoignez notre communauté de passionnés du Japon. Posez vos questions, partagez vos expériences et découvrez les conseils des autres membres.
            </p>
            <div className="flex justify-center space-x-8">
              <div className="text-center">
                <div className="text-2xl font-bold">2,500+</div>
                <div className="text-indigo-200">Membres</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">1,200+</div>
                <div className="text-indigo-200">Discussions</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">8,500+</div>
                <div className="text-indigo-200">Messages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Catégories de discussion
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mr-4`}>
                    <span className="text-white text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{category.title}</h3>
                    <p className="text-sm text-gray-500">{category.posts} discussions</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <a href="#" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  Voir les discussions →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Discussions récentes
          </h2>
          
          <div className="bg-gray-50 rounded-xl overflow-hidden">
            <div className="px-6 py-4 bg-gray-100 border-b">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">Dernières discussions</h3>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                  Nouvelle discussion
                </button>
              </div>
            </div>
            
            <div className="divide-y divide-gray-200">
              {recentPosts.map((post, index) => (
                <div key={index} className="px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h4 className="text-lg font-medium text-gray-900 hover:text-indigo-600">
                        <a href="#">{post.title}</a>
                      </h4>
                      <div className="flex items-center mt-2 text-sm text-gray-500">
                        <span>Par {post.author}</span>
                        <span className="mx-2">•</span>
                        <span>{post.category}</span>
                      </div>
                    </div>
                    <div className="text-right text-sm text-gray-500">
                      <div>{post.replies} réponses</div>
                      <div>Il y a {post.time}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Prêt à rejoindre la communauté ?</h2>
          <p className="text-xl mb-8">
            Créez votre compte et commencez à échanger avec des milliers de passionnés du Japon
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Créer un compte
            </a>
            <a
              href="/login"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              Se connecter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
