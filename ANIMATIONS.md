# 🎨 Guide des Animations JapanSit

## ✨ Animations Implémentées

### 1. Animations de Base
- **fadeIn** : Apparition en fondu
- **fadeInUp** : Apparition en fondu depuis le bas
- **fadeInLeft** : Apparition en fondu depuis la gauche
- **fadeInRight** : Apparition en fondu depuis la droite
- **slideDown** : Glissement vers le bas
- **float** : Flottement doux
- **bounce-gentle** : Rebond doux
- **pulse-gentle** : Pulsation douce

### 2. Animations Japonaises Avancées
- **sakura-fall** : Chute de pétales de cerisier
- **wave** : Vague japonaise
- **breathe** : Respiration zen
- **brush-stroke** : Trait de pinceau
- **gentle-rotate** : Rotation douce
- **color-pulse** : Pulsation de couleur
- **elegant-slide** : Glissement élégant
- **soft-zoom** : Zoom doux
- **reveal-progress** : Révélation progressive

### 3. Effets Hover
- **hover-lift** : Élévation au survol
- **hover-scale** : Agrandissement au survol
- **hover-glow** : Effet de brillance
- **micro-bounce** : Micro-rebond au clic

### 4. Textures et Effets
- **texture-paper** : Texture papier japonais
- **texture-bamboo** : Texture bambou
- **floating-particles** : Particules flottantes
- **japanese-shadow** : Ombres japonaises
- **gradient-text-japan** : Dégradé de texte japonais

## 🎯 Composants Animés

### Hero Section
- Logo avec rebond doux
- Titre avec effet typewriter
- Pulsation de couleur
- Éléments décoratifs flottants
- Particules de cerisier

### FeaturedSections
- Cartes avec effet de vague
- Animations séquentielles
- Hover avec brillance
- Texture papier de fond

### Navbar
- Apparition glissante
- Logo avec animation
- Boutons avec micro-bounce
- Dégradé de texte

### Newsletter
- Éléments décoratifs animés
- Champs avec effet lift
- Bouton avec brillance
- Rotation douce des éléments

### FloatingParticles
- Particules de cerisier
- Étoiles scintillantes
- Feuilles flottantes
- Animations aléatoires

## 🔧 Utilisation

### Classes CSS Disponibles
```css
/* Animations d'entrée */
.animate-fade-in
.animate-fade-in-up
.animate-fade-in-left
.animate-fade-in-right
.animate-slide-down

/* Animations continues */
.animate-float
.animate-breathe
.animate-bounce-gentle
.animate-gentle-rotate
.animate-color-pulse

/* Effets hover */
.hover-lift
.hover-scale
.hover-glow
.micro-bounce

/* Textures */
.texture-paper
.texture-bamboo
.floating-particles
```

### Delays Disponibles
```css
.delay-100 /* 100ms */
.delay-200 /* 200ms */
.delay-300 /* 300ms */
.delay-400 /* 400ms */
.delay-500 /* 500ms */
```

## 🎨 Personnalisation

### Variables CSS
```css
:root {
  --japan-red: #DC143C;
  --japan-white: #FFFFFF;
  --sakura-pink: #FFB7C5;
  --cherry-blossom: #FFCCCB;
  --bamboo-green: #228B22;
  --temple-gold: #FFD700;
  --indigo-blue: #4169E1;
  --sunset-orange: #FF8C00;
}
```

### Durées d'Animation
- **Courte** : 0.3s (micro-interactions)
- **Moyenne** : 0.6s (animations standards)
- **Longue** : 1.2s (animations complexes)
- **Continue** : 2-4s (animations infinies)

## 🌟 Conseils d'Utilisation

1. **Performance** : Évitez trop d'animations simultanées
2. **Accessibilité** : Respectez `prefers-reduced-motion`
3. **Cohérence** : Utilisez des durées cohérentes
4. **Subtilité** : Privilégiez les animations douces
5. **Contexte** : Adaptez les animations au contenu

## 📱 Responsive

Les animations s'adaptent automatiquement :
- Mobile : Animations réduites
- Tablette : Animations standards
- Desktop : Animations complètes

## 🚀 Prochaines Améliorations

- [ ] Animations basées sur le scroll
- [ ] Parallaxe avancé
- [ ] Animations 3D CSS
- [ ] Particules WebGL
- [ ] Animations de chargement
- [ ] Transitions de page
