const userInput = prompt('What year were you born? ');
let convertedInput = parseInt(userInput);
if (convertedInput <= 1800) {
  alert('Choose a year that is greater than 1800');
} else if (convertedInput > 1800 && convertedInput < 1900) {
  alert('You are a member of a generation I don`t know the name of');
} else if (convertedInput < 1924) {
  alert('You are a member of the Greatest Generation');
} else if (convertedInput > 1924 && convertedInput <= 1945) {
  alert('You are a member of the Silent Generation');
} else if (convertedInput > 1945 && convertedInput <= 1964) {
  alert('You are a member of Baby Boom Generation');
} else if (convertedInput > 1964 && convertedInput <= 1979) {
  alert('You are a member of Generation X');
} else if (convertedInput > 1979 && convertedInput <= 1994) {
  alert('You are a member of Millenials');
} else if (convertedInput > 1994 && convertedInput <= 2012) {
  alert('You are a member of Generation Z');
} else if (convertedInput > 2012 && convertedInput <= 2025) {
  alert('You are a member of Generation Alpha');
} else if (convertedInput > 2025) {
  alert('We don`t have a name for this yet');
} else {
  alert('Please enter an actual number');
}
