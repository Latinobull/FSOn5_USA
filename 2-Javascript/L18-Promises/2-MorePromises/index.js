// ? Proper ways to use them
import validator from 'validator';

// ? Promise Methods

const multiPromise = (text, delay) => {
  return new Promise(res => {
    setTimeout(() => res(text), delay);
  });
};

const firstPromise = multiPromise('first', 1000);
const secondPromise = multiPromise('second', 3000);

// Promise.all([firstPromise, secondPromise]).then(res => {
//   console.log('all ' + res);
// });

// Promise.race([firstPromise, secondPromise]).then(res => {
//   console.log('race ' + res);
// });
