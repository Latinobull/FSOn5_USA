const h4 = document.querySelector('h4');
const input = document.querySelector('input');

input.addEventListener(
  'input',
  _.throttle(e => {
    console.log(e.target.value);
  }, 1000)
);
