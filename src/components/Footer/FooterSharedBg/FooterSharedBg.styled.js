import styled from 'styled-components';

import bgSharedMobile from '../../../images/bg/footerSharedDB_Mobile.webp';
import bgSharedMobileRetina from '../../../images/bg/footerSharedDB_Mobile@2x.webp'
import bgSharebTablet from '../../../images/bg/footerSharedDB_Tablet.webp'
import bgSharebTabletRetina from '../../../images/bg/footerSharedDB_Tablet@2x.webp'
import bgSharedDesktop from '../../../images/bg/footerSharedDB_Desktop.webp';
import bgSharedDesktopRetina from '../../../images/bg/footerSharedDB_Desktop@2x.webp';

export const SharedBackground = styled.div`
  position: absolute;

    top: -210px;
    left: 0;
    background-size: cover;
    background-position: top left;
    background-image: url('${bgSharedMobile}');
    background-repeat: no-repeat;

    width: 256px;
    height: 392px;
    z-index: -1;
    @media screen and (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
      background-image: url('${bgSharedMobileRetina}');
    }
     @media screen and (min-width: 768px) {
      background-image: url('${bgSharebTablet}');
      top: -370px;
      width: 423px;
      height: 646px;

      @media screen and (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
      background-image: url('${bgSharebTabletRetina}');
    }
    }
    @media screen and (min-width: 1440px) {
      background-image: url('${bgSharedDesktop}');
      top: -440px;
      width: 558px;
      height: 852px;
      @media screen and (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
      background-image: url('${bgSharedDesktopRetina}');
    }
  }


`
