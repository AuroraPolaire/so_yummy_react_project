import styled from 'styled-components';

export const RecipeHeroBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    text-align: center;
    font-size: 24px;
    font-weight: 600;
    color: var(--accent-color-green);
    padding-bottom: 24px;
    padding-top: 30px;
    letter-spacing: -0.02em;

    @media screen and (min-width: 768px) {
      font-size: 44px;
      padding-top: 0px;
    }
  }

  & p {
    /* width: 300px; */
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: -0.02em;
    color: var(--font-gray);
    padding-bottom: 24px;
    @media screen and (min-width: 768px) {
    }
    @media screen and (min-width: 1440px) {
    }
  }

  & button {
    padding: 10px 18px;
    font-size: 10px;
    font-weight: 400px;
    color: var(--font-gray);
    border-radius: 24px 44px;
    border: 1px solid var(--accent-color-green);
    background-color: transparent;
  }

  & div {
    display: flex;
    align-items: baseline;
    justify-content: center;
    padding-top: 42px;
    padding-bottom: 90px;
  }

  & div > p {
    display: inline-block;
  }

  & div > svg {
    width: 16px;
    height: 12px;
    padding-right: 4px;
  }
`;
