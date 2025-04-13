// server.js
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

console.log('Pylon WebSocket server running on ws://localhost:8080');

wss.on('connection', function connection(ws) {
  console.log('Client connected');

  // Send timestamp every second
  setInterval(() => {
    ws.send(JSON.stringify({ timestamp: Date.now() }));
  }, 1000);
});
