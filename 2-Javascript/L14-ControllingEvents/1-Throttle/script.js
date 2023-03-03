const throttleBtnEl = document.querySelector('#throttle');
const regularBtnEl = document.querySelector('#noThrottle');
const throttleTextEl = document.querySelector('#throttleText');
const regularTextEl = document.querySelector('#regularText');
let throttleCounter = 0;
let regularCounter = 0;
throttleBtnEl.addEventListener(
  'click',
  _.throttle(() => {
    throttleCounter++;
    throttleTextEl.textContent = throttleCounter;
  }, 1000)
);

regularBtnEl.addEventListener('click', () => {
  regularCounter++;
  regularTextEl.textContent = regularCounter;
});
