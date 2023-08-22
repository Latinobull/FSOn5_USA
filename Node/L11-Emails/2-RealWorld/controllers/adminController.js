const Admin = require('../models/Admin');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const adminControllers = {
  async signup(req, res) {
    try {
      const { email, password } = req.body;
      const hashed = await bcrypt.hash(password, 10);
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
      const newAdmin = await Admin.create({
        email: email,
        password: hashed,
        token: token,
      });
      req.session.userToken = token;
      console.log(req.session);
      res.json({ token });
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  async login(req, res) {
    try {
      const { email, password } = req.body;
      const singleAdmin = await Admin.findOne({ email: email });
      if (!singleAdmin) {
        res.json({ message: 'No user found with that account' });
        return;
      }
      const validatingPW = await singleAdmin.checkPassword(password);

      if (!validatingPW) {
        res.json({ message: 'Wrong Password' });
        return;
      }
      const token = jwt.sign({ email }, process.env.JWT_SECRET, {
        expiresIn: '1h',
      });
      singleAdmin.token = token;
      await singleAdmin.save();
      req.session.userToken = token;
      res.json({ token });
    } catch (err) {
      console.log(err);
      res.json(err);
    }
  },
  async logout(req, res) {
    // await Admin.findOneAndUpdate(
    //   { email: req.body.email },
    //   { $set: { token: null } }
    // );
    if (req.session.userToken) {
      req.session.destroy(() => {
        res.json({ message: 'User was signed out' });
      });
    } else {
      res.json({ message: 'You are already signed out' });
    }
  },
};

module.exports = adminControllers;
