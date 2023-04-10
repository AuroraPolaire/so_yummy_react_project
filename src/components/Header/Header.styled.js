import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
import UserLogo from 'components/UserLogo/UserLogo';
import React from 'react';
// import PropTypes from 'prop-types'

const Header = props => {
  return (
    <div>
      <Logo />
      <Navigation />
      <UserLogo />
      <ThemeToggler />
    </div>
  );
};

// Header.propTypes = {}

export default Header;
