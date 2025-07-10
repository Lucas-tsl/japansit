// Types pour le système de blog
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  publishedAt: string;
  updatedAt?: string;
  category: string;
  tags: string[];
  image?: string;
  readTime: number;
  featured: boolean;
  status: 'draft' | 'published' | 'archived';
}

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  color: string;
  count: number;
}

export interface BlogComment {
  id: string;
  postId: string;
  author: string;
  email: string;
  content: string;
  createdAt: string;
  approved: boolean;
  parentId?: string;
}

export interface BlogTag {
  id: string;
  name: string;
  slug: string;
  count: number;
}

// Données de démonstration du blog
export const blogCategories: BlogCategory[] = [
  {
    id: 'education',
    name: 'Éducation',
    slug: 'education',
    description: 'Études et formation au Japon',
    color: 'bg-blue-500',
    count: 12
  },
  {
    id: 'culture',
    name: 'Culture',
    slug: 'culture',
    description: 'Culture et traditions japonaises',
    color: 'bg-purple-500',
    count: 18
  },
  {
    id: 'travel',
    name: 'Voyage',
    slug: 'voyage',
    description: 'Conseils de voyage au Japon',
    color: 'bg-green-500',
    count: 15
  },
  {
    id: 'work',
    name: 'Travail',
    slug: 'travail',
    description: 'Emploi et carrière au Japon',
    color: 'bg-orange-500',
    count: 8
  },
  {
    id: 'language',
    name: 'Langue',
    slug: 'langue',
    description: 'Apprentissage du japonais',
    color: 'bg-red-500',
    count: 10
  },
  {
    id: 'lifestyle',
    name: 'Mode de vie',
    slug: 'mode-de-vie',
    description: 'Vie quotidienne au Japon',
    color: 'bg-indigo-500',
    count: 14
  }
];

export const blogTags: BlogTag[] = [
  { id: 'visa', name: 'Visa', slug: 'visa', count: 8 },
  { id: 'tokyo', name: 'Tokyo', slug: 'tokyo', count: 15 },
  { id: 'osaka', name: 'Osaka', slug: 'osaka', count: 7 },
  { id: 'kyoto', name: 'Kyoto', slug: 'kyoto', count: 12 },
  { id: 'jlpt', name: 'JLPT', slug: 'jlpt', count: 6 },
  { id: 'cuisine', name: 'Cuisine', slug: 'cuisine', count: 9 },
  { id: 'anime', name: 'Anime', slug: 'anime', count: 11 },
  { id: 'manga', name: 'Manga', slug: 'manga', count: 8 },
  { id: 'transport', name: 'Transport', slug: 'transport', count: 5 },
  { id: 'logement', name: 'Logement', slug: 'logement', count: 7 }
];

