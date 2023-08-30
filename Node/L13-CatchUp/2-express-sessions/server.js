const express = require('express');
const session = require('express-session');
const db = require('./config');
const routes = require('./routes');
const MongoStore = require('connect-mongo')(session);
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const sess = {
  secret: process.env.JWT_SECRET,
  store: new MongoStore({ mongooseConnection: db }),
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
};
app.use(session(sess));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use('/api', routes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log('Server is listening at port 3000');
  });
});
