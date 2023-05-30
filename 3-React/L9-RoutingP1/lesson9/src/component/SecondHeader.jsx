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
          <a >Home</a>
        </li>
        <li>
          <a >About</a>
        </li>
        <li>
          <a >Contact</a>
        </li>
        <li>
          <a>Resume</a>
        </li>
      </ul>
    </div>
  );
}
