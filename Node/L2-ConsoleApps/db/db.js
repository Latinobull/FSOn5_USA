const fs = require('fs').promises;
const path = require('path');
const databasePath = path.join(__dirname, 'database.json');
console.log(databasePath);
const read = fs.readFile(databasePath).then(data => JSON.parse(data));

async function viewDB(password) {
  const data = await read;
  if (password === false) {
    const filteredData = data.map(item => {
      const { password, id, ...newObj } = item;
      return newObj;
    });
    console.table(filteredData);
  } else {
    const filteredData = data.map(item => {
      const { id, ...newObj } = item;
      return newObj;
    });
    console.table(filteredData);
  }
}

async function viewSingleDB(id) {
  const data = await read;
  const singleUser = data.find(item => item.id === id);

  if (singleUser) {
    console.table(singleUser);
  } else {
    console.log('No User with that ID \n');
  }
}
async function deleteDB(id) {
  const data = await read;
  const newData = data.filter(item => item.id !== id);
  fs.writeFile('database.json', JSON.stringify(newData));
  console.log('User Deleted');
}

module.exports = { viewDB, viewSingleDB, deleteDB };
