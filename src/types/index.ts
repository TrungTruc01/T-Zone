// User types
export interface User {
  uid: string;
  email: string;
  displayName?: string;
  photoURL?: string;
  createdAt: Date;
  updatedAt: Date;
}

// Auth types
export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, displayName: string) => Promise<void>;
  signOut: () => Promise<void>;
}

// Workout types
export interface Exercise {
  id: string;
  name: string;
  description: string;
  category: 'cardio' | 'strength' | 'flexibility' | 'balance';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  duration: number; // in minutes
  calories: number;
  instructions: string[];
  imageUrl?: string;
  videoUrl?: string;
}

export interface Workout {
  id: string;
  name: string;
  description: string;
  exercises: Exercise[];
  totalDuration: number;
  totalCalories: number;
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  category: string;
  imageUrl?: string;
}

export interface WorkoutSession {
  id: string;
  userId: string;
  workoutId: string;
  startTime: Date;
  endTime?: Date;
  completedExercises: {
    exerciseId: string;
    sets?: number;
    reps?: number;
    weight?: number;
    duration?: number;
    completed: boolean;
  }[];
  totalCalories: number;
  notes?: string;
}

// Health Log types
export interface HealthMetric {
  id: string;
  userId: string;
  type: 'weight' | 'height' | 'body_fat' | 'muscle_mass' | 'heart_rate' | 'blood_pressure' | 'sleep' | 'water_intake';
  value: number;
  unit: string;
  date: Date;
  notes?: string;
}

export interface HealthGoal {
  id: string;
  userId: string;
  type: 'weight_loss' | 'weight_gain' | 'muscle_gain' | 'endurance' | 'flexibility' | 'strength';
  targetValue: number;
  currentValue: number;
  unit: string;
  targetDate: Date;
  isActive: boolean;
  createdAt: Date;
}

// Dashboard types
export interface DashboardStats {
  totalWorkouts: number;
  totalCaloriesBurned: number;
  totalWorkoutTime: number; // in minutes
  currentStreak: number;
  weeklyGoal: number;
  weeklyProgress: number;
  recentWorkouts: WorkoutSession[];
  healthMetrics: HealthMetric[];
}

// Theme types
export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

// Navigation types
export interface NavItem {
  name: string;
  href: string;
  icon: string;
  current?: boolean;
}
