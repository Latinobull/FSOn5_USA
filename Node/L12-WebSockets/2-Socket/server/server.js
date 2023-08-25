const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const path = require('path');
const cors = require('cors');
const PORT = 3001;
const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const io = socketIO(server, { cors: { origin: '*' } });

// io refers to everybody or the entire connection
io.on('connection', socket => {
  let currentUser = '';
  console.log('Connected');

  socket.on('serverMessage', data => {
    io.emit('clientMessage', data); // io.emit will broadcast to everybody on the socket
  });

  socket.on('userJoined', username => {
    io.emit('clientMessage', `${username} has joined`);
    currentUser = username;
  });

  // socket represents that specific connection or that specific user
  socket.on('disconnect', () => {
    console.log('User is disconnected');
    io.emit('clientMessage', `${currentUser} has left the server`);
    currentUser = '';
  });
});

// Serve the React app from the 'build' directory
app.use(express.static(path.join(__dirname, '../client/build')));

// Send the React app's index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

// app.get('*' , (req,res) => {
//   res.json(('hello'))
// })

server.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
