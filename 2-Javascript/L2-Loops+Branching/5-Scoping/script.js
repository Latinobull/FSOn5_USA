const age = 25;
let isLegal;
if (age > 20) {
  isLegal = 'you are legal';
} else {
  isLegal = 'you are not legal';
}

console.log(`You are ${age} and that means ${isLegal} to drink `);

// * Global Scope
// Variables that can be accessed anywhere in the application

// * Local Scope
//  Variables that can only be accessed within its executables or curly braces {}

const myName = 'Donnahue';

if (myName) {
  const myName = 'Diana';
  console.log(myName);
}
console.log(myName);
