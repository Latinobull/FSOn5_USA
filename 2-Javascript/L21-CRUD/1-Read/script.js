const containerEl = document.querySelector('.container');

fetch('http://localhost:3001/api/users/', {
    method: 'GET'
})
  .then(res => res.json())
  .then(data => {
    console.log(data);
    data.forEach(person => {
      const section = document.createElement('section');
      section.innerHTML = `
        <h2> ${person.username}</h2>
        <h4> ${person.email} </h4>
        `;
      containerEl.append(section);
    });
  });
