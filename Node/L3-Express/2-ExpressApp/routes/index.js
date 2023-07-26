const router = require('express').Router();
const path = require('path');

router.get('/login', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/login.html'));
});

router.post('/login', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});
module.exports = router;
