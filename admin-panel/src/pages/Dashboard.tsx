import React from 'react';

const Dashboard: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="font-bold text-3xl mb-4">Dashboard</h1>
      <p className="p-8 text-lg text-gray-700">Welcome to the dashboard!</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Click Me
      </button>
    </div>
  );
};

export default Dashboard; 