import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';

import {
  HeaderSection,
  UserWrapper,
  NavBurger,
  NavBurgerIcon,
} from './Header.styled';

import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserLogo from 'components/Header/UserLogo/UserLogo';

import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
import MobileMenu from './BurgerMenu/BurgerMenu';
import Modal from './Modal/Modal';

const Header = () => {
  const [BurgerMenu, setBurgerMenu] = useState(false);
  const isMobileDevice = useMediaQuery('(max-width: 1439px)');

  const onBurgerOpen = () => {
    setBurgerMenu(true);
  };

  const onBurgerClose = () => {
    setBurgerMenu(false);
  };

  return (
    <header style={{ position: 'absolute', width: '100%' }}>
      {/* <Wrapper> */}
      <HeaderSection>
        <Logo />
        {!isMobileDevice && <Navigation />}
        <UserWrapper>
          <UserLogo />

          <NavBurger onClick={onBurgerOpen}>
            <NavBurgerIcon />
          </NavBurger>
          {!isMobileDevice && <ThemeToggler />}
        </UserWrapper>
        {isMobileDevice && BurgerMenu && (
          <Modal onClose={onBurgerClose}>
            <MobileMenu isShown={BurgerMenu} onBurgerClose={onBurgerClose} />
          </Modal>
        )}
      </HeaderSection>
      {/* </Wrapper> */}
    </header>
  );
};

export default Header;
