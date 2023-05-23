import { useEffect, useState } from 'react';
export default function useDarkMode() {
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

  return [isDarkMode, handleModeToggle];
}
