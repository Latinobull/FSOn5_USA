export default function Header(props) {
  console.log(props);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: props.color,
      }}
    >
      <h1>My {props.title} Page</h1>
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
