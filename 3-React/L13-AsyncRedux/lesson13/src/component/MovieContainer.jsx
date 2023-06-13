export default function MovieContainer(props) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
      }}
    >
      {props.children}
    </div>
  );
}
