import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-bottom: 24px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
    padding-bottom: 40px;
  }
  @media screen and (min-width: 1440px) {
    gap: 14px;
    padding-bottom: 50px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: right;
  padding-bottom: 32px;

  @media screen and (min-width: 768px) {
    padding-bottom: 50px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 100px;
  }
`;

export const SeeAllButton = styled.button`
  font-size: 14px;
  font-weight: 400px;
  padding: 10px 24px;
  color: var(--font-white);
  background-color: var(--accent-color-green);
  border-radius: 6px;
  border: 1px solid var(--accent-color-green);
  transition: background-color var(--transition-dur-and-func);

  :hover,
  :focus {
    cursor: pointer;
    background-color: var(--font-gray);
  }
`;
