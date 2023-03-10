const h4 = document.querySelector('h4');
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const randomNumber = Math.floor(Math.random() * 100);
h4.textContent = `Final Score: ${randomNumber}`;
const allScores = JSON.parse(localStorage.getItem('allScores')) || [];

form.addEventListener('submit', e => {
  e.preventDefault();
  const {
    elements: { initials },
  } = e.currentTarget;

  const newScore = { initials: initials.value, score: randomNumber };
  allScores.push(newScore);
  localStorage.setItem('allScores', JSON.stringify(allScores));
});
