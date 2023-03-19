//? What is a promise

// setTimeout(() => console.log('Hello'), 2000);
// console.log('Bye');

//? How to create one
const promise = new Promise((resolve, reject) => {
  if (true === true) {
    //* If the promise finished succesfully, then resolve the promise
    resolve(6);
  } else {
    // * If the promise didn't resolve, then throw an error
    reject('The promise did not resolve properly');
  }
});

// promise
//   .then(response => {
//     console.log(response);
//     return response;
//   })
//   .then(response => {
//     console.log(response * 2);
//     return response * 2;
//   })
//   .then(response => {
//     console.log(response + 11);
//   })
//   .catch(err => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log('App has ended');
//   });

//? setTimeout vs promise

function timeout() {
  console.log('App starts');
  setTimeout(() => {
    for (let index = 0; index < 5; index++) {
      console.log('Do something');
    }
  }, 3000);
  console.log('App finished');
}

function promiseTwo() {
  console.log('App starts');
  promise
    .then(response => {
      for (let index = 0; index < 5; index++) {
        console.log(response);
      }
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      console.log('App Finished');
    });
}

// timeout();
promiseTwo();