export const blogPosts: BlogPost[] = [
  {
    id: 'visa-etudiant-guide-complet',
    title: 'Guide complet pour obtenir un visa étudiant au Japon',
    slug: 'visa-etudiant-guide-complet',
    excerpt: 'Découvrez toutes les étapes pour obtenir votre visa étudiant japonais, des documents nécessaires aux délais à respecter.',
    content: `
# Guide complet pour obtenir un visa étudiant au Japon

Obtenir un visa étudiant pour le Japon peut sembler complexe, mais avec les bonnes informations et une préparation adéquate, le processus devient beaucoup plus simple.

## Les types de visas étudiants

### Visa étudiant (ryugaku)
Le visa étudiant standard pour les cours de longue durée dans les universités, écoles spécialisées et écoles de langue.

### Visa de formation (kenshu)
Pour les programmes de formation professionnelle et les stages.

## Documents nécessaires

### 1. Certificat d'éligibilité (COE)
Le document le plus important, obtenu par votre école au Japon.

### 2. Passeport valide
Votre passeport doit être valide au moins 6 mois après votre arrivée prévue.

### 3. Formulaire de demande
Rempli avec précision et signé.

### 4. Preuves financières
Relevés bancaires, certificats de bourse, ou garantie financière.

### 5. Certificats scolaires
Diplômes et relevés de notes traduits et certifiés.

## Processus étape par étape

### Étape 1 : Admission dans une école
Commencez par être accepté dans une école reconnue au Japon.

### Étape 2 : Demande de COE
Votre école fera la demande du Certificat d'éligibilité pour vous.

### Étape 3 : Demande de visa
Une fois le COE reçu, faites votre demande de visa au consulat japonais.

### Étape 4 : Préparation du voyage
Préparez votre arrivée au Japon et vos premiers jours.

## Conseils pratiques

- Commencez les démarches 6 mois avant votre départ
- Gardez des copies de tous vos documents
- Contactez votre école pour toute question
- Préparez un budget pour les frais de visa et de traduction

## Conclusion

Obtenir un visa étudiant pour le Japon demande de la patience et de l'organisation, mais c'est un investissement qui en vaut la peine pour votre avenir.
    `,
    author: 'Équipe JapanSit',
    publishedAt: '2024-01-15T10:00:00Z',
    category: 'education',
    tags: ['visa', 'étudiant', 'éducation', 'procédure'],
    image: '/images/blog/visa-etudiant.jpg',
    readTime: 8,
    featured: true,
    status: 'published'
  },
  {
    id: 'decouvrir-kyoto-guide',
    title: 'Découvrir Kyoto : guide des temples et jardins incontournables',
    slug: 'decouvrir-kyoto-guide',
    excerpt: 'Explorez les merveilles de Kyoto, ancienne capitale impériale, à travers ses temples historiques et ses jardins zen.',
    content: `
# Découvrir Kyoto : guide des temples et jardins incontournables

Kyoto, ancienne capitale impériale du Japon, est un véritable joyau culturel qui abrite plus de 2000 temples et sanctuaires.

## Les temples incontournables

### Kinkaku-ji (Pavillon d'Or)
Le temple le plus emblématique de Kyoto, recouvert de feuilles d'or.

### Fushimi Inari Taisha
Célèbre pour ses milliers de torii vermillion qui serpentent sur la montagne.

### Kiyomizu-dera
Temple en bois offrant une vue panoramique sur la ville.

## Les jardins zen

### Ryoan-ji
Le jardin de pierres le plus célèbre du Japon.

### Ginkaku-ji (Pavillon d'Argent)
Temple entouré de jardins japonais traditionnels.

## Conseils de visite

- Visitez tôt le matin pour éviter la foule
- Respectez les règles de chaque temple
- Portez des chaussures faciles à enlever
- Apportez de la monnaie pour les offrandes

## Conclusion

Kyoto offre une expérience spirituelle et culturelle unique qui vous transportera dans le Japon traditionnel.
    `,
    author: 'Équipe JapanSit',
    publishedAt: '2024-01-12T14:30:00Z',
    category: 'travel',
    tags: ['kyoto', 'temples', 'voyage', 'culture'],
    image: '/images/blog/kyoto-temples.jpg',
    readTime: 6,
    featured: true,
    status: 'published'
  },
  {
    id: 'apprendre-japonais-methodes',
    title: 'Les meilleures méthodes pour apprendre le japonais efficacement',
    slug: 'apprendre-japonais-methodes',
    excerpt: 'Découvrez les techniques et ressources les plus efficaces pour maîtriser la langue japonaise.',
    content: `
# Les meilleures méthodes pour apprendre le japonais efficacement

Apprendre le japonais peut sembler intimidant, mais avec les bonnes méthodes, c'est tout à fait réalisable.

## Les bases : Hiragana et Katakana

### Hiragana
L'alphabet syllabique de base du japonais.

### Katakana
Utilisé pour les mots étrangers et l'emphase.

## Méthodes d'apprentissage

### Applications mobiles
- Duolingo
- Busuu
- Anki pour les flashcards

### Ressources en ligne
- Tae Kim's Guide
- Imabi
- NHK World japonais facile

### Immersion
- Regarder des anime avec sous-titres
- Écouter des podcasts japonais
- Lire des mangas

## Conseils pratiques

- Pratiquez tous les jours, même 15 minutes
- Concentrez-vous sur les kana avant les kanji
- Trouvez un partenaire d'échange linguistique
- Soyez patient avec vous-même

## Conclusion

L'apprentissage du japonais est un marathon, pas un sprint. Avec de la constance et les bonnes ressources, vous atteindrez vos objectifs.
    `,
    author: 'Équipe JapanSit',
    publishedAt: '2024-01-08T09:15:00Z',
    category: 'language',
    tags: ['japonais', 'apprentissage', 'méthodes', 'langue'],
    image: '/images/blog/apprendre-japonais.jpg',
    readTime: 7,
    featured: false,
    status: 'published'
  },
  {
    id: 'cuisine-japonaise-guide',
    title: 'Introduction à la cuisine japonaise : au-delà des sushis',
    slug: 'cuisine-japonaise-guide',
    excerpt: 'Explorez la richesse de la gastronomie japonaise et découvrez des plats authentiques moins connus.',
    content: `
# Introduction à la cuisine japonaise : au-delà des sushis

La cuisine japonaise est bien plus riche et variée que les sushis que nous connaissons en Occident.

## Les plats incontournables

### Ramen
Les nouilles dans un bouillon savoureux, déclinées en plusieurs variantes.

### Tempura
Légumes et fruits de mer frits dans une pâte légère.

### Yakitori
Brochettes de poulet grillées avec différentes sauces.

### Okonomiyaki
Galette japonaise aux légumes et viande.

## Les spécialités régionales

### Hokkaido
Réputé pour ses fruits de mer et ses produits laitiers.

### Kansai
Berceau de l'okonomiyaki et du takoyaki.

### Okinawa
Cuisine unique influencée par les îles tropicales.

## Étiquette alimentaire

- Dire "Itadakimasu" avant de manger
- Ne pas planter ses baguettes dans le riz
- Faire du bruit en mangeant des nouilles est acceptable

## Conclusion

La cuisine japonaise offre une expérience gustative authentique qui reflète la culture et les traditions du pays.
    `,
    author: 'Équipe JapanSit',
    publishedAt: '2024-01-05T16:45:00Z',
    category: 'culture',
    tags: ['cuisine', 'culture', 'gastronomie', 'japon'],
    image: '/images/blog/cuisine-japonaise.jpg',
    readTime: 5,
    featured: false,
    status: 'published'
  },
  {
    id: 'travailler-japon-conseils',
    title: 'Travailler au Japon : conseils pour réussir sa carrière',
    slug: 'travailler-japon-conseils',
    excerpt: 'Guide pratique pour comprendre la culture du travail japonaise et réussir professionnellement.',
    content: `
# Travailler au Japon : conseils pour réussir sa carrière

Le monde du travail japonais a ses propres codes et traditions qu'il est important de comprendre.

## La culture d'entreprise

### Hiérarchie (Senpai-Kohai)
Le respect de la hiérarchie est fondamental dans les entreprises japonaises.

### Travail en équipe
L'harmonie de groupe (wa) est prioritaire sur l'individualisme.

### Ponctualité
Être à l'heure est essentiel, arriver en avance est encore mieux.

## Types de contrats

### Seishain (Employé permanent)
Contrat à durée indéterminée avec sécurité d'emploi.

### Keiyaku-shain (Employé contractuel)
Contrat à durée déterminée, plus flexible.

## Conseils pour la recherche d'emploi

- Utilisez les sites d'emploi japonais
- Préparez un CV au format japonais
- Maîtrisez les bases du japonais des affaires
- Réseau professionnel important

## Équilibre vie professionnelle/personnelle

Le Japon travaille à améliorer l'équilibre vie-travail avec des initiatives comme la "Premium Friday".

## Conclusion

Travailler au Japon peut être très enrichissant si vous comprenez et respectez les codes culturels.
    `,
    author: 'Équipe JapanSit',
    publishedAt: '2024-01-03T11:20:00Z',
    category: 'work',
    tags: ['travail', 'carrière', 'culture', 'entreprise'],
    image: '/images/blog/travailler-japon.jpg',
    readTime: 9,
    featured: false,
    status: 'published'
  },
  {
    id: 'tokyo-quartiers-guide',
    title: 'Guide des quartiers de Tokyo : où vivre et que visiter',
    slug: 'tokyo-quartiers-guide',
    excerpt: 'Découvrez les différents quartiers de Tokyo et leurs spécificités pour mieux choisir où vivre ou que visiter.',
    content: `
# Guide des quartiers de Tokyo : où vivre et que visiter

Tokyo est une métropole immense composée de nombreux quartiers aux caractères très différents.

## Quartiers pour les jeunes

### Shibuya
Le cœur de la culture jeune avec le célèbre carrefour.

### Harajuku
Centre de la mode kawaii et de la culture pop.

### Shinjuku
Quartier d'affaires le jour, divertissement la nuit.

## Quartiers traditionnels

### Asakusa
Tokyo historique avec le temple Sensoji.

### Ueno
Musées et parcs, parfait pour la culture.

## Quartiers résidentiels

### Setagaya
Quartier familial calme et verdoyant.

### Kichijoji
Très populaire auprès des jeunes adultes.

## Conseils pour choisir

- Proximité des transports
- Budget logement
- Ambiance recherchée
- Commodités (magasins, restaurants)

## Conclusion

Chaque quartier de Tokyo a sa personnalité. Prenez le temps de les explorer pour trouver celui qui vous correspond.
    `,
    author: 'Équipe JapanSit',
    publishedAt: '2024-01-01T13:00:00Z',
    category: 'lifestyle',
    tags: ['tokyo', 'quartiers', 'logement', 'vie quotidienne'],
    image: '/images/blog/tokyo-quartiers.jpg',
    readTime: 6,
    featured: false,
    status: 'published'
  }
];

export const blogComments: BlogComment[] = [
  {
    id: 'comment-1',
    postId: 'visa-etudiant-guide-complet',
    author: 'Marie D.',
    email: 'marie@example.com',
    content: 'Merci pour ce guide très complet ! J\'ai suivi vos conseils et j\'ai obtenu mon visa sans problème.',
    createdAt: '2024-01-16T09:30:00Z',
    approved: true
  },
  {
    id: 'comment-2',
    postId: 'visa-etudiant-guide-complet',
    author: 'Pierre L.',
    email: 'pierre@example.com',
    content: 'Combien de temps faut-il compter pour recevoir le COE ?',
    createdAt: '2024-01-16T14:15:00Z',
    approved: true
  },
  {
    id: 'comment-3',
    postId: 'decouvrir-kyoto-guide',
    author: 'Sophie M.',
    email: 'sophie@example.com',
    content: 'Kyoto est vraiment magique ! J\'ai visité tous les temples mentionnés, ils sont tous magnifiques.',
    createdAt: '2024-01-13T10:45:00Z',
    approved: true
  }
];
