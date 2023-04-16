import React from 'react';
import logo from '../../images/icons/footer-logo.svg';
import {
  FooterSection,
  FooterContainer,
  LogoWrapper,
  LogoTitleLink,
  LogoTitle,
  LogoIconLink,
  LogoIcon,
  BenefitsWrapper,
  BenefitsList,
  BenefitsItem,
  FooterLinkWrapper,
  FooterLinkList,
  FooterLinkItem,
  FooterLinkNavigation,
  SubscribeWrapper,
  SubscribeTitle,
  SubscribeText,
  SubFooter,
  SubFooterWrapper,
  SubFooterTextBold,
  SubFooterTextRegular,
  SocialWrapper,
} from "./Footer.styled";
import { SubscribeForm } from '../SubscribeForm/SubscribeForm';
import { FollowUs } from '../FollowUs/FollowUs';

import FooterSharedBg from './FooterSharedBg';

const Footer = () => {
  return (
    <>
    <FooterSection>
      <FooterSharedBg />
        <FooterContainer>
          <div>
          <LogoWrapper>
            <LogoIconLink to="/main">
          <LogoIcon src={logo} alt="logo" />
            </LogoIconLink>
              <LogoTitleLink to="/main">
                <LogoTitle>So Yummy</LogoTitle>
        </LogoTitleLink>
            </LogoWrapper>
                  <BenefitsWrapper>
              <BenefitsList>
                <BenefitsItem>
                  <p>Database of recipes that can be replenished</p>
                </BenefitsItem>
                <BenefitsItem>
                  <p>Flexible search for desired and unwanted ingredients</p>
                </BenefitsItem>
                <BenefitsItem>
                  <p>Ability to add your own recipes with photos</p>
                </BenefitsItem>
                <BenefitsItem>
                  <p>Convenient and easy to use</p>
                </BenefitsItem>
              </BenefitsList>
            </BenefitsWrapper>
            </div>
            <FooterLinkWrapper>
              <FooterLinkList>
                <FooterLinkNavigation to="search?type=ingredients">
                    <FooterLinkItem>
                      Ingredients
                  </FooterLinkItem>
                  </FooterLinkNavigation>
                  <FooterLinkNavigation to="/add">
                    <FooterLinkItem>Add recipes</FooterLinkItem>
                  </FooterLinkNavigation>
                  <FooterLinkNavigation to="/my">
                    <FooterLinkItem>My recipes</FooterLinkItem>
                  </FooterLinkNavigation>
                  <FooterLinkNavigation to="/favourite">
                    <FooterLinkItem>Favorite</FooterLinkItem>
                  </FooterLinkNavigation>
                  <FooterLinkNavigation to="/shopping-list">
                    <FooterLinkItem>Shopping list</FooterLinkItem>
                    </FooterLinkNavigation>
                </FooterLinkList>
          </FooterLinkWrapper>
          {/* <div> */}
          <SubscribeWrapper>
              <SubscribeTitle>Subscribe to our Newsletter</SubscribeTitle>
                <SubscribeText>
                  Subscribe up to our newsletter. Be in touch with latest news
                  and special offers, etc.
                </SubscribeText>
          </SubscribeWrapper>
            <SubscribeForm />
            {/* </div> */}
          </FooterContainer>
          <SocialWrapper>
            <FollowUs />
          </SocialWrapper>
      </FooterSection>
      <SubFooter>
          <SubFooterWrapper>
            <SubFooterTextBold>© 2023 All Rights Reserved.</SubFooterTextBold>
            <SubFooterTextRegular>Terms of Service</SubFooterTextRegular>
          </SubFooterWrapper>
      </SubFooter>
  </>
);
};
export default Footer;