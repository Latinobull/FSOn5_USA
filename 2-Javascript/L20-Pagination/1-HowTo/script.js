const SWContainer = document.querySelector('.listSW');
const nextBtn = document.querySelector('#nextBtn');
const prevBtn = document.querySelector('#prevBtn');
let next;
let prev;
prevBtn.disabled = true;
// fetch(`https://swapi.dev/api/people/`)
//   .then(res => {
//     return res.json();
//   })
//   .then(data => {
//     console.log(data);
//     next = data.next;
//     for (let person of data.results) {
//       const li = document.createElement('li');
//       li.classList.add('card');
//       li.innerHTML = `
//       <h3> Name: ${person.name} </h3>
//       <p> Birth Year: ${person.birth_year} </p>
//       <p> Height: ${person.height} </p>
//       `;
//       SWContainer.append(li);
//     }
//   });

function pagination(url) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);

      SWContainer.innerHTML = '';
      next = data.next;
      prev = data.previous;
      if (prev === null) {
        prevBtn.disabled = true;
      }
      if (next === null) {
        nextBtn.disabled = true;
      }
      for (let person of data.results) {
        const li = document.createElement('li');
        li.classList.add('card');
        li.innerHTML = `
        <h3> Name: ${person.name} </h3>
        <p> Birth Year: ${person.birth_year} </p>
        <p> Height: ${person.height} </p>
        `;
        SWContainer.append(li);
      }
    });
}

// nextBtn.addEventListener('click', )
nextBtn.addEventListener('click', () => {
  pagination(next);
  prevBtn.disabled = false;
});
prevBtn.addEventListener('click', () => {
  pagination(prev);
  nextBtn.disabled = false;
});
