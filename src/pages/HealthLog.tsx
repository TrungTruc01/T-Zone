import React, { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Line, Bar, Doughnut } from 'react-chartjs-2';
import Layout from '../components/Layout/Layout';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const HealthLog: React.FC = () => {
  const [activeTab, setActiveTab] = useState('overview');
  // const [selectedMetric] = useState('weight');

  // Mock data for charts
  const weightData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Weight (kg)',
        data: [72, 71.5, 71, 70.5, 70, 69.5],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const caloriesData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Calories Burned',
        data: [320, 450, 280, 380, 520, 350, 400],
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(16, 185, 129, 0.8)',
          'rgba(16, 185, 129, 0.8)',
        ],
        borderColor: [
          'rgb(16, 185, 129)',
          'rgb(16, 185, 129)',
          'rgb(16, 185, 129)',
          'rgb(16, 185, 129)',
          'rgb(16, 185, 129)',
          'rgb(16, 185, 129)',
          'rgb(16, 185, 129)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const bodyCompositionData = {
    labels: ['Muscle Mass', 'Body Fat', 'Water', 'Bone'],
    datasets: [
      {
        data: [32.1, 18.2, 45.3, 4.4],
        backgroundColor: [
          'rgba(16, 185, 129, 0.8)',
          'rgba(239, 68, 68, 0.8)',
          'rgba(59, 130, 246, 0.8)',
          'rgba(156, 163, 175, 0.8)',
        ],
        borderColor: [
          'rgb(16, 185, 129)',
          'rgb(239, 68, 68)',
          'rgb(59, 130, 246)',
          'rgb(156, 163, 175)',
        ],
        borderWidth: 2,
      },
    ],
  };

  const heartRateData = {
    labels: ['6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM'],
    datasets: [
      {
        label: 'Heart Rate (bpm)',
        data: [65, 75, 68, 72, 70, 62],
        borderColor: 'rgb(239, 68, 68)',
        backgroundColor: 'rgba(239, 68, 68, 0.1)',
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  const tabs = [
    { id: 'overview', name: 'Overview', icon: '📊' },
    { id: 'weight', name: 'Weight', icon: '⚖️' },
    { id: 'body', name: 'Body Composition', icon: '🏃' },
    { id: 'heart', name: 'Heart Rate', icon: '❤️' },
    { id: 'log', name: 'Log Data', icon: '📝' },
  ];

  const metrics = [
    { id: 'weight', name: 'Weight', value: '70.5 kg', change: '-0.5 kg', trend: 'down' },
    { id: 'body_fat', name: 'Body Fat', value: '18.2%', change: '-1.2%', trend: 'down' },
    { id: 'muscle_mass', name: 'Muscle Mass', value: '32.1 kg', change: '+0.8 kg', trend: 'up' },
    { id: 'heart_rate', name: 'Resting HR', value: '65 bpm', change: '-3 bpm', trend: 'down' },
    { id: 'water', name: 'Water %', value: '45.3%', change: '+0.5%', trend: 'up' },
    { id: 'bmi', name: 'BMI', value: '22.4', change: '-0.3', trend: 'down' },
  ];

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Health Analytics
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Track and analyze your health metrics over time
          </p>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 dark:border-gray-700">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm transition-colors ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600 dark:text-primary-400'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {metrics.map((metric) => (
                <div key={metric.id} className="card">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400">{metric.name}</p>
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
                </div>
              ))}
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Weight Trend</h3>
                <div className="h-64">
                  <Line data={weightData} options={chartOptions} />
                </div>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Weekly Calories</h3>
                <div className="h-64">
                  <Bar data={caloriesData} options={chartOptions} />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Weight Tab */}
        {activeTab === 'weight' && (
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Weight Progress</h3>
              <div className="h-96">
                <Line data={weightData} options={chartOptions} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Weight Goals</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Current Weight</span>
                    <span className="font-medium text-gray-900 dark:text-white">70.5 kg</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Target Weight</span>
                    <span className="font-medium text-gray-900 dark:text-white">68.0 kg</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 dark:text-gray-400">Remaining</span>
                    <span className="font-medium text-primary-600 dark:text-primary-400">2.5 kg</span>
                  </div>
                </div>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Log New Weight</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Weight (kg)
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      className="input-field"
                      placeholder="Enter your weight"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Notes (optional)
                    </label>
                    <textarea
                      className="input-field"
                      rows={3}
                      placeholder="Add any notes..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Log Weight
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Body Composition Tab */}
        {activeTab === 'body' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Body Composition</h3>
                <div className="h-80">
                  <Doughnut data={bodyCompositionData} options={doughnutOptions} />
                </div>
              </div>

              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Composition Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-success-500 rounded"></div>
                      <span className="text-gray-900 dark:text-white">Muscle Mass</span>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">32.1 kg</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-danger-500 rounded"></div>
                      <span className="text-gray-900 dark:text-white">Body Fat</span>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">18.2%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-primary-500 rounded"></div>
                      <span className="text-gray-900 dark:text-white">Water</span>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">45.3%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-4 h-4 bg-gray-500 rounded"></div>
                      <span className="text-gray-900 dark:text-white">Bone</span>
                    </div>
                    <span className="font-medium text-gray-900 dark:text-white">4.4%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Heart Rate Tab */}
        {activeTab === 'heart' && (
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Heart Rate Trend</h3>
              <div className="h-96">
                <Line data={heartRateData} options={chartOptions} />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="card text-center">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Resting HR</h4>
                <p className="text-3xl font-bold text-primary-600 dark:text-primary-400">65 bpm</p>
                <p className="text-sm text-success-600 dark:text-success-400 mt-1">↓ 3 bpm</p>
              </div>
              <div className="card text-center">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Max HR</h4>
                <p className="text-3xl font-bold text-danger-600 dark:text-danger-400">185 bpm</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">220 - age</p>
              </div>
              <div className="card text-center">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Target Zone</h4>
                <p className="text-3xl font-bold text-warning-600 dark:text-warning-400">130-150</p>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">bpm</p>
              </div>
            </div>
          </div>
        )}

        {/* Log Data Tab */}
        {activeTab === 'log' && (
          <div className="space-y-6">
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Log Health Data</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Metric Type
                    </label>
                    <select className="input-field">
                      <option value="weight">Weight</option>
                      <option value="body_fat">Body Fat %</option>
                      <option value="muscle_mass">Muscle Mass</option>
                      <option value="heart_rate">Heart Rate</option>
                      <option value="blood_pressure">Blood Pressure</option>
                      <option value="sleep">Sleep Hours</option>
                      <option value="water_intake">Water Intake</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Value
                    </label>
                    <input
                      type="number"
                      step="0.1"
                      className="input-field"
                      placeholder="Enter value"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Date
                  </label>
                  <input
                    type="date"
                    className="input-field"
                    defaultValue={new Date().toISOString().split('T')[0]}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Notes (optional)
                  </label>
                  <textarea
                    className="input-field"
                    rows={3}
                    placeholder="Add any notes about this measurement..."
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary">
                  Log Data
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default HealthLog;
