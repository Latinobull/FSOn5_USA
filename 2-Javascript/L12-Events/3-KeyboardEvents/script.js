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

