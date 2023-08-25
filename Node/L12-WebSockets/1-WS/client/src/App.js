import './App.css';
import { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const newWS = new WebSocket('ws://localhost:8080');
    newWS.onmessage = e => {
      setData(e.data);
    };
    return () => {
      newWS.close();
    };
  }, []);
  return (
    <div className="App">
      <h1>{data}</h1>
    </div>
  );
}

export default App;
