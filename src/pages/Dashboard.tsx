import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import Layout from '../components/Layout/Layout';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock data - in real app, this would come from API
  const stats = {
    totalWorkouts: 24,
    totalCaloriesBurned: 1840,
    totalWorkoutTime: 480, // minutes
    currentStreak: 7,
    weeklyGoal: 5,
    weeklyProgress: 3,
  };

  const recentWorkouts = [
    { id: 1, name: 'Morning Cardio', duration: 30, calories: 250, date: '2024-01-15' },
    { id: 2, name: 'Strength Training', duration: 45, calories: 320, date: '2024-01-14' },
    { id: 3, name: 'Yoga Flow', duration: 25, calories: 120, date: '2024-01-13' },
  ];

  const healthMetrics = [
    { label: 'Weight', value: '70.5 kg', change: '-0.5 kg', trend: 'down' },
    { label: 'Body Fat', value: '18.2%', change: '-1.2%', trend: 'down' },
    { label: 'Muscle Mass', value: '32.1 kg', change: '+0.8 kg', trend: 'up' },
    { label: 'Heart Rate', value: '65 bpm', change: '-3 bpm', trend: 'down' },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Welcome Section */}
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
          <h1 className="text-3xl font-bold mb-2">
            Welcome back, {user?.displayName || 'User'}! 👋
          </h1>
          <p className="text-lg opacity-90">
            Ready to crush your fitness goals today?
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Workouts</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalWorkouts}</p>
              </div>
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Calories Burned</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalCaloriesBurned.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-success-100 dark:bg-success-900 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-success-600 dark:text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Workout Time</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{Math.floor(stats.totalWorkoutTime / 60)}h {stats.totalWorkoutTime % 60}m</p>
              </div>
              <div className="w-12 h-12 bg-warning-100 dark:bg-warning-900 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-warning-600 dark:text-warning-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Current Streak</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.currentStreak} days</p>
              </div>
              <div className="w-12 h-12 bg-danger-100 dark:bg-danger-900 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-danger-600 dark:text-danger-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Weekly Progress */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Weekly Progress</h3>
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {stats.weeklyProgress} of {stats.weeklyGoal} workouts completed
            </span>
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
              {Math.round((stats.weeklyProgress / stats.weeklyGoal) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(stats.weeklyProgress / stats.weeklyGoal) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Workouts */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Workouts</h3>
            <div className="space-y-3">
              {recentWorkouts.map((workout) => (
                <div key={workout.id} className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{workout.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{workout.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{workout.duration} min</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">{workout.calories} cal</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Health Metrics */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Health Metrics</h3>
            <div className="space-y-4">
              {healthMetrics.map((metric, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white">{metric.label}</p>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">{metric.value}</p>
                  </div>
                  <div className="text-right">
                    <p className={`text-sm font-medium ${
                      metric.trend === 'up' ? 'text-success-600 dark:text-success-400' : 'text-danger-600 dark:text-danger-400'
                    }`}>
                      {metric.change}
                    </p>
                    <div className={`w-2 h-2 rounded-full ${
                      metric.trend === 'up' ? 'bg-success-500' : 'bg-danger-500'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="card">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button className="p-4 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">Start Workout</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Begin a new session</p>
                </div>
              </div>
            </button>

            <button className="p-4 bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800 rounded-lg hover:bg-success-100 dark:hover:bg-success-900/30 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-success-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">Log Health</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Record metrics</p>
                </div>
              </div>
            </button>

            <button className="p-4 bg-warning-50 dark:bg-warning-900/20 border border-warning-200 dark:border-warning-800 rounded-lg hover:bg-warning-100 dark:hover:bg-warning-900/30 transition-colors">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-warning-500 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-900 dark:text-white">Set Goals</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Track progress</p>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
