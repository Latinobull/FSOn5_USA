import { Link } from 'react-router-dom';

export default function Heavy() {
  const content = [];
  for (let i = 0; i < 1000; i++) {
    content.push(<p key={i}>This is some heavy content.</p>);
  }

  return (
    <div>
      <h1>Heavy Content Component</h1>
      <h5>
        Click <Link to="/">Here</Link> to go back to home
      </h5>
      {content}
    </div>
  );
}
