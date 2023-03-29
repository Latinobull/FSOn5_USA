const containerEl = document.querySelector('.container');
const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
function Submit(e) {
  e.preventDefault();
  const newData = {
    username: usernameEl.value,
    email: emailEl.value,
  };
  fetch('http://localhost:3001/api/users', {
    method: 'POST',
    body: JSON.stringify(newData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
}

document.querySelector('form').addEventListener('submit', Submit);
