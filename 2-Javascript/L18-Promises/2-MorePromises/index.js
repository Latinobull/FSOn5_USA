// ? Proper ways to use them
import validator from 'validator';
// console.log(validator.isEmail('abc@aolcom'));
const validateEmail = userInput => {
  return new Promise((resolve, reject) => {
    if (validator.isEmail(userInput)) {
      resolve('Your email has been authenticated');
    } else {
      reject('Please pass in a valid email');
    }
  });
};

// validateEmail('BobRoss.com')
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// ? Promise Methods GOS

const multiPromise = (text, delay) => {
  return new Promise(resolve => {
    setTimeout(() => resolve(text), delay);
  });
};

const firstPromise = multiPromise('first', 10000);
const secondPromise = multiPromise('second', 5000);

//! GOS
// Promise.all([firstPromise, secondPromise]).then(res => {
//   console.log('all ' + res);
// });
//! GOS
Promise.race([firstPromise, secondPromise]).then(res => {
  console.log('race ' + res);
});
