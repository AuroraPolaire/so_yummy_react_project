import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
import UserLogo from 'components/UserLogo/UserLogo';
import React from 'react';
import { HeaderContainer, HeaderNav } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderNav>
        <Logo />
        <Navigation />
        <UserLogo />
        <ThemeToggler />
      </HeaderNav>
    </HeaderContainer>
  );
};

export default Header;
