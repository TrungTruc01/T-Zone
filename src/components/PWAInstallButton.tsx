import React from 'react';
import { usePWA } from '../hooks/usePWA';

const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, installApp } = usePWA();

  const handleInstallClick = async () => {
    await installApp();
  };

  if (isInstalled || !isInstallable) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button
        onClick={handleInstallClick}
        className="bg-gradient-to-r from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-semibold py-3 px-6 rounded-full shadow-lg transform transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18l9-5-9-5-9 5 9 5z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18l0-10" />
          </svg>
          <span>Install T-Zone</span>
        </div>
      </button>
    </div>
  );
};

export default PWAInstallButton;
