import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/auth/authSelectors';

export const PrivateRoute = ({ component: Component, redirectTo = '/' }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  // const token = useSelector(state => state.auth.token);

  const shouldRedirect = !isLoggedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
