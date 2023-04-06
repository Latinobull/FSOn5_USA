const arr = ['John', 'Joe', 'Jill', 'Jones'];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === 'Jill') {
    continue;
  }
  console.log(arr[i]);
}
