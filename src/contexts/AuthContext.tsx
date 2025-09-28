import React, { createContext, useContext, useEffect, useState } from 'react';
import { 
  type User as FirebaseUser,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile
} from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../services/firebase';
import type { User, AuthContextType } from '../types';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: FirebaseUser | null) => {
      if (firebaseUser) {
        // Get user data from Firestore
        const userDoc = await getDoc(doc(db, 'users', firebaseUser.uid));
        if (userDoc.exists()) {
          const userData = userDoc.data();
          setUser({
            uid: firebaseUser.uid,
            email: firebaseUser.email!,
            displayName: firebaseUser.displayName || userData.displayName,
            photoURL: firebaseUser.photoURL || userData.photoURL,
            createdAt: userData.createdAt?.toDate() || new Date(),
            updatedAt: userData.updatedAt?.toDate() || new Date(),
          });
        } else {
          // Create user document if it doesn't exist
          const newUser: User = {
            uid: firebaseUser.uid,
            email: firebaseUser.email!,
            displayName: firebaseUser.displayName || '',
            photoURL: firebaseUser.photoURL || '',
            createdAt: new Date(),
            updatedAt: new Date(),
          };
          await setDoc(doc(db, 'users', firebaseUser.uid), {
            ...newUser,
            createdAt: newUser.createdAt,
            updatedAt: newUser.updatedAt,
          });
          setUser(newUser);
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const signIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      throw error;
    }
  };

  const signUp = async (email: string, password: string, displayName: string) => {
    try {
      console.log('Starting signup process...');
      const { user: firebaseUser } = await createUserWithEmailAndPassword(auth, email, password);
      console.log('User created successfully:', firebaseUser.uid);
      
      await updateProfile(firebaseUser, { displayName });
      console.log('Profile updated successfully');
      
      const newUser: User = {
        uid: firebaseUser.uid,
        email: firebaseUser.email!,
        displayName,
        photoURL: firebaseUser.photoURL || '',
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      await setDoc(doc(db, 'users', firebaseUser.uid), {
        ...newUser,
        createdAt: newUser.createdAt,
        updatedAt: newUser.updatedAt,
      });
      console.log('User document created in Firestore');
    } catch (error: any) {
      console.error('Signup error details:', error);
      // Provide more specific error messages
      if (error.code === 'auth/email-already-in-use') {
        throw new Error('Email đã được sử dụng. Vui lòng sử dụng email khác.');
      } else if (error.code === 'auth/weak-password') {
        throw new Error('Mật khẩu quá yếu. Vui lòng sử dụng mật khẩu mạnh hơn.');
      } else if (error.code === 'auth/invalid-email') {
        throw new Error('Email không hợp lệ.');
      } else if (error.code === 'auth/operation-not-allowed') {
        throw new Error('Phương thức đăng ký này chưa được bật. Vui lòng liên hệ quản trị viên.');
      } else if (error.code === 'permission-denied') {
        throw new Error('Không có quyền truy cập. Vui lòng kiểm tra cấu hình.');
      } else {
        throw new Error(`Lỗi đăng ký: ${error.message || 'Vui lòng thử lại sau.'}`);
      }
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      throw error;
    }
  };

  const value: AuthContextType = {
    user,
    loading,
    signIn,
    signUp,
    signOut: signOutUser,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
