import useDarkMode from '../hooks/useDarkMode';
import Header from './Header';
export default function YourPage() {
  const [isDarkMode, handleModeToggle] = useDarkMode();
  console.log(isDarkMode);
  return (
    <div>
      <Header isDarkMode={isDarkMode} handleModeToggle={handleModeToggle} />
      <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
        <h1>Your Page </h1>
      </div>
    </div>
  );
}
