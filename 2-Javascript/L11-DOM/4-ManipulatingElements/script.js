//* Step 1 Target the parent
const containerTextEl = document.querySelector('.container-text');
console.log(containerTextEl);

// * Step 2 Create the element that we want
const newInput = document.createElement('input');
console.log(newInput);

// * Step 3 Give the element it's respective data
newInput.setAttribute('type', 'password');
newInput.setAttribute('placeHolder', 'Verify Email');

// * Step 4 Give the element a parent to attach it to
//? parentElement.insertBefore(what element we want to add, where to add it at)
console.log(containerTextEl.children);
containerTextEl.insertBefore(newInput, containerTextEl.children[3]);

const moreInfo = document.createElement('button');
moreInfo.textContent = 'More Info';

containerTextEl.append(moreInfo);
