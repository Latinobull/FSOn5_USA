const { onAuthStateChanged } = require('firebase/auth');
const { auth } = require('../firebase');
const authMiddleware = (req, res, next) => {
  onAuthStateChanged(auth, user => {
    req.user = user;
    if (!req.user)
      res.json({ message: 'You are not authorized to access this!' });
    else next();
  });
};

module.exports = authMiddleware;
