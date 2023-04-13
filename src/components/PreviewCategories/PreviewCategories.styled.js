import styled from 'styled-components';

export const RecipeBlock = styled.div`
  display: flex;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding-bottom: 50px;

  @media screen and (min-width: 768px) {
    /* flex-basis: calc((100% - 4 * 14px) / 2); */
    flex-direction: row;
    gap: 32px;
  }
  /* @media screen and (min-width: 1000px) and (max-width: 1440px) {
    flex-basis: calc((100% - 4 * 14px) / 2);
    flex-wrap: wrap;
    /* flex-direction: row; */
  /* } */

  @media screen and (min-width: 1440px) {
    gap: 14px;
  }
`;
