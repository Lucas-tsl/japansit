# 🎨 Améliorations CSS pour JapanSit

## Ajoutez ces styles dans votre globals.css

```css
/* Animations améliorées */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}

@keyframes pulse-gentle {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}

@keyframes shimmer {
  0% {
    background-position: -468px 0;
  }
  100% {
    background-position: 468px 0;
  }
}

/* Classes utilitaires */
.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out;
}

.animate-fade-in-left {
  animation: fadeInLeft 0.6s ease-out;
}

.animate-fade-in-right {
  animation: fadeInRight 0.6s ease-out;
}

.animate-float {
  animation: float 3s ease-in-out infinite;
}

.animate-pulse-gentle {
  animation: pulse-gentle 2s ease-in-out infinite;
}

.animate-shimmer {
  animation: shimmer 2s infinite;
  background: linear-gradient(to right, #eff6ff 4%, #dbeafe 25%, #eff6ff 36%);
  background-size: 1000px 100%;
}

/* Effet de parallaxe simple */
.parallax-slow {
  transform: translateZ(0);
  will-change: transform;
}

/* Hover effects améliorés */
.hover-lift {
  transition: all 0.3s ease;
}

.hover-lift:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

/* Bordures japonaises */
.japanese-border {
  border: 2px solid #DC143C;
  border-image: linear-gradient(45deg, #DC143C, #FFD700, #DC143C) 1;
}

/* Ombres japonaises */
.japanese-shadow {
  box-shadow: 0 4px 20px rgba(220, 20, 60, 0.1);
}

.japanese-shadow-hover:hover {
  box-shadow: 0 8px 30px rgba(220, 20, 60, 0.2);
}

/* Dégradés de texte */
.gradient-text-japan {
  background: linear-gradient(45deg, #DC143C, #FFD700);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* États de chargement */
.loading-skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}

/* Scroll reveal */
.scroll-reveal {
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s ease;
}

.scroll-reveal.revealed {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive typography */
@media (max-width: 768px) {
  .text-responsive {
    font-size: clamp(1rem, 4vw, 1.5rem);
  }
}

/* Focus states améliorés */
.focus-japan:focus {
  outline: 2px solid #DC143C;
  outline-offset: 2px;
}

/* Transitions fluides */
.smooth-transition {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

/* Indicateurs visuels */
.new-badge::after {
  content: "新";
  background: #DC143C;
  color: white;
  font-size: 0.7rem;
  padding: 2px 6px;
  border-radius: 50%;
  margin-left: 8px;
  font-weight: bold;
}

/* Boutons japonais */
.btn-japan {
  background: linear-gradient(45deg, #DC143C, #FF6B6B);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.btn-japan::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.5s;
}

.btn-japan:hover::before {
  left: 100%;
}

.btn-japan:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(220, 20, 60, 0.3);
}

/* Print styles */
@media print {
  .no-print {
    display: none !important;
  }
  
  .print-only {
    display: block !important;
  }
}
```

## 🎯 Classes à utiliser dans vos composants

1. **`.animate-fade-in-up`** - Animation d'entrée par le bas
2. **`.hover-lift`** - Effet de survol qui soulève l'élément
3. **`.japanese-shadow`** - Ombre avec couleur japonaise
4. **`.gradient-text-japan`** - Texte avec dégradé japonais
5. **`.btn-japan`** - Bouton avec style japonais

## 🚀 Implémentation

Ajoutez ces classes dans vos composants existants pour améliorer instantanément l'UX !
