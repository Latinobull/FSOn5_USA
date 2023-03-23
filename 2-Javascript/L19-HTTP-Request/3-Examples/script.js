// const SWCharacters = [
//   { name: 'Luke Skywalker', height: 172 },
//   { name: 'C-3PO', height: 167 },
//   { name: 'R2-D2', height: 96 },
//   { name: 'Darth Vader', height: 202 },
//   { name: 'Leia Organa', height: 150 },
//   { name: 'Owen Lars', height: 178 },
//   { name: 'Beru Whitesun lars', height: 165 },
//   { name: 'R5-D4', height: 97 },
//   { name: 'Biggs Darklighter', height: 183 },
//   { name: 'Obi-Wan Kenobi', height: 182 },
//   { name: 'Jabba The Hut', height: 130 },
// ];

// const SWContainer = document.querySelector('.listSW');
// console.log(SWContainer);
// SWCharacters.map(item => {
//   console.log(item);
//   const list = document.createElement('li');
//   list.setAttribute('class', 'card');

//   list.innerHTML = `<h3>Name: ${item.name}</h3> <p>Height: ${item.height} </p>`;

//   SWContainer.append(list);
// });
const SWContainer = document.querySelector('.listSW');
fetch(`https://swapi.dev/api/people/`)
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data);
    const filterArr = data.results.filter(item => {
      return item.height < 100;
    });
    console.log(filterArr);
    for (let person of filterArr) {
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
