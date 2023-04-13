import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';

import { Wrapper } from 'components/theme/GlobalContainer';
import {
  HeaderSection,
  UserWrapper,
  NavBurger,
  NavBurgerIcon,
} from './Header.styled';

import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserLogo from 'components/UserLogo/UserLogo';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
import MobileMenu from './BurgerMenu/BurgerMenu';

const Header = () => {
  const [BurgerMenu, setBurgerMenu] = useState(false);
  const isMobileDevice = useMediaQuery('(max-width: 1199px)');

  const onBurgerOpen = () => {
    setBurgerMenu(true);
  };

  const onBurgerClose = () => {
    setBurgerMenu(false);
  };

  return (
    <Wrapper>
      <HeaderSection>
        <Logo />
        {!isMobileDevice && <Navigation />}
        <UserWrapper>
          <UserLogo />
          {!isMobileDevice && <ThemeToggler />}
          <NavBurger onClick={onBurgerOpen}>
            <NavBurgerIcon />
          </NavBurger>
        </UserWrapper>
        {isMobileDevice && BurgerMenu && (
          // <Modal onClose={onBurgerClose}>
          <MobileMenu onBurgerClose={onBurgerClose} />
          // </Modal>
        )}
      </HeaderSection>
    </Wrapper>
  );
};

export default Header;
