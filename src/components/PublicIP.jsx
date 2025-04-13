// src/components/PublicIP.jsx
import React, { useEffect, useState } from 'react';

const PublicIP = () => {
  const [ipv4, setIpv4] = useState(null);
  const [ipv6, setIpv6] = useState(null);

  useEffect(() => {
    // Fetch Public IPv4 Address
    fetch('https://api.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => setIpv4(data.ip))
      .catch((error) => console.error('Error fetching IPv4:', error));

    // Fetch Public IPv6 Address
    fetch('https://api6.ipify.org?format=json')
      .then((response) => response.json())
      .then((data) => setIpv6(data.ip))
      .catch((error) => console.error('Error fetching IPv6:', error));
  }, []);

  return (
    <div className="bg-gray-700 p-4 rounded-md shadow text-white">
      <p className="text-sm">Public IP Addresses:</p>
      <div className="my-2">
        <p className="font-semibold">IPV4: </p>
        <h3 className="text-lg font-mono">{ipv4 || 'Loading IPV4...'}</h3>
      </div>
      <div className="my-2">
        <p className="font-semibold">IPV6: </p>
        <h3 className="text-lg font-mono">{ipv6 || 'Loading IPV6...'}</h3>
      </div>
    </div>
  );
};

export default PublicIP;
