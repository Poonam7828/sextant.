// src/App.js
import React from 'react';
import PublicIP from './components/PublicIP';
import Exhibit from './components/Exhibit'; // Assuming you already have this container component

const App = () => {
  return (
    <div className="App">
      <Exhibit title="Public IPs">
        <PublicIP ipVersion="v4" />
        <PublicIP ipVersion="v6" />
      </Exhibit>
    </div>
  );
};

export default App;
