import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h4>
        There is nothing here, please click <Link to="/"> here</Link> to go back
        to the app!
      </h4>
    </div>
  );
}
