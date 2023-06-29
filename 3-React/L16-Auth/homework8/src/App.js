// import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Phonebook from './pages/Phonebook';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Header from './component/Header';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Phonebook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
