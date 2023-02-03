let array = [3, 5, 6, 12, 7, 4];
let finalNum = 0;
for (let i = 0; i < array.length; i++) {
  finalNum += array[i] / 2;
  if (finalNum > 10) {
    break;
  }
}
let forEachNumber = 0;

console.log('For-loop:' + finalNum);

array.forEach(function (num) {
  forEachNumber += num / 2;
});
console.log('Foreach:' + forEachNumber);
