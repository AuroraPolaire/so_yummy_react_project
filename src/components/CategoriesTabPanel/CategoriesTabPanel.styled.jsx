import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding-bottom: 24px;
  padding-top: 32px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 32px;
    padding-bottom: 40px;
    padding-top: 50px;
    flex-wrap: wrap;

    a {
      width: 47%;
    }
  }
  @media screen and (min-width: 1440px) {
    gap: 100px 14px;
    padding-bottom: 50px;
    padding-top: 50px;
    a {
      width: 24%;
    }
  }
`;
export const RecipesContainer = styled.div`
  min-height: 795px;
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
  }
`;
