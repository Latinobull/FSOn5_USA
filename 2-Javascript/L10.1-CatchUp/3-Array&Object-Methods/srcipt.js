const newMethodArr = ['A', 'B', 'C'];

for (let letter of newMethodArr) {
  console.log(letter);
}
newMethodArr.copyWithin(1, 0);

console.log(newMethodArr);
