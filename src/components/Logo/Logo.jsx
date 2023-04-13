import React from 'react';

import { Link } from 'react-router-dom';
import { HeaderLogo } from './Logo.styled';

const Logo = () => {
  return (
    <Link aria-current="page" to="/main">
      <HeaderLogo></HeaderLogo>
    </Link>
  );
};

export default Logo;
