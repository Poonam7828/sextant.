
import React from 'react';

const Exhibit = ({ heading, children }) => {
  return (
    <div className="bg-gray-800 text-white p-4 my-4 rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">{heading}</h2>
      <div>{children}</div>
    </div>
  );
};

export default Exhibit;
