import styled from 'styled-components';

export const LogoutModalContainerStyled = styled.div`
  padding: 30px 10px;

  @media (min-width: 478px) {
    padding: 50px 50px;
  }
`;
export const LogoutButtonStyled = styled.button`
  border: none;
  background-color: var(--accent-color-green);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--font-white);
  border-radius: 6px;
  font-size: 14px;
  line-height: 21px;
  padding: 14px 18px;
  width: 137px;
  margin-right: 8px;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: var(--font-gray);
  }

  @media (min-width: 478px) {
    width: 192px;
    padding: 18px 39px;
    font-size: 16px;
    line-height: 18px;
  }
`;

export const CancelButtonStyled = styled.button`
  border: none;
  background-color: #d9d9d9;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--header-grey);
  border-radius: 6px;
  line-height: 21px;
  padding: 14px 18px;
  width: 137px;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    border: 1px solid var(--header-grey);
    background-color: var(--font-white);
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
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  letter-spacing: -0.02em;
  margin-bottom: 24px;
  color: var(--header-grey);

  @media (min-width: 478px) {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 32px;
  }
`;
