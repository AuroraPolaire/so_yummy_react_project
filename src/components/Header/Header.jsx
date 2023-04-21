import React, { useState } from 'react';
import { useMediaQuery } from '@mui/material';

import {
  HeaderSection,
  UserWrapper,
  NavBurger,
  NavBurgerIcon,
  HeaderWrapper,
} from './Header.styled';

import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import UserLogo from 'components/Header/UserLogo/UserLogo';

import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
import MobileMenu from './BurgerMenu/BurgerMenu';
import Modal from './Modal/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { selectThemeIsLight } from '../../redux/theme/themeSelectors';
import { toggle } from '../../redux/theme/themeSlice';

const Header = () => {
  const dispatch = useDispatch();
  const [BurgerMenu, setBurgerMenu] = useState(false);
  const isMobileDevice = useMediaQuery('(max-width: 1279px)');

  const themeIsLight = useSelector(selectThemeIsLight);
  const onToggleTheme = () => {
    dispatch(toggle());
  };

  const onBurgerOpen = () => {
    setBurgerMenu(true);
  };

  const onBurgerClose = () => {
    setBurgerMenu(false);
  };

  return (
    <header style={{ position: 'absolute', width: '100%' }}>
      <HeaderWrapper>
        <HeaderSection>
          <Logo />
          {!isMobileDevice && <Navigation />}
          <UserWrapper>
            <UserLogo />

            <NavBurger onClick={onBurgerOpen}>
              <NavBurgerIcon />
            </NavBurger>
            {!isMobileDevice && (
              <ThemeToggler value={!themeIsLight} onToggle={onToggleTheme} />
            )}
          </UserWrapper>
          {isMobileDevice && BurgerMenu && (
            <Modal onClose={onBurgerClose}>
              <MobileMenu isShown={BurgerMenu} onBurgerClose={onBurgerClose} />
            </Modal>
          )}
        </HeaderSection>
      </HeaderWrapper>
    </header>
  );
};

export default Header;
