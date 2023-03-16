// ? setTimeout(callback function, milliseconds to wait until it runs)
let counter = 0;

function startAsyncApp() {
  console.log('Async App is starting');
  setTimeout(() => {
    counter++;
    console.log(`Counter is now ${counter}`);
  }, 0);
  //* Even at 0 ms, the browser and node js will still delay it for about 4-15 ms based on your computer
  console.log(`Counter outside of timeout function is ${counter}`);
  console.log('Async App finished');
}

startAsyncApp();
