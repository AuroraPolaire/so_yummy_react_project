import styled from 'styled-components';
import { Field, Form } from 'formik';

import { ReactComponent as AuthNameIcon } from '../../images/icons/authNameIcon.svg';
import { ReactComponent as AuthEmailIcon } from '../../images/icons/authEmailIcon.svg';
import { ReactComponent as AuthPasswordIcon } from '../../images/icons/authPasswordIcon.svg';
// import { ReactComponent as AuthWarningIcon } from '../../images/icons/authWarningIcon.svg';
// import { ReactComponent as AuthErrorIcon } from '../../images/icons/authErrorIcon.svg';
// import { ReactComponent as AuthSuccessIcon } from '../../images/icons/authSuccessIcon.svg';

export const AuthNameIconStyled = styled(AuthNameIcon)`
  position: absolute;
  top: 16px;
  left: 17px;
  right: 0px;
  width: 14px;
  height: 12px;
  /* color: #23262a; */
  stroke: #FAFAFA;
  /* path {
    stroke: ${props => (props.errorformik ? '#E74A3B' : '#3CBC81')};
  } */
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 18px;
    left: 20px;
    top: 21px;
  }
`;

export const AuthEmailIconStyled = styled(AuthEmailIcon)`
  position: absolute;
  top: 16px;
  left: 17px;
  right: 0px;
  width: 15px;
  height: 12px;
  /* color: #23262a; */
  stroke: #FAFAFA;
  /* path {
    stroke: ${props => (props.errorformik ? '#E74A3B' : '#3CBC81')};
  } */
  @media screen and (min-width: 768px) {
    width: 20px;
    height: 16px;
    left: 20px;
    top: 21px;
  }
`;

export const AuthPasswordIconStyled = styled(AuthPasswordIcon)`
  position: absolute;
  top: 16px;
  left: 16px;
  right: 0px;
  width: 14px;
  height: 14px;
  /* color: #23262a; */
  stroke: #FAFAFA;
  /* path {
    stroke: ${props => (props.errorformik ? '#E74A3B' : '#3CBC81')};
  } */
  @media screen and (min-width: 768px) {
    width: 18px;
    height: 18px;
    left: 20px;
    top: 21px;
  }
`;

export const AuthBox = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 279px;

  @media screen and (min-width: 768px) {
    width: 400px;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    /* margin: 0 auto; */
  }
`;

export const StyledInput = styled(Field)`
  font-weight: 400;
  font-size: 14px;
  line-height: 1.5;
  letter-spacing: -0.02em;
  outline: none;
  width: 279px;
  height: 45px;

  border: 1px solid
    ${({ error, touched }) =>
      touched ? (error ? '#E74A3B' : '#3CBC81') : '#afafaf'};

  /* border: 1px solid #afafaf; */
  border-radius: 6px;
  padding-left: 40px;
  padding-right: 40px;
  opacity: 0.8;
  margin-bottom: 12px;

  color: ${({ error, touched }) =>
    touched ? (error ? '#E74A3B' : '#3CBC81') : '#fafafa'};

  /* color: #fafafa; */
  &:hover,
    &:focus {
      border: 1px solid #FFFFFF;
    }
  background-color: transparent;
  @media (min-width: 768px) {
    width: 400px;
    height: 59px;
    padding-left: 50px;
    margin-bottom: 24px;
    font-size: 18px;
    line-height: 1.5;
  }

  &::placeholder {
    font-size: 14px;
    line-height: 1.5;
    font-weight: 400;
    color: ${({ error, touched }) =>
      touched ? (error ? '#E74A3B' : '#3CBC81') : '#fafafa'};
    opacity: 0.8;
    @media screen and (min-width: 768px) {
      font-size: 18px;
    }
  }

`;

export const FormBtn = styled.button`
  padding-top: 12px;
  padding-bottom: 12px;
  font-family: 'Poppins';
  border: none;
  background-color: #8baa36;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fafafa;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.13;
  width: 282px;
  margin-top: 16px;

  &:hover,
  &:focus {
    color: #22252a;
  }
  :disabled {
    background-color: #2a2c36;
    color: rgba(250, 250, 250, 0.6);
    &:hover:disabled,
    &:focus:disabled {
      color: initial;
      cursor: not-allowed;
    }
  }
  @media screen and (min-width: 768px) {
    padding-top: 18px;
    padding-bottom: 18px;
    font-size: 16px;
    width: 400px;
    margin-top: 26px;
  }
  @media screen and (min-width: 1440px) {

  }
`;

// export const AuthForm = styled.form`
//   display: flex;
//   justify-content: center;
//   align-items: flex-start;
//   flex-direction: column;
//   margin: 0;
//   padding: 0;
// `;

// export const AuthUserNameLabel = styled.label`
//   position: relative;
//   svg {
//     position: absolute;
//     top: 15px;
//     left: 15px;
//     right: 0px;
//     width: 18px;
//     height: 18px;
//     color: #23262a;
//     @media (min-width: 478px) {
//       width: 24px;
//       height: 24px;
//       left: 19px;
//       top: 17px;
//     }

//     &:last-of-type {
//       left: 251px;
//       top: 15px;
//       @media (min-width: 478px) {
//         top: 20px;
//         left: 363px;
//         width: 19px;
//         height: 19px;
//       }
//     }
//   }
//   & .error {
//     position: absolute;
//     top: -20px;
//     left: 50px;
//     font-family: 'Poppins';
//     color: red;
//     font-size: 14px;
//     line-height: 1, 5;
//   }
// `;

// export const StyledInput = styled.input`
//   font-family: 'Poppins';
//   font-style: normal;
//   font-weight: 400;
//   font-size: 14px;
//   line-height: 21px;
//   letter-spacing: -0.02em;
//   outline: none;
//   width: 282px;
//   height: 48px;
//   border: 1px solid #afafaf;
//   border-radius: 4px;
//   padding-left: 39px;
//   padding-right: 42px;
//   opacity: 0.8;
//   margin-bottom: 24px;
//   color: #23262a;
//   @media (min-width: 478px) {
//     width: 400px;
//     height: 58px;
//     padding-left: 51px;
//     margin-bottom: 32px;
//     font-size: 18px;
//     line-height: 27px;
//   }
// `;

// export const AuthSubmitButton = styled.button`
//   padding-top: 12px;
//   padding-bottom: 12px;
//   font-family: 'Poppins';
//   border: none;
//   background-color: var(--accent-color-green);
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: var(--font-white);
//   border-radius: 6px;
//   font-weight: 400;
//   font-size: 16px;
//   line-height: 1.13px;
//   width: 279px;
//   height: 45px;
//   &:hover {
//     color: #d3d3d3;
//   }
//   @media (min-width: 768px) {
//     padding-top: 19px;
//     padding-bottom: 19px;
//     font-size: 16px;
//     width: 400px;
//     height: 56px;
//   }

//   @media (min-width: 1440px) {
//     padding-top: 20px;
//     padding-bottom: 20px;
//     height: 59px;
//   }
// `;

// OLD VARIANT

export const FormWrapper = styled.div``;

// export const AuthBox = styled(Form)`
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   width: 279px;
//   padding: 0;
//   margin: 0;
// `;
