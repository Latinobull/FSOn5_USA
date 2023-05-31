import { Link, NavLink } from 'react-router-dom';
export default function SecondHeader() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h2>InstaBook</h2>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li>
          <NavLink className="nav" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="nav" to="/about">
            About
          </NavLink>
        </li>
        <li>
          <NavLink className="nav" to="/contact">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink className="nav" to="/resume">
            Resume
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
