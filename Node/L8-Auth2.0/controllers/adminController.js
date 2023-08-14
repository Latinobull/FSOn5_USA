const {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  signOut,
} = require('firebase/auth');
const { auth } = require('../firebase');
const adminControllers = {
  async signup(req, res) {
    try {
      const { email, password } = req.body;
      const newUser = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = newUser.user;
      sendEmailVerification(user);
      res.json(user);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const signedInUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = signedInUser.user;
      if (!user.emailVerified) {
        res.json({ message: 'PLease verify your email to continue' });
        return;
      }
      res.json(user);
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  async logout(req, res) {
    try {
      await signOut(auth);
      res.json({ message: 'You are signed out' });
    } catch (err) {
      res.json(err);
    }
  },
};

module.exports = adminControllers;
