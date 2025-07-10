# JapanSit 🇯🇵

Un blog complet et moderne sur le Japon construit avec Next.js et Tailwind CSS.

## 🌸 Aperçu

JapanSit est une plateforme complète dédiée à la culture japonaise, offrant des ressources pour étudier, travailler, voyager au Japon et découvrir sa riche culture.

### ✨ Fonctionnalités

- **Navigation intuitive** avec méga-menu organisé par thématiques
- **12 sections thématiques** complètes (Étudier, Travailler, Voyager, etc.)
- **Design responsive** optimisé pour tous les appareils
- **Forum communautaire** pour échanger avec d'autres passionnés
- **Interface moderne** avec animations et effets visuels japonais

### 🎯 Sections Principales

#### Vie au Japon 🏮
- **Étudier** - Universités, bourses, processus d'admission
- **Travailler** - Opportunités professionnelles, visa de travail
- **Voyager** - Destinations, itinéraires, conseils pratiques
- **Se Préparer** - Visa, logement, démarches administratives

#### Culture 🎋
- **Traditions** - Cérémonies, arts martiaux, festivals
- **Histoire** - Époques, personnages historiques
- **Animés & Manga** - Studios, œuvres cultes, culture otaku
- **Lieux** - Temples, villes, destinations incontournables

#### Apprentissage 📚
- **Langue** - Ressources pour apprendre le japonais
- **Musique** - J-Pop, J-Rock, playlists
- **Mode** - Style japonais, tendances kawaii
- **Forum** - Communauté et discussions

## 🚀 Technologies

- **Next.js 15** - Framework React full-stack
- **Tailwind CSS 4** - Framework CSS moderne
- **TypeScript** - Typage statique
- **Vercel** - Plateforme de déploiement

## 🛠️ Installation

```bash
# Cloner le repository
git clone https://github.com/Lucas-tsl/japansit.git

# Installer les dépendances
cd japansit
npm install

# Lancer le serveur de développement
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur.

## 📱 Responsive Design

Le site est entièrement responsive avec :
- **Desktop** - Méga-menu avec dropdowns élégants
- **Mobile** - Menu hamburger avec navigation optimisée
- **Tablette** - Interface adaptée aux écrans moyens

## 🎨 Design System

### Palette de Couleurs Japonaises
- **Japan Red** (#DC143C) - Couleur principale
- **Sakura Pink** (#FFB7C5) - Accents délicats
- **Temple Gold** (#FFD700) - Éléments premium
- **Bamboo Green** (#228B22) - Nature et tradition
- **Indigo Blue** (#4169E1) - Éléments modernes

### Typographies
- **Noto Sans JP** - Police japonaise principale
- **Inter** - Police moderne pour le contenu

## 🚀 Déploiement

### Vercel (Recommandé)

1. **Via GitHub** (automatique)
   - Connectez votre compte GitHub à Vercel
   - Importez le repository `japansit`
   - Vercel détectera automatiquement Next.js
   - Le déploiement se fera automatiquement

2. **Via CLI Vercel**
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel

# Pour les déploiements futurs
vercel --prod
```

### Variables d'Environnement

Aucune variable d'environnement requise pour le déploiement de base.

### Scripts de Production

```bash
npm run build    # Build optimisé
npm run start    # Serveur de production local
npm run lint     # Vérification du code
```

## 📂 Structure du Projet

```
src/
├── app/                 # Pages Next.js App Router
│   ├── etudier/        # Page Étudier au Japon
│   ├── travailler/     # Page Travailler au Japon
│   ├── voyager/        # Page Voyager au Japon
│   ├── preparer/       # Page Se Préparer
│   ├── langue/         # Page Langue Japonaise
│   ├── musique/        # Page Musique J-Pop/J-Rock
│   ├── mode/           # Page Mode Japonaise
│   ├── animes/         # Page Animés & Manga
│   ├── lieux/          # Page Lieux & Destinations
│   ├── traditions/     # Page Traditions
│   ├── histoire/       # Page Histoire du Japon
│   ├── forum/          # Page Forum Communauté
│   ├── layout.tsx      # Layout racine
│   ├── page.tsx        # Page d'accueil
│   └── globals.css     # Styles globaux
├── components/         # Composants réutilisables
│   ├── Navbar.tsx      # Navigation principale
│   ├── Footer.tsx      # Pied de page
│   ├── Hero.tsx        # Section héro accueil
│   ├── MegaMenu.tsx    # Méga-menu desktop
│   ├── MobileMenu.tsx  # Menu mobile responsive
│   ├── SearchComponent.tsx
│   ├── FeaturedSections.tsx
│   ├── LatestPosts.tsx
│   └── NewsletterSignup.tsx
└── context/           # Contextes React
    └── AuthContext.tsx # Gestion authentification
```

## 🤝 Contribution

1. **Fork** le projet
2. **Créer** une branche (`git checkout -b feature/nouvelle-fonctionnalite`)
3. **Commit** vos changements (`git commit -m 'Ajout nouvelle fonctionnalité'`)
4. **Push** vers la branche (`git push origin feature/nouvelle-fonctionnalite`)
5. **Ouvrir** une Pull Request

## 📄 License

Projet sous licence MIT. Voir [LICENSE](LICENSE) pour plus de détails.

## 🙏 Remerciements

- Communauté Next.js
- Équipe Tailwind CSS
- Google Fonts (Noto Sans JP)
- Communauté des développeurs passionnés du Japon

---

Créé avec ❤️ pour la communauté francophone passionnée du Japon
