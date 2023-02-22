const SWCharacters = [
  { name: 'Luke Skywalker', height: 172 },
  { name: 'C-3PO', height: 167 },
  { name: 'R2-D2', height: 96 },
  { name: 'Darth Vader', height: 202 },
  { name: 'Leia Organa', height: 150 },
  { name: 'Owen Lars', height: 178 },
  { name: 'Beru Whitesun lars', height: 165 },
  { name: 'R5-D4', height: 97 },
  { name: 'Biggs Darklighter', height: 183 },
  { name: 'Obi-Wan Kenobi', height: 182 },
  {name: 'Jabba The Hut', height: 130}
];

const SWContainer = document.querySelector('.listSW');
console.log(SWContainer);
SWCharacters.map(item => {
  console.log(item);
  const list = document.createElement('li');
  // list.textContent = `Name: ${item.name}`;
  list.setAttribute('class', 'card');

  // const pTag = document.createElement('p');
  // pTag.textContent = `Height: ${item.height}cm`;
  // list.append(pTag);
  list.innerHTML = `<h3>Name: ${item.name}</h3> <p>Height: ${item.height} </p>`;

  // TODO add each li to it's parent
  SWContainer.append(list);
});
