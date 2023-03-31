const containerEl = document.querySelector('.container');
const usernameEl = document.querySelector('#username');
const emailEl = document.querySelector('#email');
const idEl = document.querySelector('#id');
let data;
// TODO KEYWORDS try and catch
async function getData() {
  try {
    const response = await fetch('http://localhost:3001/api/users', {
      method: 'GET',
    });
     data = await response.json();
  } catch (err) {
    console.log(err);
  }

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
}

containerEl.addEventListener('click', e => {
  idEl.value = e.target.dataset.id;
  usernameEl.value = e.target.childNodes[1].innerHTML.trim();
  emailEl.value = e.target.childNodes[3].innerHTML.trim();
});

document.querySelector('form').addEventListener('submit', async e => {
  e.preventDefault();
  const updatedData = {
    username: usernameEl.value,
    email: emailEl.value,
  };
  const response = await fetch(
    `http://localhost:3001/api/users/${idEl.value}`,
    {
      method: 'PUT',
      body: JSON.stringify(updatedData),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );
  const data = await response.json();
  console.log(data);
});

getData();
