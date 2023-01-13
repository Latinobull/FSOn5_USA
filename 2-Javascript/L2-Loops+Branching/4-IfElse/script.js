// Conditional Rendering

// const userInput = confirm('Do you want to see your bank account')
/*
if (condition we want to check) {
    the code to run if the condition is true
}else {
    run this code
}

*/
// if (userInput === true) {
//     alert('You have $20,000 in your account')
// } else {
//     alert('Have a great day!')
// }

// Multiple conditions

let age = prompt('What is your age to see if you can legally drink?');

if (age <= 14) {
  alert('You can not drink anywhere');
} else if (age > 14 && age < 18) {
  alert('You can only drink in Russia');
} else if (age >= 18 && age < 21) {
  alert('You can only drink in Russia and Mexico');
} else if (age >= 21) {
  alert('You can drink alcohol in the US');
} else {
  alert(
    'You didn`t input a number. Please refresh the page and enter a number.'
  );
}
