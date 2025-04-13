import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Exhibit from './components/Exhibit';

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Banner />
      <main className="p-6">
        <Exhibit heading="Network Info">
          <p>This is where a metric like public IP will go.</p>
        </Exhibit>
      </main>
    </div>
  );
}

export default App;