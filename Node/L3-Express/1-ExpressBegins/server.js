const express = require('express');

const routes = require('./routes/index');
const app = express();

const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(routes);

app.listen(PORT, () => {
  console.log('Server started on PORT 3000');
});
