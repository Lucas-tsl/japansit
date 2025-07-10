'use client';

export default function PWAScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          // Enregistrer le service worker
          if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
              navigator.serviceWorker.register('/sw.js')
                .then((registration) => {
                  console.log('Service Worker enregistré:', registration.scope);
                })
                .catch((error) => {
                  console.log('Erreur Service Worker:', error);
                });
            });
          }

          // Gérer l'installation PWA
          let deferredPrompt;
          
          window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            showInstallButton();
          });

          const showInstallButton = () => {
            const button = document.createElement('button');
            button.innerHTML = '📱 Installer l\\'app';
            button.className = 'fixed bottom-4 right-4 bg-japan-red text-white px-4 py-2 rounded-lg shadow-lg hover:bg-red-600 transition-colors z-50';
            button.id = 'pwa-install-btn';
            button.addEventListener('click', async () => {
              if (deferredPrompt) {
                deferredPrompt.prompt();
                const { outcome } = await deferredPrompt.userChoice;
                console.log('Choix utilisateur:', outcome);
                deferredPrompt = null;
                button.remove();
              }
            });
            document.body.appendChild(button);
          };

          window.addEventListener('appinstalled', () => {
            console.log('PWA installée');
            const button = document.getElementById('pwa-install-btn');
            if (button) button.remove();
          });
        `
      }}
    />
  );
}
