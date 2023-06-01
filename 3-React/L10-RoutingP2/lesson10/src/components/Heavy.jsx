export default function Heavy() {
  const content = [];
  for (let i = 0; i < 1000; i++) {
    content.push(<p key={i}>This is some heavy content.</p>);
  }

  return (
    <div>
      <h1>Heavy Content Component</h1>
      {content}
    </div>
  );
}
