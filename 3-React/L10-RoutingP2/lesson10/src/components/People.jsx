import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import peopleData from '../utils/data.json';
export default function People() {
  const [searchParams] = useSearchParams();
  const lastname = searchParams.get('lastname').toLowerCase();
  const [data, setData] = useState(() =>
    peopleData.filter(person =>
      person.lastname.toLowerCase().includes(lastname)
    )
  );
  useEffect(
    () =>
      setData(
        peopleData.filter(person =>
          person.lastname.toLowerCase().includes(lastname)
        )
      ),
    [lastname]
  );

  console.log(data);

  return (
    <>
      <h5>People</h5>
      {data.length > 0 ? (
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around',
          }}
        >
          {data.map(person => (
            <div key={person.id} style={{ width: '250px', margin: '10px' }}>
              <h4>
                {person.firstname} {person.lastname}
              </h4>
              <h5>Password: {person.password}</h5>
            </div>
          ))}
        </div>
      ) : (
        <h5>No user with that last name</h5>
      )}
    </>
  );
}
