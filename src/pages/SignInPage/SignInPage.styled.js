import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import authBgMobile from '../../images/auth/auth-bg-bottom-mobile@1x.webp';
import authBgMobileRetina from '../../images/auth/auth-bg-bottom-mobile@2x.webp';
import authBgTablet from '../../images/auth/auth-bg-bottom-tablet@1x.webp';
import authBgTabletRetina from '../../images/auth/auth-bg-bottom-tablet@2x.webp';
import authBgDesktop from '../../images/auth/auth-bg-bottom-desktop@1x.webp';
import authBgDesktopRetina from '../../images/auth/auth-bg-bottom-desktop@2x.webp';

import Picture from '../../images/icons/auth-bg-orderfood.svg';
import PictureBlackLegs from '../../images/icons/auth-bg-orderfoodblacklegs.svg';

export const BackgroundContainer = styled.div`

`;


export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  text-decoration: none;
  /* min-height: 100%;
  max-height: fit-content;
  width: 100%; */
  /* background-size: 100% 490px; */
  /* background-position: bottom center; */
  /* height: 100vh; */
  /* padding: 0 35px; */
  /* background-attachment: fixed; */
  height: 100vh;
  width: 100vw;

  background-image: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6) 58.58%,
      rgba(0, 0, 0, 0.345172) 78.98%,
      rgba(0, 0, 0, 0) 100%
    ),
    url(${Picture}), url(${authBgMobile});

  background-repeat: no-repeat;
  background-size: 285px, 100% 490px;
  background-position: center 87px, 100% 100%;
  padding-top: 305px;

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${Picture}), url(${authBgMobileRetina});
  }

  @media screen and (min-width: 768px) {
    background-image: url(${PictureBlackLegs}), url(${authBgTablet});
    background-size: 409px, 100% 606px;
    background-position: center 98px, 100% 100%;
    padding-top: 443px;

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${PictureBlackLegs}), url(${authBgTabletRetina});
    }
  }

  @media screen and (min-width: 1440px) {
    background-image: url(${Picture}), url(${authBgDesktop});
    background-size: 532px, 100% 325px;
    background-position: 113px 115px, 100% 100%;
    display: flex;
    justify-content: flex-end;
    padding-top: 122px;
    padding-right: 180px;

    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${Picture}), url(${authBgDesktopRetina});
    }
  }
`;

export const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  text-align: center;
  /* width: 335px; */
  margin: 0 auto;
  width: 315px;
  /* height: 350px; */
  @media screen and (min-width: 768px) {
    width: 500px;
    /* height: 500px; */
  }
  @media screen and (min-width: 1440px) {
    width: 500px;
    /* height: 484px; */
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 335px;
  height: 315px;
  margin-bottom: 18px;
  padding: 32px 28px 40px;
  background: #2a2c36;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 30px;

  @media screen and (min-width: 768px) {
    width: 500px;
    height: 419px;
  }

  @media screen and (min-width: 1440px) {
    /* width: 500px;
    height: 484px; */
  }
`;

export const FormTitle = styled.h2`
  margin-bottom: 50px;
  font-weight: 600;
  font-size: 24px;
  line-height: 1.17;
  letter-spacing: -0.02em;

  color: var(--font-white);

  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 1.07;
    margin-bottom: 32px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 14px;
  line-height: 1.5;
  color: var(--font-white);
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;