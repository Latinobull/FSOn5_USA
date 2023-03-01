const divEl = document.querySelector('div');
const sectionEl = document.querySelector('section');
const buttonEl = document.querySelector('button');

divEl.addEventListener('click', e => {
  console.log(e);
  alert(`This is the red Parent div`);
});

sectionEl.addEventListener('click', e => {
  console.log(e);
  alert(`This is the orange sub parent section`);
});

buttonEl.addEventListener('click', e => {
  console.log(e);
  alert(`This is the grey child button`);
});
