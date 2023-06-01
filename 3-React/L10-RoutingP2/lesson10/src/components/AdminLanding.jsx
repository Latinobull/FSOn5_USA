import { Link } from 'react-router-dom';

export default function AdminLanding() {
  return (
    <div>
      <h3>Welcome to your Admin Dashboard</h3>
      <h4>
        Click <Link to="/search">Here</Link> to go search for a user
      </h4>
    </div>
  );
}
