const { default: mongoose } = require('mongoose');
const User = require('../models/User');

const seedData = [
  {
    username: 'BobRoss',
    email: 'Bob@Ross.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'JoeJones',
    email: 'Joe@Jones.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'JackHill',
    email: 'Jack@Ross.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'Slayer123',
    email: 'Slayer@gmail.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'PolloLoco',
    email: 'PolloLoco@corp.com',
    thoughts: [],
    friends: [],
  },
  {
    username: 'RubikKing',
    email: 'King@aol.com',
    thoughts: [],
    friends: [],
  },
];

const seedDB = async () => {
  await User.insertMany(seedData);
};

seedDB().then(() => {
  mongoose.connection.close();
});
