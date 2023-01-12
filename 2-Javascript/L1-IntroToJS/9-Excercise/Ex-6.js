let weight = '88,3';
let height = '1.75';

const bmi = parseFloat(weight) / (parseFloat(height) * parseFloat(height));
let newBMI = bmi.toString();
let decimalPosition = newBMI.indexOf('7');
decimalPosition = Math.round(decimalPosition);
console.log(decimalPosition);
console.log(Math.ceil(bmi * 10) / 10); // 28.8
