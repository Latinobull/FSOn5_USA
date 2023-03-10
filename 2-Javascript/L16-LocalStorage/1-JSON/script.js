//? JSON = JavaScript Object Notation
import * as companyData from './data.json' assert { type: 'json' };
import validator from 'validator';
// console.log(companyData.default);
console.log(validator.isEmail('abc@aol.com'));
for (let person of companyData.default) {
  if (validator.isEmail(person.email)) {
    console.log(`Thanks for signing up ${person.name}`);
  }else {
    console.log(`Please check your email as ${person.email} isn't valid.`)
  }
}