import styled from 'styled-components';

export const EditUserForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const EditUserlFileLabel = styled.label`
  position: absolute;
  top: 102px;
  left: 172px;
  color: #23262a;
  cursor: pointer;
  width: 24px;
  height: 24px;
  border-radius: 50px;
  border: none;
  background-color: #8baa36;
  padding: 0;
  position: absolute;
  right: 215px;
  top: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  @media (min-width: 478px) {
    top: 136px;
    left: 280px;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const EditUserInput = styled.input`
  display: none;
`;

export const EditUserNameLabel = styled.label`
  position: relative;
  svg {
    position: absolute;
    top: 15px;
    left: 15px;
    right: 0px;
    width: 18px;
    height: 18px;
    color:${props => props.theme.mode === "light" ? "var(--body-color-dark)" : "var(--body-color-light)"};
    @media (min-width: 478px) {
      width: 24px;
      height: 24px;
      left: 19px;
      top: 17px;
    }

    &:last-of-type {
      left: 251px;
      top: 15px;
      @media (min-width: 478px) {
        top: 20px;
        left: 363px;
        width: 19px;
        height: 19px;
      }
    }
  }
  & .error {
    position: absolute;
    top: -20px;
    left: 50px;
    font-family: 'Poppins';
    color: red;
    font-size: 14px;
    line-height: 1, 5;
  }
`;

export const EditUserNameInput = styled.input`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.02em;
  outline: none;
  width: 282px;
  height: 48px;
  border: 1px solid #afafaf;
  border-radius: 4px;
  padding-left: 39px;
  padding-right: 42px;
  opacity: 0.8;
  margin-bottom: 24px;
  color: #23262a;
  color:${props => props.theme.mode === "light" ? "var(--font-gray)" : "var(--font-white)"};
  background-color:${props => props.theme.mode === "light" ? "var(--body-color-light)" : "var(--body-color-dark)"};
  @media (min-width: 478px) {
    width: 400px;
    height: 58px;
    padding-left: 51px;
    margin-bottom: 32px;
    font-size: 18px;
    line-height: 27px;
  }
`;

export const EditSubmitButton = styled.button`
  padding-top: 14px;
  padding-bottom: 14px;
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
  font-size: 14px;
  line-height: 21px;
  width: 282px;
  &:hover {
    color: #d3d3d3;
  }
  @media (min-width: 478px) {
    padding-top: 18px;
    padding-bottom: 18px;
    font-size: 16px;
    line-height: 18px;
    width: 400px;
  }
`;
