const express = require('express');
const db = require('./config');
const routes = require('./routes');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use('/api', routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log('Server is listening at port 3000');
  });
});
