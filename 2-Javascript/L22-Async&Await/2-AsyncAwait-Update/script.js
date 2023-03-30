const containerEl = document.querySelector('.container');
const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const idEl = document.querySelector('#id');
fetch('http://localhost:3001/api/users', {
  method: 'GET',
})
  .then(res => res.json())
  .then(data => {
    console.log(data);
    data.forEach(item => {
      const section = document.createElement('section');
      section.dataset.id = item._id;
      section.innerHTML = `
        <h2> ${item.username}</h2>
        <h4> ${item.email}</h4>
        `;
      containerEl.append(section);
    });
  });
containerEl.addEventListener('click', e => {
  idEl.value = e.target.dataset.id;
  usernameEl.value = e.target.childNodes[1].innerHTML.trim();
  emailEl.value = e.target.childNodes[3].innerHTML.trim();
});

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();
  const updatedData = {
    username: usernameEl.value,
    email: emailEl.value,
  };
  fetch(`http://localhost:3001/api/users/${idEl.value}`, {
    method: 'PUT',
    body: JSON.stringify(updatedData),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(data => {
      console.log(data);
    });
});
