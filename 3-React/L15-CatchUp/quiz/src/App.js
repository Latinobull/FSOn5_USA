import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Landing from './pages/Landing';
import Highscores from './pages/HighScores';
import Quiz from './pages/Quiz';
function App() {
  return (
    <div className="page">
      <Header />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="/highscores" element={<Highscores />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
