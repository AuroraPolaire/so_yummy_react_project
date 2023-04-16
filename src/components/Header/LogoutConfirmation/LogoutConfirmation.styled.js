import styled from 'styled-components';

export const LogoutModalContainerStyled = styled.div`
  padding: 30px 10px;
  @media (min-width: 478px) {
    padding: 50px 50px;
  }
`;
export const LogoutButtonStyled = styled.button`
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
  padding: 14px 18px;
  width: 137px;
  margin-right: 8px;
  transition-property: color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #d3d3d3;
  }
  @media (min-width: 478px) {
    width: 192px;
    padding: 18px 39px;
    font-size: 16px;
    line-height: 18px;
  }
`;
export const CancelButtonStyled = styled.button`
  font-family: 'Poppins';
  border: none;
  background-color: #d9d9d9;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #23262a;
  border-radius: 6px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  padding: 14px 18px;
  width: 137px;
  transition-property: color;
  transition-duration: 500ms;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    color: #8baa36;
  }
  @media (min-width: 478px) {
    width: 192px;
    padding: 18px 39px;
    font-size: 16px;
    line-height: 18px;
  }
`;
export const ButtonsContainerStyled = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoutModalText = styled.p`
  margin: 0;
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
  color: #23262a;
  @media (min-width: 478px) {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 32px;
  }
`;
