export default function FloatingParticles({ type = 'sakura' }: { type?: 'sakura' | 'stars' | 'leaves' }) {
  const particles = Array.from({ length: 10 }, (_, i) => i);
  
  const getParticleEmoji = () => {
    switch (type) {
      case 'sakura':
        return '🌸';
      case 'stars':
        return '✨';
      case 'leaves':
        return '🍃';
      default:
        return '🌸';
    }
  };

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <div
          key={particle}
          className={`absolute text-2xl opacity-30 animate-sakura-fall`}
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          {getParticleEmoji()}
        </div>
      ))}
    </div>
  );
}
