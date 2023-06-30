import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedIn } from '../redux/users/selectors';
export default function PrivateRoute({ children }) {
  const logIn = useSelector(isLoggedIn);
  console.log(logIn);

  return <div>{logIn ? children : <Navigate to="/login" />}</div>;
}
