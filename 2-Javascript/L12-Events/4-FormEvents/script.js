const usernameEl = document.querySelector('#username');
const passwordEl = document.querySelector('#password');
const formContainerEl = document.querySelector('.formContainer');
const formEl = document.querySelector('form');
const successEl = document.querySelector('.success');
const allInputs = document.querySelectorAll('input');
console.log(allInputs);
let formData = {
  username: '',
  password: '',
};

let usernameData = '';
let passwordData = '';

// allInputs.forEach(input => {
//   input.addEventListener('input', event => {
//     formData = { ...formData, [event.target.name]: event.target.value };
//     console.log(formData);
//   });
// });

usernameEl.addEventListener('input', e => {
  usernameData = e.target.value;
  console.log(usernameData);
});

passwordEl.addEventListener('input', e => {
  passwordData = e.target.value;
  console.log(passwordData);
});
