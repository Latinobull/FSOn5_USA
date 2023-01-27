console.log(data);
function noUnderscores(usernameData) {
  console.log(usernameData);
  // const cleanUsernames = [];
  // for (let person of data) {
  //   if (!person.includes('_')) {
  //     cleanUsernames.push(person);
  //   }
  // }
  // console.log(cleanUsernames);
  const newArray = usernameData.filter(function (person) {
    return !person.includes('_');
  });
  console.log(newArray);
}

function start() {
  const test = data.body.users.user.username;
  console.log(test);
  const allUsers = data.body.users;
  console.log(allUsers);
  const allUsernames = [];
  for (let person of allUsers) {
    allUsernames.push(person.user.username);
  }
  noUnderscores(allUsernames);
}

start();
