import React, { useState, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text, Box, Sphere } from '@react-three/drei';
import Layout from '../components/Layout/Layout';

// 3D Exercise Component
const Exercise3D: React.FC<{ exercise: string }> = ({ exercise }) => {
  const meshRef = useRef<any>(null);

  return (
    <group>
      {/* Exercise visualization */}
      {exercise === 'pushup' && (
        <group>
          <Box args={[2, 0.1, 1]} position={[0, -1, 0]} ref={meshRef}>
            <meshStandardMaterial color="#4F46E5" />
          </Box>
          <Box args={[0.3, 1.5, 0.3]} position={[-0.5, -0.25, 0]}>
            <meshStandardMaterial color="#EF4444" />
          </Box>
          <Box args={[0.3, 1.5, 0.3]} position={[0.5, -0.25, 0]}>
            <meshStandardMaterial color="#EF4444" />
          </Box>
          <Text
            position={[0, 1, 0]}
            fontSize={0.3}
            color="#374151"
            anchorX="center"
            anchorY="middle"
          >
            Push-up
          </Text>
        </group>
      )}
      
      {exercise === 'squat' && (
        <group>
          <Sphere args={[0.5]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#10B981" />
          </Sphere>
          <Box args={[0.2, 1, 0.2]} position={[-0.3, -0.75, 0]}>
            <meshStandardMaterial color="#6B7280" />
          </Box>
          <Box args={[0.2, 1, 0.2]} position={[0.3, -0.75, 0]}>
            <meshStandardMaterial color="#6B7280" />
          </Box>
          <Text
            position={[0, 1.5, 0]}
            fontSize={0.3}
            color="#374151"
            anchorX="center"
            anchorY="middle"
          >
            Squat
          </Text>
        </group>
      )}

      {exercise === 'plank' && (
        <group>
          <Box args={[2, 0.1, 0.5]} position={[0, 0, 0]}>
            <meshStandardMaterial color="#F59E0B" />
          </Box>
          <Text
            position={[0, 0.5, 0]}
            fontSize={0.3}
            color="#374151"
            anchorX="center"
            anchorY="middle"
          >
            Plank
          </Text>
        </group>
      )}
    </group>
  );
};

const Workout: React.FC = () => {
  const [selectedExercise, setSelectedExercise] = useState('pushup');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSet, setCurrentSet] = useState(1);
  const [totalSets] = useState(3);

  const exercises = [
    {
      id: 'pushup',
      name: 'Push-ups',
      description: 'Classic upper body exercise',
      duration: 30,
      sets: 3,
      reps: 15,
      category: 'strength',
      difficulty: 'beginner'
    },
    {
      id: 'squat',
      name: 'Squats',
      description: 'Lower body strength exercise',
      duration: 45,
      sets: 3,
      reps: 20,
      category: 'strength',
      difficulty: 'beginner'
    },
    {
      id: 'plank',
      name: 'Plank',
      description: 'Core stability exercise',
      duration: 60,
      sets: 3,
      reps: 1,
      category: 'strength',
      difficulty: 'intermediate'
    }
  ];

  const currentExercise = exercises.find(ex => ex.id === selectedExercise);

  return (
    <Layout>
      <div className="space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Workout Studio
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Interactive 3D exercise guidance and tracking
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 3D Visualization */}
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              3D Exercise Guide
            </h3>
            <div className="h-96 bg-gray-100 dark:bg-gray-800 rounded-lg overflow-hidden">
              <Canvas camera={{ position: [0, 0, 5] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Exercise3D exercise={selectedExercise} />
                <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
              </Canvas>
            </div>
            
            {/* Exercise Controls */}
            <div className="mt-4 flex justify-center space-x-4">
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  isPlaying
                    ? 'bg-red-500 hover:bg-red-600 text-white'
                    : 'bg-primary-500 hover:bg-primary-600 text-white'
                }`}
              >
                {isPlaying ? 'Pause' : 'Start'}
              </button>
              <button className="px-6 py-2 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors">
                Reset
              </button>
            </div>
          </div>

          {/* Exercise Details */}
          <div className="space-y-6">
            {/* Exercise Selection */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Select Exercise
              </h3>
              <div className="space-y-2">
                {exercises.map((exercise) => (
                  <button
                    key={exercise.id}
                    onClick={() => setSelectedExercise(exercise.id)}
                    className={`w-full p-3 rounded-lg text-left transition-colors ${
                      selectedExercise === exercise.id
                        ? 'bg-primary-100 dark:bg-primary-900 border-2 border-primary-500'
                        : 'bg-gray-50 dark:bg-gray-700 border-2 border-transparent hover:bg-gray-100 dark:hover:bg-gray-600'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">{exercise.name}</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{exercise.description}</p>
                      </div>
                      <div className="text-right">
                        <span className={`px-2 py-1 text-xs rounded-full ${
                          exercise.difficulty === 'beginner' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                          exercise.difficulty === 'intermediate' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
                          'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200'
                        }`}>
                          {exercise.difficulty}
                        </span>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Current Exercise Info */}
            {currentExercise && (
              <div className="card">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                  {currentExercise.name}
                </h3>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                      {currentSet}/{totalSets}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Sets</p>
                  </div>
                  <div className="text-center p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <p className="text-2xl font-bold text-success-600 dark:text-success-400">
                      {currentExercise.reps}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Reps</p>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Duration:</span>
                    <span className="font-medium text-gray-900 dark:text-white">{currentExercise.duration}s</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Category:</span>
                    <span className="font-medium text-gray-900 dark:text-white capitalize">{currentExercise.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600 dark:text-gray-400">Difficulty:</span>
                    <span className="font-medium text-gray-900 dark:text-white capitalize">{currentExercise.difficulty}</span>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                    <span>Progress</span>
                    <span>{Math.round((currentSet / totalSets) * 100)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentSet / totalSets) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            )}

            {/* Workout Actions */}
            <div className="card">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Workout Actions
              </h3>
              <div className="grid grid-cols-2 gap-3">
                <button 
                  onClick={() => setCurrentSet(Math.min(currentSet + 1, totalSets))}
                  className="p-3 bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-lg hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
                >
                  <div className="text-center">
                    <p className="font-medium text-primary-600 dark:text-primary-400">Next Set</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Complete current</p>
                  </div>
                </button>
                
                <button className="p-3 bg-success-50 dark:bg-success-900/20 border border-success-200 dark:border-success-800 rounded-lg hover:bg-success-100 dark:hover:bg-success-900/30 transition-colors">
                  <div className="text-center">
                    <p className="font-medium text-success-600 dark:text-success-400">Finish</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">End workout</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Exercise Instructions */}
        {currentExercise && (
          <div className="card">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Instructions
            </h3>
            <div className="prose dark:prose-invert max-w-none">
              {selectedExercise === 'pushup' && (
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Start in a plank position with your hands slightly wider than shoulder-width apart</li>
                  <li>Keep your body in a straight line from head to heels</li>
                  <li>Lower your body until your chest nearly touches the floor</li>
                  <li>Push back up to the starting position</li>
                  <li>Repeat for the desired number of repetitions</li>
                </ol>
              )}
              
              {selectedExercise === 'squat' && (
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Stand with your feet shoulder-width apart</li>
                  <li>Lower your body as if sitting back into a chair</li>
                  <li>Keep your chest up and knees behind your toes</li>
                  <li>Go down until your thighs are parallel to the floor</li>
                  <li>Push through your heels to return to standing</li>
                </ol>
              )}
              
              {selectedExercise === 'plank' && (
                <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
                  <li>Start in a push-up position</li>
                  <li>Lower down to your forearms</li>
                  <li>Keep your body in a straight line</li>
                  <li>Engage your core and hold the position</li>
                  <li>Breathe normally throughout the hold</li>
                </ol>
              )}
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Workout;
