import throttle from 'lodash.throttle';
const emailEl = document.querySelector('label [name=email]');
const messageEl = document.querySelector('label [name=message]');
const formEl = document.querySelector('form');
const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
console.log(savedFormData);

formEl.addEventListener(
  'input',
  throttle(e => {
    const formData = {
      email: emailEl.value,
      message: messageEl.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
  }, 1000),
);

if (savedFormData) {
  emailEl.value = savedFormData.email;
  messageEl.value = savedFormData.message;
}

formEl.addEventListener('submit', e => {
  e.preventDefault();
  formEl.reset();
  localStorage.removeItem('feedback-form-state')
});
