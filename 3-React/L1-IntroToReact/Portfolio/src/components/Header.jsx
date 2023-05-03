export default function Header() {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}
    >
      <h1>My Portfolio</h1>
      <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          justifyContent: 'space-between',
        }}
      >
        <li>Links</li>
        <li>Links</li>
        <li>Links</li>
      </ul>
    </div>
  );
}
