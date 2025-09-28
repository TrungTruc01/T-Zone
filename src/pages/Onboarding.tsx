import React from 'react';
import { Link } from 'react-router-dom';

const Onboarding: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="w-full max-w-md px-6">
        <div className="text-center">
          <div className="w-full flex justify-center mb-8">
            <img
              src="/assets/fitness-illustration.png"
              alt="Healthy Routine Illustration"
              className="w-64 h-64 object-contain"
              onError={(e) => {
                // fallback to emoji if asset missing
                (e.currentTarget as HTMLImageElement).style.display = 'none';
              }}
            />
          </div>

          <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white leading-snug">
            Welcome to Healthy
            <br />
            Routine
          </h1>
          <p className="mt-3 text-gray-600 dark:text-gray-300">
            Discover a smarter way to stay fit, feel great, and
            take control of your health
          </p>

          <div className="mt-8">
            <Link
              to="/login"
              className="block w-full bg-[#241B57] hover:bg-[#2d2370] text-white font-semibold py-3 rounded-xl shadow-md transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Onboarding;

