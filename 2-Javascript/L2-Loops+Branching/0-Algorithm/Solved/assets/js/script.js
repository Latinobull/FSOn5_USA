alert('Welcome to the Algorithm! ');
const userInput = prompt(
  'Type in a number and I will return the negative counterpart'
);

alert(
  `The negative counterpart of ${userInput} is ${parseInt(
    -Math.abs(userInput)
  )}`
);
