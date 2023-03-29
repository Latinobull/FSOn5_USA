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
  let userId = e.target.dataset.id;
  console.log(userId);
  fetch(`http://localhost:3001/api/users/${userId}`, {
    method: 'DELETE',
  }).then(() => console.log('User was deleted'));
});
