import React from 'react';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';

import {
  MobileContainer,
  HeaderLogoWrapper,
  NavBurgerClose,
  NavBurgerCloseIcon,
  ThemeTogglerWrap,
} from './BurgerMenu.styled';

const MobileMenu = ({ isShown, onBurgerClose }) => {
  return (
    <MobileContainer isShown={isShown}>
      <HeaderLogoWrapper onClick={onBurgerClose}>
        <Logo onBurgerClose={onBurgerClose} />
      </HeaderLogoWrapper>

      <NavBurgerClose type="button" onClick={onBurgerClose}>
        <NavBurgerCloseIcon />
      </NavBurgerClose>

      <Navigation onBurgerClose={onBurgerClose} />
      <ThemeTogglerWrap>
        <ThemeToggler />
      </ThemeTogglerWrap>
    </MobileContainer>
  );
};
export default MobileMenu;
