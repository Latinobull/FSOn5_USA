import { useState, useEffect } from 'react';
import io from 'socket.io-client';

export default function Chat({ username, setSignedIn }) {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');
  const [socket, setSocket] = useState(null);
  useEffect(() => {
    const newSocket = io('http://localhost:3001');
    setSocket(newSocket);

    newSocket.on('clientMessage', data => {
      setMessages(prev => [...prev, data]);
    });

    newSocket.emit('userJoined', username);

    return () => {
      newSocket.disconnect();
    };
  }, []);

  function sendMessage() {
    socket.emit('serverMessage', `${username} : ${inputMessage}`);
  }
  function handleDisconnect() {
    localStorage.removeItem('signedIn');
    setSignedIn(false);
  }

  return (
    <div>
      <h1>Chat</h1>
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
