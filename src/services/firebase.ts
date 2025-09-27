import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCQ8j97On9vd2WP-j8dITJEW3MXwAZjGuM",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "t-zone-82489.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "t-zone-82489",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "t-zone-82489.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "665913659255",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:665913659255:web:ed2ae3dd3732800bc39b72",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-YHGB28W6L8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize Analytics (only in browser environment)
export const analytics = typeof window !== 'undefined' ? getAnalytics(app) : null;

export default app;
