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

import grayBGMobile from '../../images/hero/mobile/bg_mob1x.webp';
import grayBGMobileRetina from '../../images/hero/mobile/bg_mob2x.webp';
import grayBGTablet from '../../images/hero/tablet/bg_gray_tab1x.webp';
import grayBGTabletRetina from '../../images/hero/tablet/bg_gray_tab2x.webp';
import grayBGDesktop from '../../images/hero/desktop/gray_bg_desktop1x.webp';
import grayBGDesktopRetina from '../../images/hero/desktop/gray_bg_desktop2x.webp';

export const HeroBox = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 768px) {
    justify-content: left;
    align-items: left;
  }
`;

export const PositioningBox = styled.div`
  position: relative;
  width: 100%;
`;

export const Title = styled.h1`
  font-size: 60px;
  letter-spacing: -0.005em;
  font-weight: 400;
  text-align: center;
  color: var(--font-gray);
  padding-top: 30px;

  .title-green {
    color: var(--accent-color-green);
  }

  @media screen and (min-width: 768px) {
    text-align: left;
    padding-top: 90px;
    font-size: 72px;
  }
  @media screen and (min-width: 1440px) {
    padding-top: 120px;
    padding-left: 100px;
    font-size: 100px;
  }
`;

export const Description = styled.p`
  text-align: center;
  padding: 14px 50px;
  padding-bottom: 360px;
  line-height: 1.3;
  font-weight: 400px;
  font-size: 14px;

  @media screen and (min-width: 768px) {
    width: 362px;
    text-align: left;
    padding-left: 0;
    padding-bottom: 30px;
  }

  @media screen and (min-width: 1440px) {
    width: 465px;
    font-size: 18px;
    padding-left: 107px;
  }
`;

export const Dish = styled.div`
  position: absolute;
  z-index: -1;
  top: 35%;
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
    transform: translate(3%);
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
    transform: translate(-10%);
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
  top: 0;
  right: 0;
  min-width: 519px;
  min-height: 792px;
  background-image: url(${spinachMobile});
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (min-width: 375px) {
    top: 0;
    right: 0;
  }
  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${spinachMobileRetina});
  }

  @media screen and (min-width: 768px) {
    top: 0;
    right: 0;
    /* right: inherit; */
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
    top: 0;
    right: 0;
    /* transform: translate(23%); */
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
  top: -5%;
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
    top: -10%;
    left: 0;
    min-width: 292px;
    min-height: 315px;
    background-image: url(${spinachBlurTablet});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${spinachBlurTabletRetina});
    }
  }

  @media screen and (min-width: 1440px) {
    top: -10%;
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

export const GrayBG = styled.div`
  position: absolute;
  z-index: -3;
  top: 0;
  right: 0;
  min-width: 519px;
  min-height: 792px;
  background-image: url(${grayBGMobile});
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${grayBGMobileRetina});
  }

  @media screen and (min-width: 768px) {
    top: 0;
    right: 0;
    /* transform: translate(-40%); */
    min-width: 753px;
    min-height: 730px;
    background-image: url(${grayBGTablet});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${grayBGTabletRetina});
    }
  }

  @media screen and (min-width: 1440px) {
    top: 0;
    right: 0;
    /* transform: translate(-10%); */
    min-width: 941px;
    min-height: 912px;
    background-image: url(${grayBGDesktop});
    @media screen and (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${grayBGDesktopRetina});
    }
  } ;
`;
