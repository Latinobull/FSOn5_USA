//* Callback functions
function start(name) {
  console.log('This is Fight Club');
  console.log(`Welcome ${name} to the Fight Club`);
  //   callback(name);
}

function callback(name) {
  console.log('Welcome ' + name + ' to the Fight Club');
}

start('Johnny');

//* methods that have those built in
let arr = [1, 2, 3, 4];
arr.forEach(addNumbers);

arr.forEach(function (item) {
  console.log(item + 2);
});

function addNumbers(item) {
  console.log(item + 2);
}
