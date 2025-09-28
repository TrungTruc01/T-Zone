import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyDIOxu5sBCnCFU-reJcJt3i9EyuR-3cqFw",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "t-zone-6f2de.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "t-zone-6f2de",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "t-zone-6f2de.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "475681039715",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:475681039715:web:7546256bc463ab79305f56",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || "G-RM97TNG6ZF"
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
