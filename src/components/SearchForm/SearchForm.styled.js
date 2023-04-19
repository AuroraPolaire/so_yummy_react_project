import styled from 'styled-components';

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const SearchContainer = styled.div`
  position: relative;
  width: 295px;
  @media screen and (min-width: 768px) {
    width: 362px;
  }
  @media screen and (min-width: 1440px) {
    width: 510px;
  }

  & .error {
    position: absolute;
    top: -20px;
    left: 30px;
    font-family: 'Poppins';
    color: red;
    font-size: 14px;
    line-height: 1, 5;
  }
`;

export const SearchValue = styled.input`
  width: 100%;
  height: 53px;
  padding: 0;
  padding-left: 32px;
  border: 1px solid #f0f0f0;
  border-radius: 24px 44px;
  font-size: 12px;
  line-height: 1.5;
  color: #3e4462;
  @media screen and (min-width: 768px) {
    width: 100%;
    height: 57px;
    padding-left: 38px;
    font-size: 14px;
  }
  @media screen and (min-width: 1440px) {
    width: 100%;
    height: 70px;
    padding-left: 48px;
    font-size: 16px;
  }
`;

export const SearchBtn = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: #8baa36;
  color: #fafafa;
  border-radius: 24px 44px;
  border: none;
  padding: 23px 52px;
  font-size: 14px;
  line-height: 1.5;
  &:hover {
    background-color: #22252a;
    transition: all 250ms linear 0s;
  }
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
  }
`;
