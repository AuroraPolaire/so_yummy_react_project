import styled from 'styled-components';
import recipeNotFoundImgTabletDesktop from '../../images/bg/recipe-not-found-tablet-desktop.webp';
import recipeNotFoundImgTabletDesktopRetina from '../../images/bg/recipe-not-found-tablet-desktop-2x.webp';
import recipeNotFoundImgMobile from '../../images/bg/recipe-not-found-mobile.webp';
import recipeNotFoundImgMobileRetina from '../../images/bg/recipe-not-found-mobile-2x.webp';

export const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
`;
export const RecipesList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 99;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media screen and (min-width: 1440px) {
    gap: 14px;
  }
`;
export const RecipeNotFoundImage = styled.div`
  background-image: url(${recipeNotFoundImgMobile});
  width: 208px;
  height: 133px;
  background-size: cover;
  margin: 0 auto;
  @media screen and (min-device-pixel-ratio: 2) and (min-resolution: 192dpi) and (min-resolution: 2dppx) {
    background-image: url(${recipeNotFoundImgMobileRetina});
  }
  @media screen and (min-width: 768px) {
    background-image: url(${recipeNotFoundImgTabletDesktop});
    width: 350px;
    height: 225px;
    @media (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
      background-image: url(${recipeNotFoundImgTabletDesktopRetina});
    }
  }
`;
export const RecipeNotFoundText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.02em;
  text-align: center;
  margin-top: 24px;
  margin-bottom: 100px;
  color:${props => props.theme.mode === "light" ? "#000000" : "var(--font-white)"};
  opacity: 0.5;
  @media screen and (min-width: 768px) {
    font-size: 24px;
    margin-top: 32px;
    margin-bottom: 200px;
  }
`;