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
    alert('Please choose a correct character');
    playGame();
    return;
  }
  // Get random index from array of options
  const index = Math.floor(Math.random() * options.length);
  const computerChoice = options[index];

  alert('The computer chose ' + computerChoice);

  // If choices are the same, it's a tie
  if (userChoice === computerChoice) {
    ties++;
    alert("It's a tie!");

    // Check every win condition for the player
  } else if (
    (userChoice === 'R' && computerChoice === 'S') ||
    (userChoice === 'P' && computerChoice === 'R') ||
    (userChoice === 'S' && computerChoice === 'P')
  ) {
    wins++;
    alert('You win!');

    // If above conditions failed, assume player lost
  } else {
    losses++;
    alert('You lost!');
  }

  // Print stats with line breaks
  alert('Stats:\nWins: ' + wins + '\nLosses: ' + losses + '\nTies: ' + ties);

  // Ask user to play again
  const playAgain = confirm('Play again?');

  // If user pressed OK, run the function again
  if (playAgain) {
    playGame();
  }
};

// Run the game for the first time
playGame();
