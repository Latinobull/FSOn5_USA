import { useState } from 'react';
import PasswordCard from './PasswordCard';

export default function Start() {
  const [accounts, setAccounts] = useState([
    { site: 'Gmail', username: 'DonnyG', password: 'abc123' },
    { site: 'Reddit', username: 'beSquare', password: 'def098' },
    { site: 'Instagram', username: 'percussion', password: 'happyjoy234' },
  ]);
  return (
    <div>
      <h3>Welcome User</h3>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        {accounts.map((item, idx) => (
          <PasswordCard item={item} key={idx} />
        ))}
      </div>
    </div>
  );
}
