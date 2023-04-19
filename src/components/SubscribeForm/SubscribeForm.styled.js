import styled from 'styled-components';
import { ReactComponent as EmailIcon } from '../../images/icons/email-icon-for-footer.svg';

export const EmailIconStyled = styled(EmailIcon)`
  position: absolute;
  display: inline-block;
  width: 26px;
  height: 12px;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  path {
    stroke: ${props => (props.errorformik ? '#E74A3B' : '#3CBC81')};
  }
  @media screen and (min-width: 768px) {
    left: 16px;
    width: 22px;
    height: 19px;
  }
`;

export const ErrorLogoStyled = styled.svg`
  position: absolute;
  background-color: #22252A;
  width: 20px;
  height: 20px;
  transition: transform 0.5s ease;
  &:hover {
    transform: rotate(360deg);
  }
`;

export const SuccessLogoStyled = styled.svg`
  position: absolute;
  height: 20px;
  width: 20px;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;
export const SubscribeFooterSection = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  @media screen and (min-width: 768px) {
    margin-top: 72px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  @media screen and (min-width: 1440px) {
    display: block;
    margin-top: 28px;
  }
`;
export const InputWrapper = styled.div`
  position: relative;
  @media screen and (min-width: 320px) and (max-width: 767px) {
    width: 204px;
    margin: 0 auto;
  }
`;
export const FormInput = styled.input`
  box-sizing: border-box;
  text-overflow: ellipsis;
  display: block;
  margin: 0 auto;
  padding: 0;
  padding-left: 42px;
  padding-right: 42px;
  width: 204px;
  height: 38px;
  font-size: 10px;
  background-color: ${props => {
    if (props.themeName === 'dark') {
      return 'white';
    }
    return 'transparent';
  }};
  background-repeat: no-repeat;
  background-position: 15px 13px;
  background-size: 16px 12px;
  color: ${({ error, touched }) =>
    touched ? (error ? '#E74A3B' : '#3CBC81') : '#3CBC81'};
  border-radius: 6px;
  border: 1px solid
    ${({ error, touched }) =>
    touched ? (error ? '#E74A3B' : '#3CBC81') : '#3CBC81'};
  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
  &::placeholder {
    font-size: 10px;
    font-weight: 400;
    color: ${({ error, touched }) =>
    touched ? (error ? '#E74A3B' : '#3CBC81') : '#3CBC81'};
    opacity: 1;
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
    @media screen and (min-width: 1440px) {
      font-size: 18px;
    }
  }
  @media screen and (min-width: 768px) {
    margin: 0;
    padding-left: 51px;
    width: 259px;
    height: 50px;
    background-position: 15px 12px;
    background-size: 20px 16px;
    background-position: 18px 15px;
  }
  @media screen and (min-width: 1440px) {
    width: 100%;
  }
`;
export const ResetFormInput = styled.button`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;
export const Error = styled.div`
  position: absolute;
  bottom: -17px;
  right: 50%;
  width: 100%;
  transform: translateX(50%);
  color: #e74a3b;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;
export const FormBtn = styled.button`
  display: block;
  color: #FAFAFA;
  margin: 0 auto;
  margin-top: 15px;
  padding: 11px 71px;
  font-size: 12px;
  background-color:${props => props.theme.mode === "light" ? "var(--accent-color-green)" : "var(--body-color-dark)"};
  border-radius: 6px;
  transition: color 250ms linear;
  @media screen and (min-width: 768px) {
    margin-top: 8px;
  }
  &:hover,
  &:focus {
    color: #22252A;
  }
  :disabled {
    background-color: #2A2C36;
    color: rgba(250, 250, 250, 0.6);
    &:hover:disabled,
    &:focus:disabled {
      color: initial;
      cursor: not-allowed;
    }
  }
  @media screen and (min-width: 768px) {
    margin-top: 0;
    margin: 0;
    margin-left: 12px;
    padding: 16px 50px;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 0;
    margin-top: 16px;
    width: 100%;
  }
`;