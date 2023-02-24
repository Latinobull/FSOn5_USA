const wordBank = [
  'Strawberry',
  'Friendship',
  'Everything',
  'Appreciate',
  'Motivation',
  'Technicals',
];

const letterContainerEl = document.querySelector('.letterContainer');
const body = document.querySelector('body');
const randomIndex = Math.floor(Math.random() * wordBank.length);
const randomWord = wordBank[randomIndex];

for (let i = 0; i < randomWord.length; i++) {
  const li = document.createElement('li');
  li.textContent = randomWord[i];
  letterContainerEl.append(li);
}

body.addEventListener('keydown', e => {
  console.log(e.key);
  const allLi = document.querySelectorAll('li');

  allLi.forEach(li => {
    if (li.textContent.toLowerCase() === e.key.toLowerCase()) {
      li.remove();
    }
  });
});
