let wins = 0;
let ties = 0;
let losses = 0;

// Array of options for computer to pick from
const options = ['R', 'P', 'S'];

const playGame = function () {
  // Ask user for their choice
  let userChoice = prompt('Enter R, P, or S:');

  // If user pressed Cancel, immediately end function
  if (!userChoice) {
    return;
  }

  // Convert to uppercase to make comparisons easier
  userChoice = userChoice.toUpperCase();

  if (!options.includes(userChoice)) {
    alert('Please choose a valid character');
    playGame();
    return;

  }

  // Get random index from array of options
  const index = Math.floor(Math.random() * options.length);
  const computerChoice = options[index];
  // Show computer's choice
  alert(`The computer has chosen ${computerChoice}`);

  // If choices are the same, it's a tie
  if (userChoice === computerChoice) {
    alert('You have tied with the computer');
    ties++;
    // Check every win condition for the player
  } else if (
    (userChoice === 'R' && computerChoice === 'S') ||
    (userChoice === 'P' && computerChoice === 'R') ||
    (userChoice === 'S' && computerChoice === 'P')
  ) {
    alert('You won!');
    wins += 1;
    // If above conditions failed, assume player lost
  } else {
    alert('You lost');
    losses = losses + 1;
  }

  // Print stats with line breaks

  alert(`Stats:
  Wins: ${wins}
  Losses: ${losses}
  Ties: ${ties}
  `);

  // Ask user to play again
  const replay = confirm('Do you want to play again?');
  // If user pressed OK, run the function again
  if (replay) {
    playGame();
  }
};

// Run the game for the first time
playGame();

// for (let i = 0; i < 3; i++) {
//   alert('I have been alerted ' + i + ' times');
// }
// let count = 0;
// function alerted() {
//   count++;
//   alert(`I have been alerted ${count} times`);
//   const replay = confirm('Do you want to run again');
//   if (replay) {
//     alerted();
//   }
// }
// alerted();
