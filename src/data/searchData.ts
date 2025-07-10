// Base de données de recherche pour le contenu du site
export interface SearchResult {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  tags: string[];
  type: 'page' | 'article' | 'guide' | 'resource';
  content: string;
  image?: string;
  author?: string;
  publishedAt?: string;
}

export const searchData: SearchResult[] = [
  // Pages principales
  {
    id: 'etudier',
    title: 'Étudier au Japon',
    description: 'Tout savoir sur les études au Japon : universités, bourses, procédures',
    url: '/etudier',
    category: 'Éducation',
    tags: ['études', 'université', 'bourses', 'visa étudiant'],
    type: 'page',
    content: 'Étudier au Japon universités bourses visa étudiant procédures admission',
    image: '/images/study-japan.jpg'
  },
  {
    id: 'travailler',
    title: 'Travailler au Japon',
    description: 'Guide complet pour travailler au Japon : visas, emploi, culture d\'entreprise',
    url: '/travailler',
    category: 'Emploi',
    tags: ['travail', 'emploi', 'visa travail', 'culture entreprise'],
    type: 'page',
    content: 'Travailler au Japon emploi visa travail culture entreprise recrutement',
    image: '/images/work-japan.jpg'
  },
  {
    id: 'voyager',
    title: 'Voyager au Japon',
    description: 'Conseils pratiques pour voyager au Japon : itinéraires, budget, conseils',
    url: '/voyager',
    category: 'Voyage',
    tags: ['voyage', 'tourisme', 'itinéraire', 'budget'],
    type: 'page',
    content: 'Voyager au Japon tourisme itinéraire budget conseils pratiques',
    image: '/images/travel-japan.jpg'
  },
  {
    id: 'langue',
    title: 'Apprendre le japonais',
    description: 'Ressources pour apprendre le japonais : méthodes, applications, conseils',
    url: '/langue',
    category: 'Langue',
    tags: ['japonais', 'apprentissage', 'méthodes', 'applications'],
    type: 'page',
    content: 'Apprendre le japonais méthodes applications conseils ressources',
    image: '/images/japanese-language.jpg'
  },
  {
    id: 'culture',
    title: 'Culture japonaise',
    description: 'Découvrez la richesse de la culture japonaise : traditions, arts, modes de vie',
    url: '/traditions',
    category: 'Culture',
    tags: ['culture', 'traditions', 'arts', 'mode de vie'],
    type: 'page',
    content: 'Culture japonaise traditions arts mode de vie coutumes',
    image: '/images/japanese-culture.jpg'
  },
  {
    id: 'histoire',
    title: 'Histoire du Japon',
    description: 'L\'histoire fascinante du Japon des origines à nos jours',
    url: '/histoire',
    category: 'Histoire',
    tags: ['histoire', 'époques', 'samouraïs', 'modernisation'],
    type: 'page',
    content: 'Histoire du Japon époques samouraïs modernisation périodes historiques',
    image: '/images/japanese-history.jpg'
  },
  {
    id: 'animes',
    title: 'Animés et mangas',
    description: 'L\'univers des animés et mangas japonais : recommandations, actualités',
    url: '/animes',
    category: 'Divertissement',
    tags: ['animés', 'mangas', 'otaku', 'culture pop'],
    type: 'page',
    content: 'Animés mangas otaku culture pop japonaise divertissement',
    image: '/images/anime-manga.jpg'
  },
  {
    id: 'musique',
    title: 'Musique japonaise',
    description: 'Explorez la musique japonaise : J-pop, J-rock, musique traditionnelle',
    url: '/musique',
    category: 'Musique',
    tags: ['J-pop', 'J-rock', 'musique traditionnelle', 'artistes'],
    type: 'page',
    content: 'Musique japonaise J-pop J-rock musique traditionnelle artistes',
    image: '/images/japanese-music.jpg'
  },
  {
    id: 'mode',
    title: 'Mode japonaise',
    description: 'La mode japonaise : street style, marques, tendances',
    url: '/mode',
    category: 'Mode',
    tags: ['mode', 'street style', 'marques', 'tendances'],
    type: 'page',
    content: 'Mode japonaise street style marques tendances fashion',
    image: '/images/japanese-fashion.jpg'
  },
  {
    id: 'lieux',
    title: 'Lieux incontournables',
    description: 'Les lieux incontournables à visiter au Japon',
    url: '/lieux',
    category: 'Voyage',
    tags: ['lieux', 'visites', 'attractions', 'destinations'],
    type: 'page',
    content: 'Lieux incontournables visites attractions destinations Japon',
    image: '/images/japanese-places.jpg'
  },
  {
    id: 'forum',
    title: 'Forum communautaire',
    description: 'Échangez avec la communauté JapanSit',
    url: '/forum',
    category: 'Communauté',
    tags: ['forum', 'communauté', 'discussions', 'échanges'],
    type: 'page',
    content: 'Forum communauté discussions échanges questions réponses',
    image: '/images/community-forum.jpg'
  },
  {
    id: 'preparer',
    title: 'Se préparer au Japon',
    description: 'Guide pratique pour se préparer à la vie au Japon',
    url: '/preparer',
    category: 'Préparation',
    tags: ['préparation', 'démarches', 'conseils', 'installation'],
    type: 'page',
    content: 'Se préparer au Japon démarches conseils installation pratique',
    image: '/images/prepare-japan.jpg'
  },

  // Articles de blog (exemples)
  {
    id: 'article-visa-etudiant',
    title: 'Comment obtenir un visa étudiant pour le Japon',
    description: 'Guide détaillé pour obtenir votre visa étudiant japonais',
    url: '/blog/visa-etudiant-japon',
    category: 'Éducation',
    tags: ['visa', 'étudiant', 'procédure', 'documents'],
    type: 'article',
    content: 'Visa étudiant Japon procédure documents COE certificat admissibilité',
    author: 'Équipe JapanSit',
    publishedAt: '2024-01-15',
    image: '/images/student-visa.jpg'
  },
  {
    id: 'article-transport-tokyo',
    title: 'Se déplacer à Tokyo : guide complet des transports',
    description: 'Tout savoir sur les transports à Tokyo pour se déplacer efficacement',
    url: '/blog/transport-tokyo',
    category: 'Voyage',
    tags: ['Tokyo', 'transport', 'métro', 'JR Pass'],
    type: 'article',
    content: 'Transport Tokyo métro JR Pass train bus déplacement efficace',
    author: 'Équipe JapanSit',
    publishedAt: '2024-01-10',
    image: '/images/tokyo-transport.jpg'
  },
  {
    id: 'article-cuisine-japonaise',
    title: 'Découvrir la cuisine japonaise authentique',
    description: 'Les plats japonais incontournables à découvrir absolument',
    url: '/blog/cuisine-japonaise',
    category: 'Culture',
    tags: ['cuisine', 'gastronomie', 'plats', 'restaurants'],
    type: 'article',
    content: 'Cuisine japonaise gastronomie sushi ramen tempura plats traditionnels',
    author: 'Équipe JapanSit',
    publishedAt: '2024-01-05',
    image: '/images/japanese-cuisine.jpg'
  },
  {
    id: 'article-logement-tokyo',
    title: 'Trouver un logement à Tokyo : conseils pratiques',
    description: 'Comment trouver et louer un appartement à Tokyo',
    url: '/blog/logement-tokyo',
    category: 'Logement',
    tags: ['logement', 'appartement', 'Tokyo', 'location'],
    type: 'article',
    content: 'Logement Tokyo appartement location conseils pratiques immobilier',
    author: 'Équipe JapanSit',
    publishedAt: '2024-01-01',
    image: '/images/tokyo-housing.jpg'
  }
];

export const categories = [
  'Toutes les catégories',
  'Éducation',
  'Emploi',
  'Voyage',
  'Langue',
  'Culture',
  'Histoire',
  'Divertissement',
  'Musique',
  'Mode',
  'Communauté',
  'Préparation',
  'Logement'
];

export const searchTypes = [
  'Tous les types',
  'Pages',
  'Articles',
  'Guides',
  'Ressources'
];
