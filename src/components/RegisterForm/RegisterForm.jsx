import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/authOperations';
import { signIn } from '../../redux/auth/authOperations';
import { Formik } from 'formik';
import { useState } from 'react';
import {
  AuthNameIconStyled,
  AuthEmailIconStyled,
  AuthPasswordIconStyled,
  FormWrapper,
  AuthBox,
  InputWrapper,
  StyledInput,
  FormBtn,
  AuthWarningIconStyled,
  AuthSuccessIconStyled,
  AuthErrorIconStyled,
} from './RegisterForm.styled';
import { FieldError, getError } from 'components/AuthFieldStatus/FieldError';
import { FieldSuccess } from 'components/AuthFieldStatus/FieldSuccess';
import notiflix from 'notiflix';

export const RegisterForm = ({ type }) => {
  const dispatch = useDispatch();
  const [passStatus, setPassStatus] = useState({
    level: '',
    message: '',
  });
  const [nameStatus, setNameStatus] = useState({
    level: '',
    message: '',
  });
  const [emailStatus, setEmailStatus] = useState({
    level: '',
    message: '',
  });

  const checkScoreOfPassword = value => {
    let strength = 0;
    if (value.length >= 8) {
      strength++;
    }
    if (value.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) {
      strength++;
    }
    if (value.match(/([a-zA-Z])/) && value.match(/([0-9])/)) {
      strength++;
    }
    if (value.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) {
      strength++;
    }
    return strength;
  };

  const validateEmail = value => {
    if (value.length === 0) {
      setEmailStatus({
        level: 'error',
        message: 'Email is required',
      });
      return 'error';
    } else if (!value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
      setEmailStatus({
        level: 'error',
        message: 'Enter a valid Email',
      });
      return 'error';
    } else {
      setEmailStatus({
        level: 'correct',
        message: 'Email is secure',
      });
      return null;
    }
  };

  const validateEmailForLogin = value => {
    if (value.length === 0) {
      setEmailStatus({
        level: 'error',
        message: 'Email is required',
      });
      return 'error';
    } else if (!value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
      setEmailStatus({
        level: 'error',
        message: 'Enter a valid Email',
      });
      return 'error';
    }
    return null;
  };

  const validateName = value => {
    if (value.length === 0) {
      setNameStatus({
        level: 'error',
        message: 'Name is required',
      });
      return 'error';
    } else if (
      !value.match(/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/i)
    ) {
      setNameStatus({
        level: 'error',
        message: 'Enter a valid Name',
      });
      return 'error';
    } else {
      setNameStatus({
        level: 'correct',
        message: 'Name is correct',
      });
      return null;
    }
  };

  const validatePasswordForLogin = value => {
    if (value.length === 0) {
      setPassStatus({
        level: 'error',
        message: 'Password is required',
      });
      return 'error';
    }
    return null;
  };

  const validatePassword = value => {
    if (value.length === 0) {
      setPassStatus({
        level: 'error',
        message: 'Password is required',
      });
      return 'error';
    }
    if (value.length < 8) {
      setPassStatus({
        level: 'error',
        message: 'Your Password is too short',
      });
      return 'error';
    }

    const strength = checkScoreOfPassword(value);

    if (value.length >= 8 && strength < 4) {
      setPassStatus({
        level: 'warning',
        message: 'Your Password is litle secure',
      });
      return null;
    }

    if (strength === 4) {
      setPassStatus({
        level: 'correct',
        message: 'Password is secure',
      });
      return null;
    }
    return null;
  };

  let initialValues;
  if (type === 'register') {
    initialValues = { name: '', email: '', password: '' };
  }
  if (type === 'login') {
    initialValues = { email: '', password: '' };
  }

  return (
    <FormWrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          if (type === 'register') {
            dispatch(register(values))
              .unwrap()
              .then(rejected => {
                if (
                  rejected.payload === "Error's description" ||
                  rejected.payload === "Validation error's description"
                ) {
                  return notiflix.Notify.warning('Sorry something went wrong!');
                }
              })
              .catch(error => {
                return notiflix.Notify.warning('Sorry something went wrong!');
              });
          }
          if (type === 'login') {
            dispatch(signIn(values))
              .unwrap()
              .then()
              .catch(error => {
                return notiflix.Notify.warning('Email or password is wrong');
              });
          }

          resetForm(initialValues);
        }}
      >
        {({ errors, touched, isSubmitting, handleSubmit }) => (
          <AuthBox onSubmit={handleSubmit}>
            {type === 'register' ? (
              <InputWrapper>
                <AuthNameIconStyled
                  status={(() => {
                    const error = getError('name', { touched, errors });
                    return error ? nameStatus.level : '';
                  })()}
                />
                <StyledInput
                  type="text"
                  name="name"
                  placeholder="Name"
                  validate={value => validateName(value)}
                  className={(() => {
                    const error = getError('name', { touched, errors });
                    return error ? nameStatus.level : '';
                  })()}
                />
                <AuthWarningIconStyled
                  status={(() => {
                    const error = getError('name', { touched, errors });
                    return error ? nameStatus.level : '';
                  })()}
                />
                <AuthSuccessIconStyled
                  status={(() => {
                    const error = getError('name', { touched, errors });
                    return error ? nameStatus.level : '';
                  })()}
                />
                <AuthErrorIconStyled
                  status={(() => {
                    const error = getError('name', { touched, errors });
                    return error ? nameStatus.level : '';
                  })()}
                />
                <FieldError name="name" errorStatus={nameStatus} />
                <FieldSuccess status={nameStatus} />
              </InputWrapper>
            ) : null}

            <InputWrapper>
              <AuthEmailIconStyled
                status={(() => {
                  const error = getError('email', { touched, errors });
                  return error ? emailStatus.level : '';
                })()}
              />
              <StyledInput
                type="text"
                name="email"
                placeholder="Email"
                validate={
                  type === 'register' ? validateEmail : validateEmailForLogin
                }
                className={(() => {
                  const error = getError('email', { touched, errors });
                  return error ? emailStatus.level : '';
                })()}
              />

              <>
                <AuthWarningIconStyled
                  status={(() => {
                    const error = getError('email', { touched, errors });
                    return error ? emailStatus.level : '';
                  })()}
                />
                <AuthSuccessIconStyled
                  status={(() => {
                    const error = getError('email', { touched, errors });
                    return error ? emailStatus.level : '';
                  })()}
                />
                <AuthErrorIconStyled
                  status={(() => {
                    const error = getError('email', { touched, errors });
                    return error ? emailStatus.level : '';
                  })()}
                />
                <FieldError
                  name="email"
                  errorStatus={emailStatus}
                  className={(() => {
                    const error = getError('email', { touched, errors });
                    return error ? emailStatus.level : '';
                  })()}
                />
                <FieldSuccess status={emailStatus} />
              </>
            </InputWrapper>

            <InputWrapper>
              <AuthPasswordIconStyled
                status={(() => {
                  const error = getError('password', { touched, errors });
                  return error || passStatus.level === 'correct'
                    ? passStatus.level
                    : '';
                })()}
              />
              <StyledInput
                type="password"
                name="password"
                placeholder="Password"
                validate={
                  type === 'register'
                    ? validatePassword
                    : validatePasswordForLogin
                }
                className={(() => {
                  const error = getError('password', { touched, errors });
                  return error ? passStatus.level : '';
                })()}
              />
              <AuthWarningIconStyled
                status={(() => {
                  const error = getError('password', { touched, errors });
                  return error || passStatus.level === 'correct'
                    ? passStatus.level
                    : '';
                })()}
              />
              <AuthSuccessIconStyled
                status={(() => {
                  const error = getError('password', { touched, errors });
                  return error || passStatus.level === 'correct'
                    ? passStatus.level
                    : '';
                })()}
              />
              <AuthErrorIconStyled
                status={(() => {
                  const error = getError('password', { touched, errors });
                  return error || passStatus.level === 'correct'
                    ? passStatus.level
                    : '';
                })()}
              />
              <FieldError name="password" errorStatus={passStatus} />
              <FieldSuccess status={passStatus} />
            </InputWrapper>

            <FormBtn
              type="submit"
              onClick={handleSubmit}
              disabled={isSubmitting}
            >
              Sign Up
            </FormBtn>
          </AuthBox>
        )}
      </Formik>
    </FormWrapper>
  );
};

RegisterForm.propTypes = { type: PropTypes.string.isRequired };

export default RegisterForm;
