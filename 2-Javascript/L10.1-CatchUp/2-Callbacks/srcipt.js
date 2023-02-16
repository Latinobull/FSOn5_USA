const newArr = [2, 4, 6, 8, 10];

// newArr.forEach(multiply);

function multiply(num) {
  return num * 2;
}

const greaterThan10 = num => {
  return num > 10;
};

const newFunction = () => {};

const finalArr = newArr.map(multiply).filter(num => num > 10);

console.log(finalArr);
