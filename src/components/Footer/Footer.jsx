import React from 'react';
import { useDispatch } from 'react-redux';
import logo from '../../images/icons/footer-logo.svg';
import {
  FooterSection,
  Container,
  LogoSection,
  LogoFooterLinksWrapper,
  LogoBenefitsWrapper,
  LogoWrapper,
  LogoLink,
  LogoTitle,
  LogoImg,
  BenefitsList,
  BenefitsItem,
  FooterLinkWrapper,
  FooterLink,
  FooterLinkItem,
  SubscriptionSection,
  SubscriptionWrapper,
  FollowUsSection,
  SubFooter,
  SubFooterText,
  SubFooterTextBold,
  SubFooterTextRegular,
} from './Footer.styled';
import { SubscribeForm } from '../SubscribeForm/SubscribeForm';
import { changeSearchType } from 'redux/search/searchSlice';
import { FollowUs } from '../FollowUs/FollowUs';
import FooterSharedBg from './FooterSharedBg';

const Footer = () => {
  const dispatch = useDispatch();
  const handleFooterLinkClick = () => {
    dispatch(changeSearchType('ingredient'));
    window.scrollTo(0, 0);
  };
  return (
    <footer
      style={{
        position: 'relative',
      }}
    >
      <FooterSharedBg />
      <FooterSection>
        <Container>
          <LogoSection>
            <LogoFooterLinksWrapper>
              <LogoBenefitsWrapper>
                <LogoWrapper>
                  <LogoLink to="/main" onClick={handleFooterLinkClick}>
                    <LogoImg src={logo} alt="logo" width={32} />
                    <LogoTitle>
                      So Yummy
                    </LogoTitle>
                  </LogoLink>
                </LogoWrapper>
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
              </LogoBenefitsWrapper>

              <nav>
                <FooterLinkWrapper>
                  <FooterLinkItem>
                    <FooterLink to="/search" onClick={handleFooterLinkClick}>
                      Ingredients
                    </FooterLink>
                  </FooterLinkItem>
                  <FooterLinkItem>
                    <FooterLink to="/add" onClick={handleFooterLinkClick}>
                      Add recipes
                    </FooterLink>
                  </FooterLinkItem>
                  <FooterLinkItem>
                    <FooterLink to="/my" onClick={handleFooterLinkClick}>
                      My recipes
                    </FooterLink>
                  </FooterLinkItem>
                  <FooterLinkItem>
                    <FooterLink to="/favourite" onClick={handleFooterLinkClick}>
                      Favourite
                    </FooterLink>
                  </FooterLinkItem>
                  <FooterLinkItem>
                    <FooterLink
                      to="/shopping-list"
                      onClick={handleFooterLinkClick}
                    >
                      Shopping list
                    </FooterLink>
                  </FooterLinkItem>
                </FooterLinkWrapper>
              </nav>
            </LogoFooterLinksWrapper>

            <SubscriptionSection>
              <SubscriptionWrapper>
                <h4>Subscribe to our Newsletter</h4>
                <p>
                  Subscribe up to our newsletter. Be in touch with latest news
                  and special offers, etc.
                </p>
              </SubscriptionWrapper>

              <SubscribeForm />
            </SubscriptionSection>
          </LogoSection>

          <FollowUsSection>
            <FollowUs type="footer" />
          </FollowUsSection>
        </Container>
      </FooterSection>

      <SubFooter>
        <Container>
          <SubFooterText>
            <SubFooterTextBold>© 2023 All Rights Reserved.</SubFooterTextBold>
            <SubFooterTextRegular>Terms of Service</SubFooterTextRegular>
          </SubFooterText>
        </Container>
      </SubFooter>
    </footer>
  );
};
export default Footer;
