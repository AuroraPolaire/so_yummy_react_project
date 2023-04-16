import styled from 'styled-components';

import recipeHero from '../../images/recipe_hero/recipe_hero_bg1x.webp';
import recipeHeroRetina from '../../images/recipe_hero/recipe_hero_bg2x.webp';

export const RecipeBackground = styled.div`
  width: 100%;
  background-image: url(${recipeHero});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${recipeHeroRetina});
  }

  @media screen and (min-width: 768px) {
    /* background-position: top; */
  } ;
`;

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
    max-width: 299px;
    text-align: center;
    font-size: 12px;
    font-weight: 400;
    line-height: 1.3;
    letter-spacing: -0.02em;
    color: var(--font-gray);
    padding-bottom: 24px;
    @media screen and (min-width: 767px) {
      max-width: 506px;
    }
    @media screen and (min-width: 1440px) {
      max-width: 656px;
      padding-bottom: 30px;
    }
  }

  & button {
    padding: 10px 18px;
    font-size: 10px;
    font-weight: 400px;
    border-radius: 24px 44px;
    border: 1px solid var(--accent-color-green);

    @media screen and (min-width: 768px) {
      padding: 18px 44px;
      font-size: 16px;
    }

    /* background-color: transparent; */
    /* transition: background-color var(--transition-dur-and-func); */

    /* :hover,
    :focus {
      color: var(--font-white);
      cursor: pointer;
      background-color: var(--accent-color-green);
    }

    @media screen and (min-width: 768px) {
      padding: 18px 44px;
      font-size: 16px;
    } */
  }

  & .favourite {
    color: var(--font-white);
    background-color: var(--accent-color-green);
    transition: background-color var(--transition-dur-and-func);

    :hover {
      color: var(--font-gray);
      cursor: pointer;
      background-color: transparent;
    }
  }

  & .not-favourite {
    color: var(--font-gray);
    background-color: transparent;
    transition: background-color var(--transition-dur-and-func);

    :hover {
      color: var(--font-white);
      cursor: pointer;
      background-color: var(--accent-color-green);
    }
  }

  & div {
    display: flex;
    align-items: baseline;
    justify-content: center;
    padding-top: 42px;

    @media screen and (min-width: 768px) {
      padding-top: 48px;
      padding-bottom: 32px;
    }
  }

  & div > p {
    display: inline-block;
    padding-bottom: 0;
  }

  & div > svg {
    width: 16px;
    height: 12px;
    padding-right: 4px;
  }
`;
