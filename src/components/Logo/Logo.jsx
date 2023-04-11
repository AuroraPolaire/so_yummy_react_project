import React from 'react';
import { LogoLink, LogoImg } from './Logo.styled';
import logo from 'images/icons/logo.png';

const Logo = () => {
  return (
    <LogoLink aria-current="page" to="/main">
      <LogoImg src={logo} />
    </LogoLink>
  );
};

export default Logo;
