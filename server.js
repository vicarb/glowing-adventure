const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer();
const io = new Server(server);

console.log('Starting server on port 3002');

io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle chat messages
  socket.on('chat message', (message) => {
    console.log(`Received chat message: ${message}`);
    io.emit('chat message', message);
  });
});

server.listen(3002);