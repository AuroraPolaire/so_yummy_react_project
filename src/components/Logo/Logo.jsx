import React from 'react';
import { LogoLink } from './Logo.styled';
import { LogoIcon } from '../Footer/Footer.styled';
// import logo from 'images/icons/logo.png';

const Logo = () => {
  return (
    <LogoLink aria-current="page" to="/main">
      <LogoIcon> <use href="#icon-logo"></use> </LogoIcon>
    </LogoLink>
  );
};

export default Logo;
