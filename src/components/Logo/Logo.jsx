import React from 'react';
// import { LogoLink } from './Logo.styled';
// import { LogoIcon } from '../Footer/Footer.styled';
import { Link } from 'react-router-dom';
import { HeaderLogo } from './Logo.styled';

const Logo = () => {
  return (
    <Link aria-current="page" to="/main">
      <HeaderLogo>
        {/* {' '}
        <use href="#icon-logo"></use>{' '} */}
      </HeaderLogo>
    </Link>
  );
};

export default Logo;
