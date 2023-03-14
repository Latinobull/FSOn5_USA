// setTimeout(function, milliseconds to wait until it runs)
function startAsyncApp() {
  console.log('Async App is starting');
  setTimeout(() => {
    console.log('Do something');
  }, 1000);
  console.log('Async App finished');
}

startAsyncApp();
