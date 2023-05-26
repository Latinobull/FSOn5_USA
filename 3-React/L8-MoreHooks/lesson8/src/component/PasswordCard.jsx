import { useState } from 'react';

export default function PasswordCard({ item }) {
  const [hidden, setHidden] = useState(true);
  return (
    <div style={{ width: '400px', border: 'solid 1px #222', margin: '10px' }}>
      <h5>Site: {item.site}</h5>
      <h5>Username: {item.username}</h5>
      {!hidden ? (
        <h5>Password: {item.password}</h5>
      ) : (
        <h5>Password: *********</h5>
      )}
      <button onClick={() => setHidden(!hidden)}>Reveal</button>
    </div>
  );
}
