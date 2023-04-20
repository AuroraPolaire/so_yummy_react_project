import styled from 'styled-components';

export const RecipePreparationStyled = styled.div`
  margin-top: 50px;
  margin-bottom: 70px;

  @media screen and (min-width: 768px) {
    margin-top: 96px;
    margin-bottom: 170px;
  }

  h2 {
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 1;
    letter-spacing: -0.24px;
    color: var(--font-darkblue-p);
    margin-bottom: 32px;
  }
`;

export const InstructionsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media screen and (min-width: 768px) {
    gap: 52px;
    justify-content: flex-start;
  }

  @media screen and (min-width: 1440px) {
    flex-direction: row;
    gap: 50px;
  }

  img {
    width: 343px;
    height: 100%;
    border-radius: 8px;
    margin: 0;

    @media screen and (min-width: 768px) {
      width: 433px;
    }
  }
`;

export const StepsListStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;

  @media screen and (min-width: 1440px) {
    width: 67%;
  }
`;

export const StepsStyled = styled.div`
  display: flex;
  gap: 14px;

  p {
    width: 311px;
    display: flex;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: rgba(0, 0, 0, 0.8);

    @media screen and (min-width: 768px) {
      width: 90%;
      font-size: 14px;
      line-height: 1.29;
    }
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 21px;
    height: 21px;
    background: var(--accent-color-green);
    border-radius: 100px;
    font-weight: 600;
    font-size: 12px;
    color: #ffffff;

    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }
`;
