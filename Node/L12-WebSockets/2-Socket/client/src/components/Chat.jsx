import { useState, useEffect } from 'react';
import io from 'socket.io-client';

export default function Chat({ username, setSignedIn }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  function sendMessage() {}
  function handleDisconnect() {
    localStorage.removeItem('signedIn');
    setSignedIn(false);
  }

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputMessage}
        onChange={e => setInputMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <button onClick={handleDisconnect}>Disconnect</button>
    </div>
  );
}
