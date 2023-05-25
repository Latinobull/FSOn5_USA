import { useState } from 'react';
import Child from '../component/Child';

export default function Counter() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Counter App</h2>
      <Child count={count} incrementCount={incrementCount} />
    </div>
  );
}
