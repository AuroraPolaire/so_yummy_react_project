import React from 'react';
import {
  FooterSection,
  Container,
  LogoCapLinkFormWrap,
  LogoCapLinkWrap,
  LogoCapWrap,
  LogoLink,
  LogoTitle,
  LogoIcon,
  AppCapabilitiesList,
  AppCapabilitiesItem,
  FooterLinkWrap,
  FooterLink,
  SubFooter,
  SubFooterText,

} from "./Footer.styled";
// import { SubscribeForm } from '../SubscribeForm/SubscribeForm';
import { FollowUs } from '../FollowUs/FollowUs';

import FooterSharedBg from './FooterSharedBg';

const Footer = () => {
  return (

    <>

      <FooterSharedBg />
      <FooterSection>
        <Container>
          <LogoCapLinkFormWrap>
            <LogoCapLinkWrap>
              <LogoCapWrap>
                <LogoLink to="/main">
                  <LogoIcon>
                    {' '}
                    <use href="#icon-logo"></use>{' '}
                  </LogoIcon>
                  <LogoTitle>So Yummy</LogoTitle>
                </LogoLink>
          </LogoCapWrap>
              <AppCapabilitiesList>
                    <AppCapabilitiesItem>
                      Database of recipes that can be replenished
                    </AppCapabilitiesItem>
                    <AppCapabilitiesItem>
                      Flexible search for desired and unwanted ingredients
                    </AppCapabilitiesItem>
                    <AppCapabilitiesItem>
                      Ability to add your own recipes with photos
                    </AppCapabilitiesItem>
                    <AppCapabilitiesItem>
                      Convenient and easy to use
                    </AppCapabilitiesItem>
                  </AppCapabilitiesList>
              <FooterLinkWrap>
                <li><FooterLink to='/search'>Ingredients</FooterLink></li>
                <li><FooterLink to='/add'>Add recipes</FooterLink></li>
                <li><FooterLink to='/my'>My recipes</FooterLink></li>
                <li><FooterLink to='/favorite'>Favorite</FooterLink></li>
                <li><FooterLink to='/shopping-list'>Shopping list</FooterLink></li>
              </FooterLinkWrap>
            </LogoCapLinkWrap>
          </LogoCapLinkFormWrap>
        </Container>
        {/* <SubscribeForm /> */}
        <FollowUs />
        <SubFooter>
          <Container>
            <SubFooterText>
              <p>© 2023 All Rights Reserved.</p>
              <p>Terms of Service</p>
            </SubFooterText>
          </Container>
        </SubFooter>

      </FooterSection>
    </>
  );
};



export default Footer;
