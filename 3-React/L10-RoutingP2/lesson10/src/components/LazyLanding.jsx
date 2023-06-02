import { Link } from 'react-router-dom';

export default function LazyLanding() {
  return (
    <div>
      <h3>This is the landing page</h3>
      <h5>
        Click <Link to="/heavy">Here</Link> to go to heavy
      </h5>
    </div>
  );
}
