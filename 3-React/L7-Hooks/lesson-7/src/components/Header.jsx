export default function Header() {
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
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Resume</a>
        </li>
        <button>Change mode</button>
      </ul>
    </div>
  );
}
