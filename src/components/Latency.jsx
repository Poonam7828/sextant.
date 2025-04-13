// src/components/Latency.jsx
import React, { useEffect, useState } from "react";

function Latency() {
  const [latency, setLatency] = useState(null);

  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");

    socket.onmessage = (event) => {
      const { timestamp } = JSON.parse(event.data);
      const now = Date.now();
      const latencyMs = now - timestamp;
      setLatency(latencyMs);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="latency-card">
      <h3>Network Latency</h3>
      <p>{latency !== null ? `${latency} ms` : "Connecting..."}</p>
    </div>
  );
}

export default Latency;
