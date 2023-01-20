let userInput = prompt('What year were you born? ');
if ((userInput <= 1800)) {
  alert('Choose a year that is greater than 1800');
} else if (userInput > 1800 && userInput < 1900) {
  alert('You are a member of a generation I don`t know the name of');
} else if (userInput < 1924) {
  alert('You are a member of the Greatest Generation');
} else if (userInput > 1924 && userInput <= 1945) {
  alert('You are a member of the Silent Generation');
} else if (userInput > 1945 && userInput <= 1964) {
  alert('You are a member of Baby Boom Generation');
} else if (userInput > 1964 && userInput <= 1979) {
  alert('You are a member of Generation X');
} else if (userInput > 1979 && userInput <= 1994) {
  alert('You are a member of Millenials');
} else if (userInput > 1994 && userInput <= 2012) {
  alert('You are a member of Generation Z');
} else if (userInput > 2012 && userInput <= 2025) {
  alert('You are a member of Generation Alpha');
} else if (userInput > 2025) {
  alert('We don`t have a name for this yet');
} else {
  alert('Please enter an actual number');
}
