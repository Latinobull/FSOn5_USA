import Home from './Home';
import About from './About';
import Contact from './Contact';
import Resume from './Resume';
export default function Header({ setPage }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h2>John Doe</h2>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li>
          <a onClick={() => setPage(<Home />)}>Home</a>
        </li>
        <li>
          <a onClick={() => setPage(<About />)}>About</a>
        </li>
        <li>
          <a onClick={() => setPage(<Contact />)}>Contact</a>
        </li>
        <li>
          <a onClick={() => setPage(<Resume />)}>Resume</a>
        </li>
      </ul>
    </div>
  );
}
