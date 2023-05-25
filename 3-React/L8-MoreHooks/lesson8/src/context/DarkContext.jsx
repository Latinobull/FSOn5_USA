import { createContext, useContext, useState, useEffect } from 'react';

const DarkContext = createContext();

export function useDark() {
  return useContext(DarkContext);
}
export function DarkProvider({ children }) {
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
      {children}
    </DarkContext.Provider>
  );
}
