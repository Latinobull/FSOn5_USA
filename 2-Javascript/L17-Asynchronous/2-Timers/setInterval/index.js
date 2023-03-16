//? setInterval(cb function, milliseconds to wait each time it runs)
let time = 10;
const timer = setInterval(() => {
  time--;
  console.log(`You have ${time} seconds left`);
  if (time === 0) {
    clearInterval(timer);
    console.log('Time is up');
  }
}, 1000);
