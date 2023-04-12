import React from 'react';
import { StyledLink } from './WelcomePage.styled';
import { Wrapper } from 'components/theme/GlobalContainer';
import { ReactComponent as Logo } from '../../images/icons/logo-header.svg';

const WelcomePage = () => {
  return (
    <Wrapper>
      <div>
        <Logo />
      </div>
      <h1>Welcome to the app!</h1>
      <h3>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </h3>
      <div>
        <StyledLink to="/register">Register</StyledLink>
        <StyledLink to="/login">Sign In</StyledLink>
      </div>
    </Wrapper>
  );
};

export default WelcomePage;
