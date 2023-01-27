const allUserArr = [];

function noUnderscores(data) {
  console.log(data);
  const finalArr = data.filter(function (item) {
    return !item.includes('_');
  });
  console.log(finalArr);
}

function start() {
  const allUsers = data.body.users;
  const amountofUsers = allUsers.length;
  console.log(amountofUsers);
  for (let users of allUsers) {
    allUserArr.push(users.user.username);
  }
  noUnderscores(allUserArr);
}

start();
