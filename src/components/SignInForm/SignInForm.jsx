import React from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/auth/authOperations';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  AuthEmailIconStyled,
  AuthPasswordIconStyled,
  FormWrapper,
  AuthBox,
  InputWrapper,
  StyledInput,
  FormBtn,
} from './SignInForm.styled';

import notiflix from 'notiflix';
// import { useFormik } from 'formik';

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

  return (
    <FormWrapper>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={signInSchema}
        onSubmit={(values, { resetForm }) => {
          console.log(values);
          dispatch(signIn(values))
            .unwrap()
            .then(rejected => {
              if (rejected.payload === 'Request failed with status code 403') {
                return notiflix.Notify.warning('Sorry! Access denied');
              }
              if (rejected.payload === 'Request failed with status code 404') {
                return notiflix.Notify.warning('It`s not your Email');
              }
              if (rejected.payload === 'Request failed with status code 409') {
                return notiflix.Notify.warning(
                  'You are already Subscribed. Try a different e-mail address.'
                );
              }
              notiflix.Notify.success('Subscribed Successful');
            })
            .catch(error => {
              console.log(error);
              notiflix.Notify.failure('Subscription error');
            });
          resetForm({ email: '', password: '' });
        }}
      >
        {props => (
          <AuthBox>
            <InputWrapper>
              <AuthEmailIconStyled />
              <StyledInput
                type="text"
                name="email"
                placeholder="Email"
                // onChange={handleChange}
                // value={props.values.email}
              />
              <ErrorMessage name="email" render={message => <p>{message}</p>} />
            </InputWrapper>

            <InputWrapper>
              <AuthPasswordIconStyled />
              <StyledInput
                type="password"
                name="password"
                placeholder="Password"
                // onChange={handleChange}
                // value={props.values.password}
              />
              <ErrorMessage
                name="password"
                render={message => <p>{message}</p>}
              />
            </InputWrapper>

            <FormBtn type="submit">Sign Up</FormBtn>
          </AuthBox>
        )}
      </Formik>
    </FormWrapper>
  );
};

export default SignInForm;
