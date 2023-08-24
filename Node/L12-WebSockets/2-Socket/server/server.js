const express = require('express');
const http = require('http');
const path = require('path');
const cors = require('cors');
const PORT = 3001;
const app = express();
const server = http.createServer(app);
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Serve the React app from the 'build' directory
app.use(express.static(path.join(__dirname, '../client/build')));

// Send the React app's index.html for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

server.listen(PORT, () => {
  console.log(`Server started on PORT ${PORT}`);
});
