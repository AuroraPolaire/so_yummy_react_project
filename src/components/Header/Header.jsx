import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
import UserLogo from 'components/UserLogo/UserLogo';
import React from 'react';
import { HeaderNav } from './Header.styled';
// import PropTypes from 'prop-types'

const Header = () => {
  return (
    <>
      <HeaderNav>
        <Logo />
        <Navigation />
        <UserLogo />
        <ThemeToggler />
      </HeaderNav>
    </>
  );
};

// Header.propTypes = {}

export default Header;
