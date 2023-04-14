import styled from 'styled-components';

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 8px;
  padding-bottom: 72px;

  @media screen and (min-width: 768px) {
    padding-top: 8px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 8px;
    padding-bottom: 90px;
  }
`;

export const Button = styled.button`
  padding: 14px 32px;
  background-color: transparent;
  color: var(--font-gray);
  font-size: 14px;
  font-weight: 400px;
  border-radius: 24px 44px;
  border: 1px solid var(--accent-color-green);
  transition: background-color color var(--transition-dur-and-func);

  :hover,
  :focus {
    color: var(--font-white);
    cursor: pointer;
    background-color: var(--accent-color-green);
  }

  @media screen and (min-width: 768px) {
    padding: 20px 52px;
    font-size: 16px;
  }
`;
