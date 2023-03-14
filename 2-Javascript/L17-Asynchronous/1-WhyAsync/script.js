function startApp() {
  console.log('App is starting');

  console.log('Do something');

  console.log('App finished');
}

function startAsyncApp() {
  console.log('Async App is starting');

  setTimeout(() => {
    console.log('Do something');
  }, 0);

  console.log('Async App finished');
}

startAsyncApp();