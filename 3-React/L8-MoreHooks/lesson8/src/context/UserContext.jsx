import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState({});
  const [err, setErr] = useState(null);
  const authenticatedUser = {
    username: 'DonnahueG',
    password: 'password12345!',
  };

  function logIn(e) {
    e.preventDefault();
    if (
      user.username === authenticatedUser.username &&
      user.password === authenticatedUser.password
    ) {
      setIsLoggedIn(true);
      setErr(null);
    } else {
      setErr('User is not authenticated');
    }
  }

  const logOut = () => {
    setIsLoggedIn(false);
    setUser({});
  };

  return (
    <UserContext.Provider
      value={{ isLoggedIn, user, err, setUser, logIn, logOut }}
    >
      {children}
    </UserContext.Provider>
  );
};
