import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import welcomeMobile from '../../images/welcome/welcome-home-bg-mobile@1x.jpg';
import welcomeMobileRetina from '../../images/welcome/welcome-home-bg-mobile@2x.jpg';
import welcomeTablet from '../../images/welcome/welcome-home-bg-tablet@1x.jpg';
import welcomeTabletRetina from '../../images/welcome/welcome-home-bg-tablet@2x.jpg';
import welcomeDesktop from '../../images/welcome/welcome-bg-desktop@1x.jpg';
import welcomeDesktopRetina from '../../images/welcome/welcome-bg-desktop@2x.jpg';

export const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  height: 100vh;
  padding: 0 35px;

  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${welcomeMobile});
  /* background-image: url(${welcomeMobile}); */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${welcomeMobileRetina});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${welcomeTablet});
    padding: 0 131px;

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${welcomeTabletRetina});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${welcomeDesktop});
    padding: 0 450px;

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${welcomeDesktopRetina});
    }
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 44px;
  svg {
    width: 54px;
    height: 54px;
    @media screen and (min-width: 768px) {
      width: 68px;
      height: 68px;
    }
  }
`;

export const WelcomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  text-align: center;
  width: 305px;
  margin: 0 auto;

  font-size: 18px;

  @media screen and (min-width: 768px) {
    width: 505px;
  }
  @media screen and (min-width: 1440px) {
    width: 540px;
  }
`;

export const WelcomeTitle = styled.h1`
  font-weight: 600;
  font-size: 24px;
  line-height: 1;

  letter-spacing: -0.02em;
  max-width: 305px;
  margin: 0 auto 14px;
  color: var(--font-white);

  @media screen and (min-width: 768px) {
    /* max-width: 505px; */
    font-size: 28px;
  }
  @media screen and (min-width: 1440px) {
    /* max-width: 540px; */
  }
`;

export const Text = styled.h1`
  font-weight: 400;

  font-size: 14px;
  line-height: 1, 29;

  letter-spacing: -0.02em;

  margin: 0 auto 44px;
  color: var(--font-white);

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1, 33;
    margin: 0 auto 40px;
  }
  @media screen and (min-width: 1440px) {
    /* max-width: 540px; */
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;

  & :first-child {
    background-color: var(--accent-color-green);

    &:hover,
    &:focus {
      cursor: pointer;
      background-color: var(--font-gray);
    }
  }

  & :last-child {
    border: 1px solid var(--font-white);

    &:hover,
    &:focus {
      cursor: pointer;
      color: var(--accent-color-green);
      border: 1px solid var(--accent-color-green);
    }
  }

  /* &:hover,
  &:focus {
    cursor: pointer;
    background-color: var(--accent-color-black);
  } */

  @media screen and (min-width: 768px) {
    gap: 18px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 14px;
  line-height: 1.5;
  color: var(--font-white);
  text-decoration: none;
  text-align: center;

  padding: 12px 24px;
  /* width: 132px;
  height: 45px; */
  border-radius: 24px 44px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 22px 44px;
  }
  @media screen and (min-width: 1440px) {
    /* max-width: 540px; */
  }
`;
