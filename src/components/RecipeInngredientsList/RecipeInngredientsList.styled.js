import styled from 'styled-components';

export const RecipeIngredientsContainer = styled.div`
  padding-top: 50px;
`;

export const RecipeInngredientsHead = styled.div`
  margin-bottom: 24px;
  max-width: 343px;
  padding: 12px 14px;
  display: flex;
  gap: 18px;
  color: #fafafa;
  font-weight: 600;
  font-size: 10px;
  line-height: 1, 5;
  background-color: #8baa36;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    margin-bottom: 32px;
    max-width: 704px;
    padding: 21px 32px;
    font-size: 18px;
    gap: 38px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 50px;
    max-width: 1240px;
    padding: 21px 40px;
    gap: 109px;
  }

  p:first-of-type {
    margin-right: auto;
  }
`;
export const RecipeInngredientsListStyled = styled.ul`
  li:not(:last-child) {
    margin-bottom: 16px;
    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  }
`;

export const RecipeInngredientsItem = styled.li`
  display: flex;
  align-items: center;
  max-width: 343px;
  padding: 10px;
  font-size: 12px;
  font-weight: 500;
  background: #ebf3d4;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    max-width: 704px;
    padding: 16px 24px;
    font-size: 24px;
  }
  @media screen and (min-width: 1440px) {
    max-width: 1240px;
    padding: 0px 70px 0px 32px;
  }

  img {
    width: 65px;
    height: 100%;
    margin: 0px 8px 0px 0px;
    border-radius: 8px;
    @media screen and (min-width: 768px) {
      width: 144px;
      margin-right: 24px;
    }
    @media screen and (min-width: 1440px) {
      width: 180px;
      margin-right: 40px;
    }
  }

  /* input[type='checkbox'] {
    width: 18px;
    height: 18px;
    @media screen and (min-width: 768px) {
      width: 35px;
      height: 35px;
    }
  } */

  p:nth-child(2) {
    margin-right: auto;
  }
`;

export const Measure = styled.p`
  margin-right: 28px;
  padding: 4px;
  background-color: #8baa36;
  color: #fafafa;
  font-size: 10px;
  line-height: 1, 5;
  font-weight: 600;
  border-radius: 4px;
  @media screen and (min-width: 768px) {
    padding: 4px 8px;
    font-size: 18px;
    margin-right: 78px;
  }
  @media screen and (min-width: 1440px) {
    margin-right: 151px;
  }
`;
