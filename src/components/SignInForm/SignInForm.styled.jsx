import styled from 'styled-components';
import { Field, Form } from 'formik';

export const FormWrapper = styled.div`
/* display: flex; */



`;


export const AuthBox = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 279px;
  padding: 0;
  margin: 0;
  /* padding-top: 32px;
  padding-right: 48px;
  padding-left: 48px; */
  /* padding-bottom: 80px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  width: 279px;
  padding: 0;
  margin: 0;
  @media screen and (min-width: 768px) {
    width: 400px;
    gap: 24px;
  }

  & div {
    display: flex;
    width: 295px;
    @media screen and (min-width: 768px) {
      width: 365px;
    }
    @media screen and (min-width: 1440px) {
      width: 500px;
    }
  }

  & button {

    padding: 12px 106px;

    border: none;
    color: var(--font-white);
    background-color: var(--accent-color-green);
    font-size: 16px;
    line-height: 1.3px;
    transition: background-color var(--transition-dur-and-func);

    &:hover,
    &:focus {
      cursor: pointer;
      background-color: var(--font-gray);
    }

    @media screen and (min-width: 768px) {
      padding: 20px 173px;
    }
    @media screen and (min-width: 1440px) {
      padding: 23px 52px;
    }
  }

  @media screen and (min-width: 768px) {
    justify-content: left;
    padding-bottom: 120px;
  }

  @media screen and (min-width: 1440px) {
    justify-content: left;
  } */
`;

export const StyledInput = styled(Field)`
    width: 100%;

  /* padding-left: 32px;
  border: 1px solid #fafafa;
  border-radius: 6px;
  background-color: inherit;
  color: var(--font-white);
  height: 45px;

  @media screen and (min-width: 768px) {
    height: 59px;
    width: 100%;
  }

  @media screen and (min-width: 1440px) {
    height: 70px; 
    width: 100%;
  }

  ::placeholder {
    padding-left: 32px;
    color: #bdbdbd;
    font-size: 12px;
    font-weight: 400px;
  }
  :focus {
    background-color: #ffffff;
    border: 1px solid rgba(35, 38, 42, 0.2);
    outline: 0;
  }  */
`;
