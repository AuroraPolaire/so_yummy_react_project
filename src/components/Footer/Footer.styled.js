import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import bgMobile from "../../images/bg/footerBG_mobile.webp";
import bgMobileRetina from "../../images/bg/footerBG_mobile@2x.webp";
import bgTablet from '../../images/bg/footerBG_Tablet.webp';
import bgTabletRetina from '../../images/bg/footerBG_Tablet@2x.webp';
import bgDesktop from '../../images/bg/footerBG_Desktop.webp';
import bgDesktopRetina from '../../images/bg/footerBG_Desktop@2x.webp';

export const FooterSection = styled.div`
  font-family: 'Poppins';
  position: relative;
  background-color: #22252A;
  padding: 28px 0;
  text-align: left;
  @media screen and (min-width: 768px) {
    padding: 58px 0;
  }
  @media screen and (min-width: 1440px) {
    min-height: auto;
    padding: 64px 0;
  }
`;
export const FooterContainer = styled.div`
  color: #FAFAFA;
  padding: 0 100px; 
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  margin: 0 auto;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: baseline;
  }
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;
export const LogoWrapper = styled.div`
display: flex; 
justify-content: center;
  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    width: 215px;
  }
`;
export const LogoTitleLink = styled(NavLink)`
  align-items: center;
  color: #FAFAFA;
  &:hover {
    color: #8BAA36;
  }
`;
export const LogoTitle = styled.h1`
  font-size: 18px;
  font-weight: 700;
  line-height: 18px;
  letter-spacing: 0.015em;
  color: #FAFAFA;
  margin: 0;
  padding-left: 8px;
  @media screen and (min-width: 768px) {
    font-size: 28px;
    line-height: 28px;
  }
  @media screen and (min-width: 1440px) {
    padding-left: 12px;
  }
`;
export const LogoIconLink = styled(NavLink)`
  align-items: center;
  color: #8BAA36;
  &:hover {
    color: #1E1F28;
  }
`;
export const LogoIcon = styled.img`
  max-width: 32px;
  height: auto;
  @media screen and (min-width: 768px) {
  max-width: 44px;
  }
`;
export const BenefitsWrapper = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
  display: block;  
  width: 380px;
  }
  @media screen and (min-width: 1440px) {
  width: 418px;
  }
`;
export const BenefitsList = styled.ul`
  display: block;
  @media screen and (min-width: 1440px) {
   width: 418px;
  }
`;
export const BenefitsItem = styled.li`
  list-style: disc;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #FAFAFA;
  @media screen and (min-width: 768px) {
  margin-bottom: 10px;
  &:last-child {
      margin-bottom: 0;    
    }
}
  @media screen and (min-width: 1440px) {
    margin-bottom: 12px;
  }
`;
export const FooterLinkWrapper = styled.div`
display: flex;
margin: 0 auto;
justify-content: center;
@media screen and (min-width: 767px) {
  justify-content: center;
}
@media screen and (max-width: 1200px) {
  align-items: flex-end;
  margin-right: 0;
  width: 89px;
}
`;
export const FooterLinkList = styled.ul`
  width: 89px;
  text-align: center;
   @media screen and (min-width: 768px) {
    margin-top: 0;
    text-align: start;
    margin-left: 0 auto;
  }
  @media screen and (min-width: 1440px) {
    margin-left: 0;
  }
`;
export const FooterLinkItem = styled.li`
font-weight: 500;
font-size: 14px;
line-height: 18px;
letter-spacing: -0.02em;
margin-bottom: 14px;
@media screen and (min-width: 768px) {
  margin-bottom: 20px;    
}
@media screen and (min-width: 1440px) {
  margin-bottom: 24px;  
    }
}
`;
export const FooterLinkNavigation = styled(NavLink)`
  color: #FAFAFA;
  transition: color 250ms linear;
  &:hover,
  &:focus {
    color: #8BAA36;
  }
  .active {
    color: #8BAA36;
  }
`;
export const SubscribeWrapper = styled.div`
  display: none;
  position: relative;
  @media screen and (min-width: 1200px) {
    display: block;
    width: 339px;
    justify-content: center;
    margin-bottom: 28px;
  }
`;
export const SocialWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;
export const SubscribeTitle = styled.h3`
  margin-bottom: 14px;
  @media screen and (min-width: 1440px) {
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: #FAFAFA;
  }
`;
export const SubscribeText = styled.p`
  @media screen and (min-width: 1200px) {
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: -0.02em;
  color: #FAFAFA;
  }
`;
export const SubFooter = styled.div`
  padding-top: 28px;
  padding-bottom: 28px;
  background-color: #ECECEC;
  background-image: url('${bgMobile}');
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: 210px 172px;
  @media screen and (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
    background-image: url('${bgMobileRetina}');
  }
   @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
    background-image: url('${bgTablet}');
    background-size: 353px 290px;
    @media screen and (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
      background-image: url('${bgTabletRetina}');
    }
  }
  @media screen and (min-width: 1440px) {
    padding-top: 50px;
    padding-bottom: 50px;
    background-image: url('${bgDesktop}');
    background-size: 424px 348px;
    @media screen and (min-device-pixel-ratio: 2),
            (min-resolution: 192dpi),
            (min-resolution: 2dppx) {
      background-image: url('${bgDesktopRetina}');
    }
  }
`;
export const SubFooterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  p:not(:first-child) {
    margin-left: 14px;
     @media screen and (min-width: 768px) {
      margin-left: 28px;
    }
  }
   @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
export const SubFooterTextBold = styled.p`
  color: #22252A;
  font-weight: 500;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.01em;
  color: #22252A;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 14px;
  }
`;
export const SubFooterTextRegular = styled.p`
  color: #22252A;
  font-weight: 400;
  font-size: 10px;
  line-height: 10px;
  letter-spacing: -0.01em;
  color: #22252A;
  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 14px;
  }
`;
