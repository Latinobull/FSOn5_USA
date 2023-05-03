export default function Project(props) {
  return (
    <div
      style={{
        border: 'solid 2px black',
        maxWidth: '450px',
        boxShadow: '0px 0px 10px #777',
        margin: '10px',
      }}
    >
      {props.children}
    </div>
  );
}
