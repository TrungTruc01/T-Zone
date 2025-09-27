# T-Zone Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Firebase Setup

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project
3. Enable Authentication:
   - Go to Authentication > Sign-in method
   - Enable Email/Password
4. Enable Firestore:
   - Go to Firestore Database
   - Create database in test mode
5. Get your config:
   - Go to Project Settings > General
   - Scroll down to "Your apps" section
   - Click "Add app" > Web app
   - Copy the config object

### 3. Environment Configuration

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=AIzaSyCQ8j97On9vd2WP-j8dITJEW3MXwAZjGuM
VITE_FIREBASE_AUTH_DOMAIN=t-zone-8df87.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=t-zone-8df87
VITE_FIREBASE_STORAGE_BUCKET=t-zone-8df87.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=665913659255
VITE_FIREBASE_APP_ID=1:665913659255:web:ed2ae3dd3732800bc39b72
VITE_FIREBASE_MEASUREMENT_ID=G-YHGB28W6L8
```

**Note**: Firebase configuration is already set up in the code with fallback values, so you can skip this step if you want to use the default configuration.

### 4. Run the Application

```bash
npm run dev
```

The app will be available at `http://localhost:5173`

## 🎯 Features Overview

### ✅ Completed Features

- **Authentication System**: Login/Register with Firebase Auth
- **Dashboard**: Comprehensive fitness overview with stats
- **Workout Studio**: 3D interactive exercise guidance
- **Health Analytics**: Charts and data visualization
- **Dark/Light Mode**: Theme switching
- **Responsive Design**: Mobile-first approach
- **Protected Routes**: Secure navigation

### 🔧 Technical Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: TailwindCSS
- **3D Graphics**: Three.js + React Three Fiber
- **Charts**: Chart.js
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Routing**: React Router v6

## 📱 Pages

1. **Home** (`/`) - Landing page
2. **Login** (`/login`) - User authentication
3. **Register** (`/register`) - User registration
4. **Dashboard** (`/dashboard`) - Main dashboard (protected)
5. **Workout** (`/workout`) - 3D workout studio (protected)
6. **Health Log** (`/health-log`) - Health analytics (protected)

## 🎨 Design System

- **Colors**: Primary blue gradient, success green, warning yellow, danger red
- **Typography**: Inter (body) + Poppins (headings)
- **Components**: Consistent card-based layout
- **Dark Mode**: Full theme support

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Add environment variables in Vercel dashboard

### Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

3. Add environment variables in Netlify dashboard

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Header, Layout components
│   └── ProtectedRoute.tsx
├── contexts/           # React contexts
│   ├── AuthContext.tsx # Authentication state
│   └── ThemeContext.tsx # Theme state
├── pages/              # Page components
│   ├── Home.tsx        # Landing page
│   ├── Login.tsx       # Login page
│   ├── Register.tsx    # Registration page
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Workout.tsx     # 3D workout studio
│   └── HealthLog.tsx   # Health analytics
├── services/           # API services
│   └── firebase.ts     # Firebase configuration
├── types/              # TypeScript definitions
│   └── index.ts        # All type definitions
└── assets/             # Static assets
```

## 🐛 Troubleshooting

### Common Issues

1. **Firebase not working**: Check your environment variables
2. **3D models not loading**: Ensure Three.js dependencies are installed
3. **Charts not rendering**: Check Chart.js configuration
4. **Dark mode not working**: Verify TailwindCSS dark mode setup

### Getting Help

- Check the console for error messages
- Verify all dependencies are installed
- Ensure Firebase project is properly configured
- Check environment variables are set correctly

## 📝 Next Steps

1. Set up Firebase project
2. Configure environment variables
3. Test authentication flow
4. Customize the design to your needs
5. Add more exercises to the workout studio
6. Implement real data persistence
7. Add more health metrics
8. Deploy to production

## 🎉 You're Ready!

Your T-Zone fitness app is now set up and ready to use! Start by creating a user account and exploring the features.
