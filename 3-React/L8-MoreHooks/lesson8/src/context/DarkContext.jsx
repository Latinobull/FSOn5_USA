import React, { useState, useEffect, createContext, useContext } from 'react';
const DarkContext = createContext();

export function useDarkMode() {
  return useContext(DarkContext);
}

export function DarkModeProvider(props) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const currentMode = localStorage.getItem('darkMode');
    return currentMode === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode);
    isDarkMode
      ? document.body.classList.add('dark-mode')
      : document.body.classList.remove('dark-mode');
  }, [isDarkMode]);
  const handleModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <DarkContext.Provider value={{ isDarkMode, handleModeToggle }}>
      {props.children}
    </DarkContext.Provider>
  );
}
