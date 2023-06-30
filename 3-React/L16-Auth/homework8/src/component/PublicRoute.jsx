import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedIn } from '../redux/users/selectors';
export default function PublicRoute({ children }) {
  const logIn = useSelector(isLoggedIn);

  return <div>{!logIn ? children : <Navigate to="/" />}</div>;
}
