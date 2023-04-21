import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import notiflix from 'notiflix';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { selectUserEmail } from '../../redux/auth/authSelectors';
import { selectorSwicherTheme } from 'redux/auth/authSelectors';
import { subscribeUser } from 'redux/auth/authOperations';
import SVG from '../../images/icons/sprite.svg';
import {
  SubscribeFooterSection,
  FormInput,
  FormBtn,
  Error,
  InputWrapper,
  ErrorLogoStyled,
  SuccessLogoStyled,
  EmailIconStyled,
  ResetFormInput,
} from './SubscribeForm.styled';

export const SubscribeForm = () => {
const dispatch = useDispatch();
const userEmail = useSelector(selectUserEmail);
const theme = useSelector(selectorSwicherTheme);
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
const validationSchema = yup.object().shape({
  email: yup.string()
    .matches(emailRegex, 'Invalid email address')
    .required('Email is required'),
});
  const formik = useFormik({
  initialValues: {
  email: userEmail || ''
},
  validationSchema,
    onSubmit: (values) => {
      dispatch(subscribeUser({ email: values.email }))
        .then((rejected) => {
          if (rejected.payload === 'Request failed with status code 403') {
            return notiflix.Notify.warning('Sorry! Access denied');
          }
          if (rejected.payload === 'Request failed with status code 404') {
            return notiflix.Notify.warning('It`s not your Email');
          }
          if (rejected.payload === 'Request failed with status code 409') {
             return notiflix.Notify.warning('You are already Subscribed. Try a different e-mail address.');
          }
          notiflix.Notify.success('Subscribed Successful');
    }).catch((error) => {
      notiflix.Notify.failure('Subscription error');
    });
    },
    validate: (values) => {
      const errors = {};
      if (!values.email) {
        errors.email = 'Required';
      } else if (!emailRegex.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
    },
  });
  const onClickResetButton = () => {
      formik.resetForm();
  }
  return (
    <SubscribeFooterSection onSubmit={formik.handleSubmit}
    >
      <InputWrapper>
        <FormInput
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
          themeName={theme}
        />
        <EmailIconStyled errorformik={formik.errors.email}>
          <use href={`${SVG}#icon-email-icon-for-footer`}></use>
          </EmailIconStyled>
        {!formik.isValid ? (
          <ResetFormInput
            type='button'
            onClick={onClickResetButton}
          >
            <ErrorLogoStyled>
              <use href={`${SVG}#icon-Error-logo`}></use>
              </ErrorLogoStyled>
          </ResetFormInput>) : (<SuccessLogoStyled><use href={`${SVG}#icon-Success-logo`}></use></SuccessLogoStyled>)}
        {formik.errors.email ? (
          <Error>{formik.errors.email}</Error>
        ) : null}
      </InputWrapper>
      <FormBtn type="submit" disabled={!formik.isValid}>Subscribe</FormBtn>
    </SubscribeFooterSection>

  );
}
