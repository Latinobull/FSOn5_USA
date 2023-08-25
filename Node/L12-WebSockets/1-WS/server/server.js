const WebSocketServer = require('ws');

// creation of the websocket server
const wss = new WebSocketServer.Server({ port: 8080 });
const users = [];
wss.on('connection', ws => {
  let id = users.length;
  users[id] = ws;
  console.log(`User ${id} is connected`);
  users[id].send('Hey your id is ' + id);
  users.forEach((user, idx) => {
    if (idx != id) {
      user.send(`${id} has joined our server`);
    }
  });
});

wss.on('close', () => {
  console.log('Connection closed');
});
