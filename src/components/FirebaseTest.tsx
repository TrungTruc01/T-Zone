import React, { useState } from 'react';
import { auth, db } from '../services/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

const FirebaseTest: React.FC = () => {
  const [result, setResult] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const testFirebase = async () => {
    setLoading(true);
    setResult('Testing Firebase...\n');
    
    try {
      // Test creating a user
      const testEmail = `test-${Date.now()}@example.com`;
      const testPassword = 'testpassword123';
      
      setResult(prev => prev + `Creating user: ${testEmail}\n`);
      
      const { user } = await createUserWithEmailAndPassword(auth, testEmail, testPassword);
      setResult(prev => prev + `✅ User created: ${user.uid}\n`);
      
      // Test Firestore
      await setDoc(doc(db, 'users', user.uid), {
        email: testEmail,
        displayName: 'Test User',
        createdAt: new Date(),
      });
      setResult(prev => prev + `✅ Firestore write successful\n`);
      
      // Clean up
      await user.delete();
      setResult(prev => prev + `✅ Test completed successfully!\n`);
      
    } catch (error: any) {
      setResult(prev => prev + `❌ Error: ${error.code} - ${error.message}\n`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg m-4">
      <h3 className="text-lg font-semibold mb-4">Firebase Test</h3>
      <button
        onClick={testFirebase}
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      >
        {loading ? 'Testing...' : 'Test Firebase'}
      </button>
      <pre className="mt-4 bg-white dark:bg-gray-900 p-4 rounded text-sm overflow-auto max-h-40">
        {result || 'Click button to test Firebase...'}
      </pre>
    </div>
  );
};

export default FirebaseTest;
