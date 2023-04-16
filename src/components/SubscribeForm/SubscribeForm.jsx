import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useFormik } from 'formik';
import * as yup from 'yup';
import notiflix from 'notiflix';
import {
  SubscribeFormWrapper,
  InputForm,
  FormFooterInput,
  Error,
  InputWrapper,
  ErrorLogoStyled,
  EmailIconStyled,
  InputBtn,
  SuccessLogoStyled,
  ResetFormInput,
} from './SubscribeForm.styled';
import { selectorSwicherTheme } from 'redux/auth/authSelectors';
import { subscribeUser } from 'redux/auth/authOperations';

export const SubscribeForm = () => {
  const dispatch = useDispatch();

  const onSubmit = (values) => {
    dispatch(subscribeUser({ email: values.email }))
      .then(() => {
        notiflix.Notify.success('Subscribed Successful');
      })
      .catch((error) => {
        if (error?.response?.status === 404) {
          notiflix.Notify.warning('It`s not your Email');
        } else if (error?.response?.status === 400) {
          notiflix.Notify.warning('You are already subscribed');
        } else {
          console.log(error);
          notiflix.Notify.failure('Subscription error');
        }
      });
  };

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: yup.object().shape({
      email: yup.string().required('Required').matches(emailRegex, 'Invalid email address'),
    }),
    onSubmit,
  });

  const onClickResetButton = () => {
    formik.resetForm();
  };

  const theme = useSelector(selectorSwicherTheme);

  return (
    <SubscribeFormWrapper onSubmit={formik.handleSubmit}>
      <InputForm>
        <InputWrapper>
          <FormFooterInput
            type="email"
            id="email"
            name="email"
            placeholder='Enter your email address'
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.errors.email}
            touched={formik.touched.email}
            required
            themeName={theme}>
          </FormFooterInput>
          <EmailIconStyled errorformik={formik.errors.email } />
          {!formik.isValid ? (
            <ResetFormInput
              type='button'
              onClick={onClickResetButton}
            >
              <ErrorLogoStyled /></ResetFormInput>) : (<SuccessLogoStyled />)}
          {formik.errors.email ? (
            <Error>{formik.errors.email}</Error>
          ) : null}
        </InputWrapper>
        <InputBtn
          type='submit'
          disabled={!formik.isValid}
        >Subscribe
        </InputBtn>
      </InputForm>
    </SubscribeFormWrapper>
  );
};
