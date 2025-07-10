import { User, AuthSession, demoUsers, generateUserId, generateToken, getTokenExpiry, isValidEmail, isValidPassword } from '@/data/authData';

interface LoginCredentials {
  email: string;
  password: string;
}

interface RegisterData {
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  password: string;
}

export class AuthService {
  private static instance: AuthService;
  private currentSession: AuthSession | null = null;
  private users: User[] = [...demoUsers];

  static getInstance(): AuthService {
    if (!AuthService.instance) {
      AuthService.instance = new AuthService();
    }
    return AuthService.instance;
  }

  constructor() {
    // Charger la session depuis le localStorage si disponible
    if (typeof window !== 'undefined') {
      this.loadSessionFromStorage();
    }
  }

  // Authentification
  async login(credentials: LoginCredentials): Promise<{ success: boolean; session?: AuthSession; error?: string }> {
    if (!isValidEmail(credentials.email)) {
      return { success: false, error: 'Email invalide' };
    }

    if (!credentials.password) {
      return { success: false, error: 'Mot de passe requis' };
    }

    // Trouver l'utilisateur (en démo, on accepte n'importe quel mot de passe)
    const user = this.users.find(u => u.email === credentials.email);
    if (!user) {
      return { success: false, error: 'Utilisateur non trouvé' };
    }

    // Créer une session
    const session: AuthSession = {
      user: {
        ...user,
        lastActiveAt: new Date().toISOString()
      },
      token: generateToken(),
      expiresAt: getTokenExpiry()
    };

    this.currentSession = session;
    this.saveSessionToStorage(session);

    return { success: true, session };
  }

  async register(data: RegisterData): Promise<{ success: boolean; session?: AuthSession; error?: string }> {
    // Validation
    if (!isValidEmail(data.email)) {
      return { success: false, error: 'Email invalide' };
    }

    if (!isValidPassword(data.password)) {
      return { success: false, error: 'Le mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre' };
    }

    if (!data.username || data.username.length < 3) {
      return { success: false, error: 'Le nom d\'utilisateur doit contenir au moins 3 caractères' };
    }

    if (!data.firstName || !data.lastName) {
      return { success: false, error: 'Prénom et nom requis' };
    }

    // Vérifier si l'email existe déjà
    if (this.users.some(u => u.email === data.email)) {
      return { success: false, error: 'Un compte avec cet email existe déjà' };
    }

    // Vérifier si le nom d'utilisateur existe déjà
    if (this.users.some(u => u.username === data.username)) {
      return { success: false, error: 'Ce nom d\'utilisateur est déjà pris' };
    }

    // Créer le nouvel utilisateur
    const newUser: User = {
      id: generateUserId(),
      email: data.email,
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
      interests: [],
      joinedAt: new Date().toISOString(),
      lastActiveAt: new Date().toISOString(),
      role: 'user',
      verified: false,
      preferences: {
        theme: 'light',
        language: 'fr',
        notifications: {
          email: true,
          push: true,
          newsletter: true
        }
      }
    };

    this.users.push(newUser);

    // Créer une session
    const session: AuthSession = {
      user: newUser,
      token: generateToken(),
      expiresAt: getTokenExpiry()
    };

    this.currentSession = session;
    this.saveSessionToStorage(session);

    return { success: true, session };
  }

  logout(): void {
    this.currentSession = null;
    this.clearSessionFromStorage();
  }

  // Gestion des sessions
  getCurrentSession(): AuthSession | null {
    if (!this.currentSession) {
      return null;
    }

    // Vérifier si la session a expiré
    if (new Date() > new Date(this.currentSession.expiresAt)) {
      this.logout();
      return null;
    }

    return this.currentSession;
  }

  getCurrentUser(): User | null {
    const session = this.getCurrentSession();
    return session?.user || null;
  }

  isAuthenticated(): boolean {
    return this.getCurrentSession() !== null;
  }

  // Gestion des utilisateurs
  async updateUser(userId: string, updates: Partial<User>): Promise<{ success: boolean; user?: User; error?: string }> {
    const userIndex = this.users.findIndex(u => u.id === userId);
    if (userIndex === -1) {
      return { success: false, error: 'Utilisateur non trouvé' };
    }

    const updatedUser = { ...this.users[userIndex], ...updates };
    this.users[userIndex] = updatedUser;

    // Mettre à jour la session si c'est l'utilisateur actuel
    if (this.currentSession?.user.id === userId) {
      this.currentSession.user = updatedUser;
      this.saveSessionToStorage(this.currentSession);
    }

    return { success: true, user: updatedUser };
  }

  async changePassword(userId: string, currentPassword: string, newPassword: string): Promise<{ success: boolean; error?: string }> {
    if (!isValidPassword(newPassword)) {
      return { success: false, error: 'Le nouveau mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un chiffre' };
    }

    // En démo, on accepte n'importe quel mot de passe actuel
    return { success: true };
  }

  // Gestion des favoris
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async addFavorite(_userId: string, _itemId: string, _itemType: string): Promise<{ success: boolean; error?: string }> {
    // En démo, on simule l'ajout aux favoris
    return { success: true };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async removeFavorite(_userId: string, _itemId: string): Promise<{ success: boolean; error?: string }> {
    // En démo, on simule la suppression des favoris
    return { success: true };
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async getFavorites(_userId: string): Promise<string[]> {
    // En démo, on retourne une liste vide
    return [];
  }

  // Stockage local
  private saveSessionToStorage(session: AuthSession): void {
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('japansit_session', JSON.stringify(session));
      } catch (error) {
        console.warn('Impossible de sauvegarder la session:', error);
      }
    }
  }

  private loadSessionFromStorage(): void {
    if (typeof window !== 'undefined') {
      try {
        const sessionData = localStorage.getItem('japansit_session');
        if (sessionData) {
          const session = JSON.parse(sessionData) as AuthSession;
          // Vérifier si la session n'a pas expiré
          if (new Date() <= new Date(session.expiresAt)) {
            this.currentSession = session;
          } else {
            this.clearSessionFromStorage();
          }
        }
      } catch (error) {
        console.warn('Impossible de charger la session:', error);
        this.clearSessionFromStorage();
      }
    }
  }

  private clearSessionFromStorage(): void {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('japansit_session');
      } catch (error) {
        console.warn('Impossible de supprimer la session:', error);
      }
    }
  }

  // Utilitaires
  getUserById(userId: string): User | null {
    return this.users.find(u => u.id === userId) || null;
  }

  getUserByEmail(email: string): User | null {
    return this.users.find(u => u.email === email) || null;
  }

  getUserByUsername(username: string): User | null {
    return this.users.find(u => u.username === username) || null;
  }

  getAllUsers(): User[] {
    return this.users;
  }
}
