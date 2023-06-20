import { NavLink } from 'react-router-dom';
export default function Header() {
  return (
    <header>
      <h1>Coding Quiz</h1>
      <ul>
        <NavLink to="/">
          <h3>Home</h3>
        </NavLink>
        <NavLink to="/highscores" style={{ marginLeft: '30px' }}>
          <h3>HighScores</h3>
        </NavLink>
      </ul>
    </header>
  );
}
