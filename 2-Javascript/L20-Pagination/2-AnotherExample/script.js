// https://www.balldontlie.io/home.html#introduction
const userInput = document.querySelector('#player');
const form = document.querySelector('form');
const containerEl = document.querySelector('.container');

//* This is the structure of 99% of API fetches
// fetch('url We are fetching from').then(response => {
//     return response.json()
// }).then(data => {
//     console.log(data)
// })

form.addEventListener('submit', e => {
  e.preventDefault();
  containerEl.innerHTML = ``;
  const searchPlayer = userInput.value;
  fetch(
    `https://www.balldontlie.io/api/v1/players?search=${searchPlayer}&per_page=10`
  )
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(response => {
      console.log(response);
      for (let person of response.data) {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <h4>${person.first_name} ${person.last_name}</h4>
        <h5> Last Played for ${person.team.full_name}</h5>
        `;
        containerEl.append(div);
      }
    });
});


