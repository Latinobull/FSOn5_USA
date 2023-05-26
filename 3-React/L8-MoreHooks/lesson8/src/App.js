import logo from './logo.svg';
import './App.css';
import Counter from './pages/Counter';
import MyPage from './pages/MyPage';
import Personal from './pages/Personal';
import CalculatorApp from './pages/Calculator';
import { useDarkMode } from './context/DarkContext';
function App() {
  console.log(useDarkMode());
  return (
    <div className="App">
      {/* <h1>Lesson 8</h1> */}
      {/* <CalculatorApp /> */}
      {/* <Counter /> */}
      {/* <MyPage /> */}
      <Personal />
    </div>
  );
}

export default App;
