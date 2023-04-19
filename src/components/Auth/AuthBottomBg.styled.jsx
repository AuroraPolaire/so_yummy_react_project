import styled from 'styled-components';

import authBottomMobile from '../../images/auth/auth-bg-bottom-mobile@1x.webp';
import authBottomMobileRetina from '../../images/auth/auth-bg-bottom-mobile@2x.webp';
import authBottomTablet from '../../images/auth/auth-bg-bottom-tablet@1x.webp';
import authBottomTabletRetina from '../../images/auth/auth-bg-bottom-tablet@2x.webp';
import authBottomDesktop from '../../images/auth/auth-bg-bottom-desktop@1x.webp';
import authBottomDesktopRetina from '../../images/auth/auth-bg-bottom-desktop@2x.webp';




// Old doesn't work properly

export const AuthSharedBottomBg = styled.div`
  background-image: url(${authBottomMobile});
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 322px;
  width: 100%;
  height: 375px;
  z-index: -1000;
  transform: translateY(-15px);

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${authBottomMobileRetina});
  }
  @media (min-width: 768px) {
    background-image: url(${authBottomTablet});
    height: 606px;
    padding-top: 418px;
    transform: translateY(-36px);

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${authBottomTabletRetina});
    }

    @media (min-width: 1440px) {
      background-image: url(${authBottomDesktop});
      height: 444px;
      padding-top: 418px;
      transform: translateY(-186px);
      background-position: bottom;
      background-size: 100% 444px;

      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${authBottomDesktopRetina});
      }
    }
  }
`;
