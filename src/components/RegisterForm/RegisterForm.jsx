import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
  AuthNameIconStyled,
  AuthEmailIconStyled,
  AuthPasswordIconStyled,
  FormWrapper,
  AuthBox,
  InputWrapper,
  StyledInput,
  FormBtn,
} from './RegisterForm.styled';

// import AuthNameIcon from '../../images/icons/authNameIcon.svg';
// import authEmailIcon from '../../images/icons/authEmailIcon.svg';
// import authPasswordIcon from '../../images/icons/authPasswordIcon.svg';
// import authWarningIcon from '../../images/icons/authWarningIcon.svg';

import notiflix from 'notiflix';
// import { useFormik } from 'formik';

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

  return (
    <FormWrapper>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        validationSchema={registerSchema}
        onSubmit={(values, { resetForm }) => {
          dispatch(register(values))
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
              notiflix.Notify.failure('Subscription error');
            });
          resetForm({ name: '', number: '', password: '' });
        }}
      >
        {props => (
          <AuthBox>
            <InputWrapper>
              <AuthNameIconStyled />
              <StyledInput
                type="text"
                name="name"
                placeholder="Name"
                // autoComplete="off"

                // onChange={handleChange}
                // value={props.values.name}
              />
              <ErrorMessage name="name" render={message => <p>{message}</p>} />
            </InputWrapper>

            <InputWrapper>
              <AuthEmailIconStyled />
              <StyledInput
                type="text"
                name="email"
                placeholder="Email"
                // autoComplete="off"
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
                // autoComplete="off"

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

// RegisterPage.propTypes = {}

export default RegisterForm;
