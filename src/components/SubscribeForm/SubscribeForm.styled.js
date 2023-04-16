import styled from 'styled-components';

import { ReactComponent as EmailIcon } from '../../images/icons/email-icon-for-footer.svg';
import { ReactComponent as ErrorLogo } from '../../images/icons/Error-logo.svg';
import { ReactComponent as SuccessLogo } from '../../images/icons/Success-logo.svg';

export const SubscribeFormWrapper = styled.div`
  align-items: center;
  margin-top: 28px;
  @media screen and (min-width: 1200px) {
  .subscribe {
    margin-left: auto;
  }
}
`;
export const InputForm = styled.form`
display: flex;  
flex-wrap: wrap;
// position: absolute;
// top: 0;
// left: 200px;
// z-index: 1;
  // display: flex;
  // flex-wrap: wrap;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  // width: 100%;
  // height: 38px;
  // margin-bottom: 8px;
  // @media screen and (min-width: 768px) {
  //   margin-top: 72px;
  //   flex-direction: row;
  //   align-items: center;
  //   justify-content: center;
  // }
  // @media screen and (min-width: 1440px) {
  //   display: block;
  //   margin-top: 28px;
  // }
`;
export const InputWrapper = styled.div`
  // position: relative;
  // @media screen and (min-width: 320px) and (max-width: 767px) {
  //   width: 204px;
    margin-bottom: 8px;
    margin-right: 10px;
  }
`;
export const FormFooterInput = styled.input`
  
box-sizing: border-box;
  display: block;
  padding-left: 10px;
  padding-right: 10px;
  width: 204px;
  height: 38px;
  font-size: 10px;
  background-color: ${(props) => {
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
  color: ${(props) => {
    console.log(props.themeName);
  }};
  @media screen and (min-width: 768px) and (min-width: 320px) {
    align-items: center;
    margin: 0 12px 0 0;
}
@media screen and (min-width: 1200px) {
  align-items: end;
    width: 450px;
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
  @media screen and (min-width: 1440px){
    width: 100%;
  }
`;
export const InputBtn = styled.button`
  box-sizing: border-box;
  display: block;
  padding: 0;
  padding-left: 42px;
  padding-right: 42px;
  width: 204px;
  height: 38px;
  font-size: 10px;
  cursor: pointer;
  text-aligh: center;
  font-family: inherit; 
  border: none;
  border-radius: 6px;
  color: #FAFAFA; 
  background-color: #8BAA36;
  font-size: 14px;
  font-weight: 400;
  line-height: 16px;
  transition: color 250ms linear;
   @media screen and (min-width: 768px) {
    font-size: 16px;
    min-width: 171px;
    margin-top: 0;
    margin-left: 12px;
    padding: 16px 50px;
  }
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
  &:hover, &:focus {
    color: #22252A
  }
  :disabled {
    background-color: #2A2C36;
    color: rgba(250, 250, 250, 0.6);
   &:hover:disabled, &:focus:disabled {
      color: initial;
      cursor: not-allowed;
    }
`
export const Error = styled.div`
  position: absolute;
  bottom: -17px;
  right: 50%;
  width: 100%;
  transform: translateX(50%);
  color: #E74A3B;
  font-size: 0.8rem;
  margin-top: 0.5rem;
`;
export const EmailIconStyled = styled(EmailIcon)`
  display: inline-block;
  width: 26px;
  height: 12px;
  left: 14px;
  top: 50%;
  transform: translateY(-50%);
  path {
    stroke: ${props => props.errorformik? '#E74A3B' : '#3CBC81'}
  }
  @media screen and (min-width: 768px) {
    left: 16px;
    width: 22px;
    height: 19px;
  }
`;
export const ResetFormInput = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;
export const ErrorLogoStyled = styled(ErrorLogo)`
    width: 20px;
    transition: transform 0.5s ease;
  &:hover {
    transform: rotate(360deg);
  }
`;
export const SuccessLogoStyled = styled(SuccessLogo)`
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
`;