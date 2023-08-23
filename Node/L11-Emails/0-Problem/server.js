const express = require('express');
const messageRouter = require('./routes');
const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.use('/api/messages', messageRouter);

app.listen(PORT, () => {
  console.log('Server starting on https://localhost:' + PORT);
});
