const containerEl = document.querySelector('.container');
const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
function Submit(e) {
  e.preventDefault();
}

document.querySelector('form').addEventListener('submit', Submit);
