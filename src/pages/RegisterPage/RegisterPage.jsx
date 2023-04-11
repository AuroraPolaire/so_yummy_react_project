import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { NavLink } from 'react-router-dom';

const RegisterPage = () => {
  return (
    <div>
      <h2>Registration</h2>
      <RegisterForm />
      <NavLink to="/login">Sign in</NavLink>
    </div>
  );
};

export default RegisterPage;
