const SWContainer = document.querySelector('.listSW');
fetch(`https://swapi.dev/api/people`)
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data);
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
