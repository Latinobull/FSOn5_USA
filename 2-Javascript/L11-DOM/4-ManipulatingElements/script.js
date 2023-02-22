const containerTextEl = document.querySelector('.container-text');

const newInput = document.createElement('input');
console.log(containerTextEl);

newInput.setAttribute('type', 'password');
newInput.setAttribute('placeHolder', 'Verify Email');

const moreInfo = document.createElement('button');
moreInfo.textContent = 'More Info';

containerTextEl.insertBefore(newInput, containerTextEl.children[3]);
containerTextEl.append(moreInfo);
