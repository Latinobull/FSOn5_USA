const router = require('express').Router();

router.get('/', (req, res) => {
  res.json({ message: 'Welcome to the messaging system' });
});

router.get('/hello', (req, res) => {
  res.json({ message: 'hello' });
});

router.get('/fav/:color', (req, res) => {
  res.json({ message: 'My favorite color is ' + req.params.color });
});
router.get('/hello/:name', (req, res) => {
  res.json({ message: `Hello ${req.params.name}` });
});

router.get('/bye/:name', (req, res) => {
  res.json({ message: `Goodbye ${req.params.name}` });
});
router.get('/bye', (req, res) => {
  res.json({ message: 'Goodbye!' });
});

module.exports = router;
