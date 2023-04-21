import styled from 'styled-components';
import { Field, Form } from 'formik';

import { ReactComponent as AuthNameIcon } from '../../images/icons/authNameIcon.svg';
import { ReactComponent as AuthEmailIcon } from '../../images/icons/authEmailIcon.svg';
import { ReactComponent as AuthPasswordIcon } from '../../images/icons/authPasswordIcon.svg';

import { ReactComponent as AuthWarningIcon } from '../../images/icons/authWarningIcon.svg';
import { ReactComponent as AuthErrorIcon } from '../../images/icons/authErrorIcon.svg';
import { ReactComponent as AuthSuccessIcon } from '../../images/icons/authSuccessIcon.svg';

export const AuthErrorIconStyled = styled(AuthErrorIcon)`
  position: absolute;
  top: 16px;
  right: 17px;
  width: 14px;
  height: 12px;
  stroke: none;

  fill: ${props => {
    switch (props.status) {
      case 'error':
        return `var(--error)`;
      default:
        return;
    }
  }};

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 18px;
    right: 20px;
    top: 21px;
  }
`;

export const AuthSuccessIconStyled = styled(AuthSuccessIcon)`
  position: absolute;
  top: 16px;
  right: 17px;
  width: 14px;
  height: 12px;
  stroke: none;

  fill: ${props => {
    switch (props.status) {
      case 'correct':
        return `var(--correct)`;
      default:
        return;
    }
  }};

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 18px;
    right: 20px;
    top: 21px;
  }
`;

export const AuthWarningIconStyled = styled(AuthWarningIcon)`
  position: absolute;
  top: 16px;
  right: 17px;
  width: 14px;
  height: 12px;
  stroke: none;

  fill: ${props => {
    switch (props.status) {
      case 'warning':
        return `var(--warning)`;
      default:
        return;
    }
  }};

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 18px;
    right: 20px;
    top: 21px;
  }
`;

export const AuthNameIconStyled = styled(AuthNameIcon)`
  position: absolute;
  top: 16px;
  left: 17px;
  right: 0px;
  width: 14px;
  height: 12px;
  stroke: #fafafa;

  stroke: ${props => {
    switch (props.status) {
      case 'error':
        return `var(--error)`;

      case 'warning':
        return `var(--warning)`;
      case 'correct':
        return `var(--correct)`;

      default:
        return;
    }
  }};

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
  stroke: #fafafa;
  stroke: ${props => {
    switch (props.status) {
      case 'error':
        return `var(--error)`;

      case 'warning':
        return `var(--warning)`;
      case 'correct':
        return `var(--correct)`;

      default:
        return;
    }
  }};
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
  stroke: #fafafa;
  stroke: ${props => {
    switch (props.status) {
      case 'error':
        return `var(--error)`;
      case 'correct':
        return `var(--correct)`;

      default:
        return;
    }
  }};
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
  margin-bottom: 21px;
  @media screen and (min-width: 320px) and (max-width: 767px) {
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
  margin-bottom: 5px;

  border: 1px solid
    ${({ error, touched }) =>
      touched ? (error ? '#E74A3B' : '#3CBC81') : '#afafaf'};
  border-radius: 6px;
  padding-left: 40px;
  padding-right: 40px;
  opacity: 0.8;

  color: ${({ error, touched }) =>
    touched ? (error ? '#E74A3B' : '#3CBC81') : '#fafafa'};

  &:hover,
  &:focus {
    border: 1px solid #ffffff;
  }

  &.error {
    border-color: var(--error);
  }

  &.correct {
    border-color: var(--correct);
  }
  background-color: transparent;
  @media (min-width: 768px) {
    width: 400px;
    height: 59px;
    padding-left: 50px;
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

export const FormWrapper = styled.div``;
