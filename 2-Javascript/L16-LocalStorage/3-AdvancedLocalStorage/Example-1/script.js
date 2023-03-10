const h4 = document.querySelector('h4');
const btn = document.querySelector('button');
const ul = document.querySelector('ul');
const randomNumber = Math.floor(Math.random() * 100);
h4.textContent = `Final Score: ${randomNumber}`;
const allScoresArray = JSON.parse(localStorage.getItem('allScores')) || [];

console.log(allScoresArray);

btn.addEventListener('click', e => {
  allScoresArray.push(randomNumber);
  localStorage.setItem('allScores', JSON.stringify(allScoresArray));
  const li = document.createElement('li');
  li.textContent = randomNumber;
  ul.append(li);
});

//* JSON.stringify() to convert js to string
//* JSON.parse() to convert string back to js
for (let score of allScoresArray) {
  const li = document.createElement('li');
  li.textContent = score;
  ul.append(li);
}
