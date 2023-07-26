const router = require('express').Router();
const path = require('path');
router.get('/', (req, res) => {
  const landingPath = path.join(__dirname, '../public/landing.html');
  res.sendFile(landingPath);
});

router.get('/profile', (req, res) => {
  const profilePath = path.join(__dirname, '../public/profile.html');
  res.sendFile(profilePath);
});

router.get('/user/:id', (req, res) => {
  console.log(req.query.name);
  const newName = req.query.name.split('').reverse().join('');
  const newId = req.params.id * 2;

  res.json({ [newName]: newId });
});

router.post('/login', (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;
