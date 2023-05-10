import { useState } from 'react';

export default function Counter() {
  //? const [variable to get the data, change the data] = useState(the initial data the state will start with)
  //? getters and setters
  const [counter, setCounter] = useState(0);
  function handleIncrease(event) {
    setCounter(previousData => {
      return previousData + 1;
    });
  }
  function handleDecrease(event, name) {
    setCounter(counter - 1);
  }
  return (
    <div>
      <h4>Counter: {counter}</h4>
      <button id="increase" onClick={handleIncrease}>
        Increments
      </button>
      <button id="decrease" onClick={event => handleDecrease(event)}>
        Decrements
      </button>
    </div>
  );
}
