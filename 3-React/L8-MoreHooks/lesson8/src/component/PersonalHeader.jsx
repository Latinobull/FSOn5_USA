import { useUser } from '../context/UserContext';

export default function PersonalHeader() {
  const { isLoggedIn, logOut } = useUser();
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <h2>John Doe</h2>
      <ul style={{ display: 'flex', listStyle: 'none', alignItems: 'center' }}>
        <li>
          <a href="#">Home</a>
        </li>

          <p>Log in Below</p>
      </ul>
    </div>
  );
}
