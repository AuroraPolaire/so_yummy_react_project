import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../redux/auth/authSelectors';

export const RestrictedRoute = ({ redirectTo = '/', component: Component }) => {
  const isLoggenIn = useSelector(selectIsLoggedIn);
  return isLoggenIn ? <Navigate to={redirectTo} /> : Component;
};
