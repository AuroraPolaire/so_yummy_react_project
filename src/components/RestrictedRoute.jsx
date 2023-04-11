import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../Redux/auth/authSelectors';

export const RestrictedRoute = ({ redirectTo = '/', component: Component }) => {
    const isLoggenIn = useSelector(selectIsLoggedIn);
    return isLoggenIn ? <Navigate to={redirectTo} /> : Component;
  };