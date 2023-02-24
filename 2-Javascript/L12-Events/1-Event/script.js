const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
const resetBtn = document.querySelector('#reset');
const displayCounterEl = document.querySelector('#displayCounter');
let counter = 0;
console.log(incrementBtn);
console.log(decrementBtn);
console.log(resetBtn);

// ? ElementToTarget.addEventListener(theEvent it's listening for, what to do when the event occurs)

incrementBtn.addEventListener('click', event => {
  console.log(event);
  counter++;
  displayCounterEl.innerHTML = counter;
  event.target.setAttribute('style', 'background: red;');
});

decrementBtn.addEventListener('click', () => {
  //   if (counter != 0) {
  //     counter--;
  //     displayCounterEl.innerHTML = counter;
  //   }
  if (counter === 0) {
    return;
  } else {
    counter--;
    displayCounterEl.innerHTML = counter;
  }
});

resetBtn.addEventListener('click', () => {
  counter = 0;
  displayCounterEl.innerHTML = counter;
});
