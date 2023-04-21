import React from 'react';
import { FormikConsumer } from 'formik';
import { FieldStyled } from './AuthFieldStatus.styled';

export function getError(field, { errors, touched }) {
  return touched[field] && errors[field] ? errors[field] : null;
}

export const FieldError = ({ name, errorStatus }) => {
  return (
    <FormikConsumer>
      {formik => {
        const error = getError(name, formik);
        return error ? (
          <FieldStyled
            className={(() =>
              ['error-box'].concat(error ? errorStatus.level : '').join(' '))()}
          >
            {errorStatus.message}
          </FieldStyled>
        ) : null;
      }}
    </FormikConsumer>
  );
};
