import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  /* justify-content: space-evenly; */
  padding-bottom: 50px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
  }

  @media screen and (min-width: 1440px) {
    gap: 14px;
  }
`;
