// Write code to create a function that accepts a string and returns the string in camelCase

var camelCase = function (str) {
  let result = '';
  let words = str.toLowerCase().split(' ');


  words.forEach((word, index) => {
    if (index === 0) {
      result += word;
    } else {
      result += word[0].toUpperCase() + word.slice(1);
    }
  });
  console.log(result);
  return result;
};

camelCase('How is it going');

//* howIsItGoing
// ! HowIsItGoing

