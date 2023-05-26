import Header from '../component/Header';
import { DarkModeProvider } from '../context/DarkContext';

export default function MyPage() {
  return (
    <DarkModeProvider>
      <div>
        <Header />
        <div>
          <h1>My Portfolio </h1>
        </div>
      </div>
    </DarkModeProvider>
  );
}
