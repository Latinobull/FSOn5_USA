// import logo from './logo.svg';
import './App.css';
import Login from './pages/Login';
import Phonebook from './pages/Phonebook';
import { Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Header from './component/Header';
import PrivateRoute from './component/PrivateRoute';
import PublicRoute from './component/PublicRoute';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Phonebook />
            </PrivateRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <Signup />
            </PublicRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
