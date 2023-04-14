import React from 'react';
// import { StyledLink } from './WelcomePage.styled';
import { Wrapper } from 'components/theme/GlobalContainer';
import { ReactComponent as Logo } from '../../images/icons/logo-header.svg';
import {
  Section,
  StyledLink,
  LogoContainer,
  WelcomeContainer,
  ButtonContainer,
  WelcomeTitle,
  Text,
} from './WelcomePage.styled';

const WelcomePage = () => {
  return (
    <Section>
      <Wrapper>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <WelcomeContainer>
          <WelcomeTitle>Welcome to the app!</WelcomeTitle>
          <Text>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </Text>
        </WelcomeContainer>
        <ButtonContainer>
          <StyledLink to="/register" name="register">Registration</StyledLink>
          <StyledLink to="/login" name="signIn">Sign In</StyledLink>
        </ButtonContainer>
      </Wrapper>
    </Section>
  );
};

export default WelcomePage;
