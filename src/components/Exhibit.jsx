

import React from 'react';

const Exhibit = ({ title, children }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-md my-4">
      <h2 className="text-xl font-bold text-white">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
};

export default Exhibit;

