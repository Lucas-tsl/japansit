import Link from 'next/link';

export default function ConnexionPage() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <div className="text-center">
            <span className="text-4xl">🇯🇵</span>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
              Connexion à JapanSit
            </h2>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Accédez à votre compte pour une expérience personnalisée
            </p>
          </div>
        </div>
        
        {/* Comptes de démonstration */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Comptes de démonstration
          </h3>
          <div className="space-y-3">
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="font-medium text-gray-900 dark:text-white">Marie D.</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">marie@example.com</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Étudiante à Tokyo - Passionnée de culture japonaise
              </div>
            </div>
            <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
              <div className="font-medium text-gray-900 dark:text-white">Pierre L.</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">pierre@example.com</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Ingénieur à Osaka - Expert en technologie
              </div>
            </div>
          </div>
        </div>

        {/* Formulaire de connexion */}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6">
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white bg-white dark:bg-gray-700 rounded-md focus:outline-none focus:ring-japan-red focus:border-japan-red focus:z-10 sm:text-sm"
                placeholder="Adresse email"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 text-gray-900 dark:text-white bg-white dark:bg-gray-700 rounded-md focus:outline-none focus:ring-japan-red focus:border-japan-red focus:z-10 sm:text-sm"
                placeholder="Mot de passe"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-japan-red focus:ring-japan-red border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                  Se souvenir de moi
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-japan-red hover:text-red-500">
                  Mot de passe oublié ?
                </a>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-japan-red hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-japan-red"
              >
                Se connecter
              </button>
            </div>
          </form>
        </div>

        {/* Lien d'inscription */}
        <div className="text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Pas encore de compte ?{' '}
            <Link href="/inscription" className="font-medium text-japan-red hover:text-red-500">
              Créer un compte
            </Link>
          </p>
        </div>

        {/* Retour à l'accueil */}
        <div className="text-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
          >
            ← Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
