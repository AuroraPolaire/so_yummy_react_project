import { SignInForm } from '../../components/SignInForm/SignInForm';
import { NavLink } from 'react-router-dom';

const SignInPage = () => {
  return (
    <div>
      <h2>Sign In</h2>
      <SignInForm />
      <NavLink to="/register">Registration</NavLink>
    </div>
  );
};

export default SignInPage;
