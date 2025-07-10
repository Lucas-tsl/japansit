// Composant d'animation simple pour les sections
export default function AnimatedSection({ 
  children, 
  className = "",
  delay = 0,
  animation = 'fade-in'
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'slide-up' | 'slide-left' | 'slide-right' | 'zoom' | 'bounce';
}) {
  const getAnimationClass = () => {
    switch (animation) {
      case 'slide-up':
        return 'animate-fade-in-up';
      case 'slide-left':
        return 'animate-fade-in-left';
      case 'slide-right':
        return 'animate-fade-in-right';
      case 'zoom':
        return 'animate-soft-zoom';
      case 'bounce':
        return 'animate-bounce-gentle';
      default:
        return 'animate-fade-in';
    }
  };

  return (
    <div 
      className={`${getAnimationClass()} opacity-0 ${className}`}
      style={{ 
        animationDelay: `${delay}ms`,
        animationFillMode: 'forwards'
      }}
    >
      {children}
    </div>
  );
}
