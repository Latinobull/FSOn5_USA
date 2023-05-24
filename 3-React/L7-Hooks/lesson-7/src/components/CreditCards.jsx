import useFetch from '../hooks/useFetch';
import { useState } from 'react';
export default function CreditCards() {
  const { data } = useFetch(
    'https://fakerapi.it/api/v1/credit_cards?_quantity=10'
  );
  const [initialState] = useState([1, 2, 3, 4, 4, 5, 56]);
  console.log(data);
  return (
    <div>
      <h1>Credit Cards</h1>

      {data && (
        <div>
          {data.map((item, idx) => (
            <div key={idx}>
              <h3>Credit Card Type: {item.type}</h3>
              <h4>Credit Card Number: {item.number}</h4>
              <h5>Cardholder: {item.owner}</h5>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
