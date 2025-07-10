interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  type?: 'japan' | 'dots' | 'pulse';
  className?: string;
}

export default function LoadingSpinner({ 
  size = 'md', 
  type = 'japan', 
  className = '' 
}: LoadingSpinnerProps) {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  if (type === 'japan') {
    return (
      <div className={`loading-japan ${sizeClasses[size]} ${className}`}></div>
    );
  }

  if (type === 'dots') {
    return (
      <div className={`flex space-x-1 ${className}`}>
        <div className="w-2 h-2 bg-japan-red rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-japan-red rounded-full animate-bounce delay-100"></div>
        <div className="w-2 h-2 bg-japan-red rounded-full animate-bounce delay-200"></div>
      </div>
    );
  }

  return (
    <div className={`animate-pulse ${className}`}>
      <div className={`${sizeClasses[size]} bg-japan-red rounded-full opacity-75`}></div>
    </div>
  );
}
