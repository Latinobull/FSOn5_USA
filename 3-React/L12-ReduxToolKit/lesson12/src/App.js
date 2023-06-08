import logo from './logo.svg';
import './App.css';
import Landing from './components/Landing';
import { Routes, Route, Link } from 'react-router-dom';
import Cart from './components/Cart';

function App() {
  return (
    <div className="App">
      <Link to="/">
        <h1>E-Commerce App</h1>
      </Link>
      <Link to="/cart">
        <h2>Cart</h2>
      </Link>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
