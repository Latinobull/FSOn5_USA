import { useState } from 'react';

export default function PasswordCard({ item, idx }) {
  return (
    <div
      key={idx}
      style={{ width: '400px', border: 'solid 1px #222', margin: '10px' }}
    >
      <h5>Site: {item.site}</h5>
      <h5>Username: {item.username}</h5>
      <h5>Password: {item.password}</h5>
    </div>
  );
}
