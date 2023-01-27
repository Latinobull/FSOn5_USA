const financialStatement = {
  month: 'October',
  year: '2022',
  name: 'John Doe',
  street: '123 Tree st',
  state: 'NJ',
  zipCode: '10357',
  CardInfo: '1000123456781234',
  balance: 500,
  statement: [
    { place: 'Target', amount: -130 },
    { place: 'ABC Foods', amount: -120 },
    { place: 'Apple Store', amount: -550 },
    { place: 'Job', amount: 2300 },
  ],
};

function Organizer({ month, name, year, CardInfo, statement }) {
  //* const {month, name, year, CardInfo} = financialData
  const message = `
  Welcome ${name},
  In the month of ${month} year ${year} this is what you spent on the card ${CardInfo}.
  One place that you spent money on is ${
    statement[0].place
  } in which you spend ${Math.abs(statement[0].amount)} dollars.
  `;
  console.log(message);
}

Organizer(financialStatement);
