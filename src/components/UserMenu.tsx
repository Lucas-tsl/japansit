'use client';

import { UserIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { AuthService } from '@/services/authService';
import Link from 'next/link';

interface UserMenuProps {
  className?: string;
}

export default function UserMenu({ className = '' }: UserMenuProps) {
  const authService = AuthService.getInstance();
  const currentUser = authService.getCurrentUser();

  if (currentUser) {
    return (
      <div className={`flex items-center space-x-2 ${className}`}>
        <div className="flex items-center space-x-2 text-gray-700 dark:text-gray-300">
          <div className="w-8 h-8 bg-japan-red rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-medium">
              {currentUser.firstName.charAt(0)}{currentUser.lastName.charAt(0)}
            </span>
          </div>
          <span className="text-sm">
            Bonjour, {currentUser.firstName}
          </span>
        </div>
        <button
          onClick={() => {
            authService.logout();
            window.location.reload();
          }}
          className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          title="Se déconnecter"
          aria-label="Se déconnecter"
        >
          <ArrowRightOnRectangleIcon className="h-5 w-5" />
        </button>
      </div>
    );
  }

  return (
    <Link
      href="/connexion"
      className={`flex items-center space-x-2 px-4 py-2 bg-japan-red text-white rounded-lg hover:bg-red-600 transition-colors ${className}`}
    >
      <UserIcon className="h-5 w-5" />
      <span>Connexion</span>
    </Link>
  );
}
