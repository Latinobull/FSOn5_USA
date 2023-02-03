function logItems(items) {
  console.log(items);
  // *  for (let i = 0; i < items.length; i += 1) {
  // *    console.log(`${i + 1} - ${items[i]}`);
  // *  }
  items.forEach((value, index, arr) => {
    console.log(`${index + 1} - ${value}`);
    console.log(arr);
  });
}

logItems(['Mango', 'Poly', 'Ajax']);
logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);
