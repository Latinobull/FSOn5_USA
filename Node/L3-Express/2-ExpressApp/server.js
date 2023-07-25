const express = require('express');
const routes = require('./routes');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static('public'));
app.use('/', routes);

app.listen(PORT, () => {
  console.log('Server is listening at port 3000');
});
