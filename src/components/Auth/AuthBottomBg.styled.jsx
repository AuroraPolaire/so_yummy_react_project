import styled from 'styled-components';

import authBottomMobile from '../../images/auth/auth-bg-bottom-mobile@1x.webp';
import authBottomMobileRetina from '../../images/auth/auth-bg-bottom-mobile@2x.webp';
import authBottomTablet from '../../images/auth/auth-bg-bottom-tablet@1x.webp';
import authBottomTabletRetina from '../../images/auth/auth-bg-bottom-tablet@2x.webp';
import authBottomDesktop from '../../images/auth/auth-bg-bottom-desktop@1x.webp';
import authBottomDesktopRetina from '../../images/auth/auth-bg-bottom-desktop@2x.webp';

export const AuthSharedBottomBg = styled.div`
background-image: url(${authBottomMobile});
/* z-index: 100;
    width: 100%; */

/* background-repeat: no-repeat; */
/* position: absolute; */
/* background-size: cover; */
/* background-position: 0px 0px bottom center; */
/* bottom: 0; */
/* background-position: bottom center; */
position: absolute;
bottom: 0;
/* top: -210px; */
left: 0;
background-size: cover;
background-position: top left;

background-repeat: no-repeat;

width: 100%;
height: 325px;
z-index: -100;

@media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${authBottomMobileRetina});
  }
  @media (min-width: 768px) {
    background-image: url(${authBottomTablet});
    /* text-align: start;
    background-size: 65px auto, 580px auto;
    background-position: 0px 0px, top right; */
    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${authBottomTabletRetina});
    }
    @media (min-width: 1440px) {
      background-image: url(${authBottomDesktop});
      /* background-size: 100px auto, 907px auto;
      background-position: 0px 0px, top right; */
      @media (min-device-pixel-ratio: 2),
        (min-resolution: 192dpi),
        (min-resolution: 2dppx) {
        background-image: url(${authBottomDesktopRetina});
      }
    }
  }
`