const router = require('express').Router();
const path = require('path');
const { randomUUID } = require('crypto');
const fs = require('fs').promises;
const databasePath = path.join(__dirname, '../db/data.json');
//Get all items
router.get('/', async (req, res) => {
  let data = await fs.readFile(databasePath);
  data = JSON.parse(data);
  res.json(data);
});
// GET ONE
router.get('/:id', async (req, res) => {
  let data = await fs.readFile(databasePath);
  data = JSON.parse(data);
  const singleData = data.filter(item => item.id === req.params.id);
  if (singleData.length > 0) {
    res.json(singleData);
    res.status(200);
  } else {
    res.json({ error: 'No User with that ID' });
    res.status(404);
  }
});
//CREATE
router.post('/', async (req, res) => {
  let data = await fs.readFile(databasePath);
  data = JSON.parse(data);
  const { firstname, lastname, password } = req.body;

  if (!firstname || !lastname || !password) {
    res.json({ error: 'You are missing data' });
    return;
  }

  const newUser = {
    firstname: firstname,
    lastname: lastname,
    password: password,
    id: randomUUID(),
  };
  data.push(newUser);
  await fs.writeFile(databasePath, JSON.stringify(data));
  res.json({ message: `${firstname} was added` });
});

//UPDATE

router.put('/:id', async (req, res) => {
  const { firstname, lastname, password } = req.body;
  let data = await fs.readFile(databasePath);
  data = JSON.parse(data);
  const userIndex = data.findIndex(item => item.id === req.params.id);
  if (userIndex === -1) {
    res.json({ error: 'ID doesn`t exist' });
    return;
  }
  data[userIndex] = { ...data[userIndex], firstname, lastname, password };
  await fs.writeFile(databasePath, JSON.stringify(data));
  res.json({ message: 'User was updated' });
});

//DELETE
router.delete('/:id', async (req, res) => {
  let data = await fs.readFile(databasePath);
  data = JSON.parse(data);
  const newData = data.filter(item => item.id !== req.params.id);
  await fs.writeFile(databasePath, JSON.stringify(newData));
  res.json({ message: 'User was deleted' });
});

module.exports = router;
