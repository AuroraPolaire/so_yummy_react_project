import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register } from '../../redux/auth/authOperations';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

// import { Navigate } from 'react-router';

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(40, 'Must be 40 characters or less')
    .required('Required')
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      'Name may contain only letters, apostrophe, dash and spaces.'
    ),
  email: Yup.string().email('Invalid email address').required('Required'),
  password: Yup.string()
    .min(4)
    .max(30, 'Must be 30 characters or less')
    .required('Required')
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
      'Password must contain minimum eight characters, at least one letter and one number.'
    ),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
  //     case 'name':
  //       return setName(value);
  //     case 'email':
  //       return setEmail(value);
  //     case 'password':
  //       return setPassword(value);
  //     default:
  //       return;
  //   }
  // };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   dispatch(register({ name, email, password }));
  //   setName('');
  //   setEmail('');
  //   setPassword('');
  //   <Navigate to="mainPage" />;
  // };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={registerSchema}
      onSubmit={(values, { resetForm }) => {
        dispatch(register(values))
          .unwrap()
          .then(data => navigate('/'))
          .catch(error => console.log(error));
        resetForm({ name: '', number: '', password: '' });
      }}
    >
      {props => (
        <Form>
          <Field
            type="text"
            name="name"
            placeholder="Name"
            // onChange={handleChange}
            // value={props.values.name}
          />
          <ErrorMessage name="name" render={message => <p>{message}</p>} />
          <Field
            type="text"
            name="email"
            placeholder="Email"
            // onChange={handleChange}
            // value={props.values.email}
          />
          <ErrorMessage name="email" render={message => <p>{message}</p>} />
          <Field
            type="password"
            name="password"
            placeholder="Password"
            // onChange={handleChange}
            // value={props.values.password}
          />
          <ErrorMessage name="password" render={message => <p>{message}</p>} />

          <button type="submit">Sign Up</button>
        </Form>
      )}
    </Formik>
  );
};

// RegisterPage.propTypes = {}

export default RegisterForm;
