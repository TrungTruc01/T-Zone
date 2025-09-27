# T-Zone - Fitness & Health Web App

A modern, responsive fitness and health tracking web application built with React, TypeScript, and cutting-edge technologies.

## 🚀 Features

- **🏠 Dashboard**: Comprehensive overview of fitness metrics and progress
- **💪 Workout Tracking**: Interactive 3D exercise guidance with Three.js
- **📊 Health Analytics**: Detailed charts and statistics with Chart.js
- **🔐 Authentication**: Secure user authentication with Firebase
- **🌙 Dark/Light Mode**: Beautiful theme switching with TailwindCSS
- **📱 Responsive Design**: Optimized for all devices
- **🎯 Goal Setting**: Track and monitor fitness goals
- **📈 Progress Tracking**: Visual progress indicators and trends

## 🛠️ Tech Stack

- **Frontend**: React 19 + TypeScript
- **Styling**: TailwindCSS with custom design system
- **Routing**: React Router v6
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **3D Graphics**: Three.js + React Three Fiber
- **Charts**: Chart.js + React Chart.js 2
- **HTTP Client**: Axios
- **Build Tool**: Vite

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd T-Zone
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/)
   - Enable Authentication and Firestore
   - Copy your Firebase config to `src/services/firebase.ts`

4. Start the development server:
```bash
npm run dev
```

## 🔧 Configuration

### Firebase Setup

Update `src/services/firebase.ts` with your Firebase configuration:

```typescript
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "your-app-id"
};
```

### Environment Variables

Create a `.env` file in the root directory:

```env
VITE_FIREBASE_API_KEY=your-api-key
VITE_FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=your-project-id
VITE_FIREBASE_STORAGE_BUCKET=your-project.appspot.com
VITE_FIREBASE_MESSAGING_SENDER_ID=123456789
VITE_FIREBASE_APP_ID=your-app-id
```

## 🎨 Design System

The app uses a custom design system with:

- **Primary Colors**: Blue gradient (#0ea5e9 to #d946ef)
- **Typography**: Inter (body) + Poppins (headings)
- **Components**: Reusable UI components with consistent styling
- **Dark Mode**: Full dark/light theme support

## 📱 Pages & Features

### 🏠 Home Page
- Landing page with feature overview
- Call-to-action sections
- Responsive hero section

### 🔐 Authentication
- **Login**: Email/password authentication
- **Register**: User registration with validation
- **Protected Routes**: Secure access to authenticated pages

### 📊 Dashboard
- Fitness statistics overview
- Recent workout history
- Health metrics summary
- Quick action buttons
- Progress tracking

### 💪 Workout Studio
- Interactive 3D exercise visualization
- Exercise selection and guidance
- Real-time workout tracking
- Progress monitoring
- Exercise instructions

### 📈 Health Analytics
- Weight tracking with trends
- Body composition analysis
- Heart rate monitoring
- Calorie burn statistics
- Data logging interface

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Deploy to Netlify

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to Netlify

## 🧪 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Layout components
│   └── ...
├── contexts/           # React contexts
│   ├── AuthContext.tsx
│   └── ThemeContext.tsx
├── pages/              # Page components
│   ├── Home.tsx
│   ├── Login.tsx
│   ├── Register.tsx
│   ├── Dashboard.tsx
│   ├── Workout.tsx
│   └── HealthLog.tsx
├── services/           # API services
│   └── firebase.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
└── assets/             # Static assets
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -am 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Figma Design](https://www.figma.com/design/TGydtiEaMVzlXm2YAENvD8/Health---Fitness-App-UI-UX--Community-?node-id=0-1&t=bx90vW63x0ujmGk5-0) for UI inspiration
- [TailwindCSS](https://tailwindcss.com/) for styling
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) for 3D graphics
- [Chart.js](https://www.chartjs.org/) for data visualization
- [Firebase](https://firebase.google.com/) for backend services

## 📞 Support

For support, email support@t-zone.app or create an issue in the repository.

---

Made with ❤️ by the T-Zone Team