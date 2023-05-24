import useDarkMode from '../hooks/useDarkMode';
import Header from './Header';

export default function MyPage() {
  const [isDarkMode, handleModeToggle] = useDarkMode();
  return (
    <div>
      <Header isDarkMode={isDarkMode} handleModeToggle={handleModeToggle} />
      <div>
        <h1>My Portfolio </h1>
      </div>
    </div>
  );
}
