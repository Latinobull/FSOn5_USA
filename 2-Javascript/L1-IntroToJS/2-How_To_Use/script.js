const btn = document.querySelector('button');
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
btn.addEventListener('click', () => {
  h1.textContent = 'Welcome to Javascript';
});

btn.addEventListener('dblclick', () => {
  h2.textContent = 'Enter at your own risk!';
});

console.log('Hi I am hidden');
