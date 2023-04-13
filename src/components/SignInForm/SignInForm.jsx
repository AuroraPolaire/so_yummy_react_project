import React from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/authOperations';
import { Formik, Form, ErrorMessage, Field } from 'formik';
import * as Yup from 'yup';

const signInSchema = Yup.object().shape({
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

export const SignInForm = () => {
  const dispatch = useDispatch();

  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');

  // const handleChange = ({ target: { name, value } }) => {
  //   switch (name) {
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
  //   dispatch(signIn({ email, password }));

  //   setEmail('');
  //   setPassword('');
  //   <Navigate to="mainPage" />;
  // };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={signInSchema}
      onSubmit={(values, { resetForm }) => {
        console.log(values);
        dispatch(signIn(values))
          .unwrap()
          .then(data => {})
          .catch(error => console.log(error));
        resetForm({ email: '', password: '' });
      }}
    >
      {props => (
        <Form>
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

export default SignInForm;
