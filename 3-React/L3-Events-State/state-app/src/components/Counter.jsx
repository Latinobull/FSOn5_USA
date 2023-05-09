import { useState } from 'react';

export default function Counter() {

  return (
    <div>
      <h4>Counter: 0</h4>
      <button id="increase">Increments</button>
      <button id="decrease">Decrements</button>
    </div>
  );
}
