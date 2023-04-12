import styled from 'styled-components';

import dishMobile from '../../images/hero/mobile/dish_mob1x.webp';
import dishMobileRetina from '../../images/hero/mobile/dish_mob2x.webp';
import dishTablet from '../../images/hero/tablet/dish_tab1x.webp';
import dishTabletRetina from '../../images/hero/tablet/dish_tab2x.webp';
import dishDesktop from '../../images/hero/desktop/dish_desktop1x.webp';
import dishDesktopRetina from '../../images/hero/desktop/dish_desktop2x.webp';

import spinachMobile from '../../images/hero/mobile/spinach_mob1x.webp';
import spinachMobileRetina from '../../images/hero/mobile/spinach_mob2x.webp';
import spinachTablet from '../../images/hero/tablet/spinach_tab1x.webp';
import spinachTabletRetina from '../../images/hero/tablet/spinach_tab2x.webp';
import spinachDesktop from '../../images/hero/desktop/spinach-desktop1x.webp';
import spinachDesktopRetina from '../../images/hero/desktop/spinach-desktop2x.webp';

import spinachBlurMobile from '../../images/hero/mobile/spinach_blur_mob1x.webp';
import spinachBlurMobileRetina from '../../images/hero/mobile/spinach_blur_mob2x.webp';
import spinachBlurTablet from '../../images/hero/tablet/spinach_blur_tab1x.webp';
import spinachBlurTabletRetina from '../../images/hero/tablet/spinach_blur_tab2x.webp';
import spinachBlurDesktop from '../../images/hero/desktop/spinach_blur_desktop1x.webp';
import spinachBlurDesktopRetina from '../../images/hero/desktop/spinach_blur_desktop2x.webp';

export const HeroBox = styled.div`
  position: relative;
  height: 800px;
`;

export const Title = styled.h1`
  font-size: 60px;
  letter-spacing: -0.005em;
  font-weight: thin;
  text-align: center;
  color: var(--font-gray);
  padding-top: 70px;

  .title-green {
    color: var(--accent-color-green);
  }
`;

export const Description = styled.p`
  text-align: center;
  padding: 14px 50px; ;
`;

export const Dish = styled.div`
  position: absolute;
  z-index: -1;
  top: 45%;
  left: 50%;
  transform: translate(-50%);
  min-width: 320px;
  min-height: 296px;
  background-image: url(${dishMobile});
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${dishMobileRetina});
  }

  @media screen and (min-width: 768px) {
    top: 8%;
    transform: translate(-30%);
    min-width: 378px;
    min-height: 351px;
    background-image: url(${dishTablet});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${dishTabletRetina});
    }
  }

  @media screen and (min-width: 1440px) {
    top: 0;
    transform: translate(10%);
    min-width: 578px;
    min-height: 539px;
    background-image: url(${dishDesktop});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${dishDesktopRetina});
    }
  } ;
`;

export const Spinach = styled.div`
  position: absolute;
  z-index: -2;
  top: 3%;
  left: 3%;
  min-width: 519px;
  min-height: 792px;
  background-image: url(${spinachMobile});
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${spinachMobileRetina});
  }

  @media screen and (min-width: 768px) {
    top: -10%;
    right: 0;
    transform: translate(5%);
    min-width: 500px;
    min-height: 700px;
    background-image: url(${spinachTablet});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${spinachTabletRetina});
    }
  }

  @media screen and (min-width: 1440px) {
    top: -30%;
    right: -10%;
    transform: translate(30%);
    min-width: 676px;
    min-height: 944px;
    background-image: url(${spinachDesktop});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${spinachDesktopRetina});
    }
  } ;
`;

export const SpinachBlur = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  min-width: 171px;
  min-height: 184px;
  background-image: url(${spinachBlurMobile});
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${spinachBlurMobileRetina});
  }

  @media screen and (min-width: 768px) {
    top: 0;
    left: 0;
    transform: translate(5%);
    min-width: 292;
    min-height: 315;
    background-image: url(${spinachBlurTablet});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${spinachBlurTabletRetina});
    }
  }

  @media screen and (min-width: 1440px) {
    top: -20%;
    right: 0;
    transform: translate(0);
    min-width: 4386px;
    min-height: 474px;
    background-image: url(${spinachBlurDesktop});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${spinachBlurDesktopRetina});
    }
  } ;
`;
