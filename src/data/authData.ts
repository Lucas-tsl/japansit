// Types pour l'authentification
export interface User {
  id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  avatar?: string;
  bio?: string;
  location?: string;
  website?: string;
  interests: string[];
  joinedAt: string;
  lastActiveAt: string;
  role: 'user' | 'moderator' | 'admin';
  verified: boolean;
  preferences: {
    theme: 'light' | 'dark' | 'system';
    language: 'fr' | 'en' | 'ja';
    notifications: {
      email: boolean;
      push: boolean;
      newsletter: boolean;
    };
  };
}

export interface AuthSession {
  user: User;
  token: string;
  expiresAt: string;
}

// Utilisateurs de démonstration
export const demoUsers: User[] = [
  {
    id: 'user-1',
    email: 'marie@example.com',
    username: 'marie_d',
    firstName: 'Marie',
    lastName: 'Dubois',
    avatar: '/images/avatars/marie.jpg',
    bio: 'Passionnée du Japon, étudiante en japonais à l\'université de Tokyo',
    location: 'Tokyo, Japon',
    website: 'https://marie-tokyo.blog',
    interests: ['culture japonaise', 'voyage', 'manga', 'cuisine'],
    joinedAt: '2023-06-15T10:00:00Z',
    lastActiveAt: '2024-01-15T14:30:00Z',
    role: 'user',
    verified: true,
    preferences: {
      theme: 'light',
      language: 'fr',
      notifications: {
        email: true,
        push: true,
        newsletter: true
      }
    }
  },
  {
    id: 'user-2',
    email: 'pierre@example.com',
    username: 'pierre_l',
    firstName: 'Pierre',
    lastName: 'Leroy',
    avatar: '/images/avatars/pierre.jpg',
    bio: 'Ingénieur français travaillant à Osaka depuis 3 ans',
    location: 'Osaka, Japon',
    interests: ['technologie', 'travail au Japon', 'sport', 'voyages'],
    joinedAt: '2023-03-20T08:00:00Z',
    lastActiveAt: '2024-01-14T09:15:00Z',
    role: 'user',
    verified: true,
    preferences: {
      theme: 'dark',
      language: 'fr',
      notifications: {
        email: true,
        push: false,
        newsletter: false
      }
    }
  },
  {
    id: 'user-3',
    email: 'admin@japansit.com',
    username: 'admin',
    firstName: 'Admin',
    lastName: 'JapanSit',
    avatar: '/images/avatars/admin.jpg',
    bio: 'Équipe JapanSit - Votre guide pour le Japon',
    location: 'France',
    interests: ['aide aux voyageurs', 'culture japonaise', 'éducation'],
    joinedAt: '2023-01-01T00:00:00Z',
    lastActiveAt: '2024-01-16T16:00:00Z',
    role: 'admin',
    verified: true,
    preferences: {
      theme: 'system',
      language: 'fr',
      notifications: {
        email: true,
        push: true,
        newsletter: true
      }
    }
  }
];

// Fonctions utilitaires
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidPassword = (password: string): boolean => {
  // Au moins 8 caractères, une majuscule, une minuscule et un chiffre
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
};

export const generateUserId = (): string => {
  return `user-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
};

export const generateToken = (): string => {
  return Math.random().toString(36).substr(2) + Date.now().toString(36);
};

export const getTokenExpiry = (days: number = 30): string => {
  const expiryDate = new Date();
  expiryDate.setDate(expiryDate.getDate() + days);
  return expiryDate.toISOString();
};
