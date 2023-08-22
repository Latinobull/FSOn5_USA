const express = require('express');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(express.json());
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to my docker App!' });
});

app.listen(PORT, () => {
  console.log('Server starting on PORT' + PORT);
});
