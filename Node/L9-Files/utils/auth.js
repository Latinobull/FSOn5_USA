const auth = (req, res, next) => {
  //   const admin = Admin.findOne({ email: req.body.email });
  //   if (!admin.token) {
  //     res.json({ message: 'asjkhdakjsd' });
  //   } else {
  //     next();
  //   }
  console.log(req.session);
  if (!req.session.userToken) {
    res.json({ message: 'You are not authorized. Please login' });
    return;
  } else {
    next();
  }
};

module.exports = auth;
