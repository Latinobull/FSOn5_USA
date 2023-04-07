const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (false) {
      resolve('You retrieved the data');
    } else {
      reject('There was an error');
    }
  });
});

promise
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err);
  });
