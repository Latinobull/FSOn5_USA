import Chat from './components/Chat';
import SignUp from './components/Signup';
import './App.css';
import { useState } from 'react';
const App = () => {
  const [signedIn, setSignedIn] = useState(
    localStorage.getItem('signedIn') || false
  );
  const [username, setUsername] = useState(localStorage.getItem('username'));

  return signedIn ? (
    <Chat username={username} setSignedIn={setSignedIn} />
  ) : (
    <SignUp
      setSignedIn={setSignedIn}
      setUsername={setUsername}
      username={username}
    />
  );
};

export default App;
