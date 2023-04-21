import React from 'react';
import { FieldStyled } from './AuthFieldStatus.styled';

export const FieldSuccess = ({ status }) => {
  return status.level !== '' && status.level !== 'error' ? (
    <FieldStyled
      className={(() => ['error-box'].concat(status.level).join(' '))()}
    >
      {status.message}
    </FieldStyled>
  ) : null;
};
