import React from 'react';
import Logo from 'components/Logo/Logo';
import Navigation from 'components/Navigation/Navigation';
import ThemeToggler from 'components/ThemeToggler/ThemeToggler';
import { useDispatch, useSelector } from 'react-redux';
import { selectThemeIsLight } from '../../../redux/theme/themeSelectors';
import { toggle } from '../../../redux/theme/themeSlice';

import {
  MobileContainer,
  HeaderLogoWrapper,
  NavBurgerClose,
  NavBurgerCloseIcon,
  ThemeTogglerWrap,
} from './BurgerMenu.styled';

const MobileMenu = ({ isShown, onBurgerClose }) => {
  const dispatch = useDispatch();
  const themeIsLight = useSelector(selectThemeIsLight);
  const onToggleTheme = () => {
    dispatch(toggle());
  }
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
        <ThemeToggler value={!themeIsLight} onToggle={onToggleTheme} />
      </ThemeTogglerWrap>
    </MobileContainer>
  );
};
export default MobileMenu;
