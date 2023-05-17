import { useState, useEffect } from 'react';
export default function FirstAPI() {
  const [starWarsData, setStarWarsData] = useState([]);

  // * useEffect helps render items on the page, without rerendering on to the browser
  /*
useEffect(() => {
  what are we doing here
},
?Dependency Array = Only rerender if it depends on a variable
[starWarsData]
)
*/
  useEffect(() => {
    // fetch('https://swapi.py4e.com/api/people/')
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(data => {
    //     setStarWarsData(data);
    //   });
    getData();
  }, []);

  // ! If you want it to only render once, then pass in an empty array
  function getData() {
    fetch('https://swapi.py4e.com/api/people/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setStarWarsData(data.results);
      });
  }
  console.log(starWarsData);
  return (
    <div>
      <h1>First API</h1>
      <button onClick={getData}>Click</button>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {starWarsData.map(item => (
          <div key={item.created} style={{ margin: '20px' }}>
            <h3>{item.name}</h3>
            <h4>{item.eye_color}</h4>
            <h5>{item.height}</h5>
          </div>
        ))}
      </div>
    </div>
  );
}
