function add(num1, num2) {
  return num1 + num2;
}

function reverseString(str) {
  const revStr = str.split('').reverse().join('');
  if (str === revStr) {
    return 'Yay a Palindrome';
  }
  return revStr;
}
module.exports = { add, reverseString };
