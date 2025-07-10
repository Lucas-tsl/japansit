// Configuration pour améliorer les performances
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimisations d'images
  images: {
    formats: ['image/avif', 'image/webp'],
    domains: ['localhost', 'japansit-1z20iwwx1-lucas-tsls-projects.vercel.app'],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 jours
  },
  
  // Compression
  compress: true,
  
  // Headers de sécurité
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // PWA et optimisations
  experimental: {
    optimizeCss: true,
    gzipSize: true,
  },
};

module.exports = nextConfig;
