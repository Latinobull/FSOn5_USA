import './css/styles.css';
import API from './js/fetchCountries';
const DEBOUNCE_DELAY = 300;
const inputEl = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');

function checkAPI(e) {
  const userInput = e.target.value.trim();
  if (userInput === '') {
    countryList.innerHTML = '';
  }

  API.fetchCountries(userInput).then(data => {
    if (data.length > 10) {
      console.log('Too many matches found. Please enter a more specific name.');
    } else if (data.length > 1 && data.length <= 10) {
      console.log(data);
      data.forEach(item => {
        const li = document.createElement('li');
        // <img src=${item.flags.svg}/>
        // TODO ^^ This should go right after innerHTML line
        li.innerHTML = `

        <p> ${item.name.official} </p>
        `;
        countryList.append(li);
      });
    } else if (data.length === 1) {
      // TODO Load the countries data in the country-info element
    } else if (data.length === 0) {
      // TODO Should send a message saying hey, there is no country with that name
    }
  });
}
// TODO We need to debounce our addEventListener for every 300ms
inputEl.addEventListener('input', checkAPI);
