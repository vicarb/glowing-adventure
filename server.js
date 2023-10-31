const http = require('http');
const { Server } = require('socket.io');

const server = http.createServer();
const io = new Server(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  // Handle chat messages
  socket.on('chat message', (message) => {
    io.emit('chat message', message);
  });
});

server.listen(3000);
