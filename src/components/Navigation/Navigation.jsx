import React from 'react';
import { useMediaQuery } from '@mui/material';

import {
  HeaderLink,
  SearchIcon,
  HeaderSearchLinkWrapper,
  HeaderNavLinksWrapper,
} from './Navigation.styled';

const Navigation = ({ onBurgerClose }) => {
  const isMobileDevice = useMediaQuery('(max-width: 1279px)');

  return (
    <nav>
      <HeaderNavLinksWrapper>
        <li>
          <HeaderLink to={`/categories/${'beef'}`} onClick={onBurgerClose}>
            Categories
          </HeaderLink>
        </li>
        <li>
          <HeaderLink to="/add" onClick={onBurgerClose}>
            Add recipes
          </HeaderLink>
        </li>
        <li>
          <HeaderLink to="/my" onClick={onBurgerClose}>
            My recipes
          </HeaderLink>
        </li>
        <li>
          <HeaderLink to="/favourite" onClick={onBurgerClose}>
            Favourite
          </HeaderLink>
        </li>
        <li>
          <HeaderLink to="/shopping-list" onClick={onBurgerClose}>
            Shopping list
          </HeaderLink>
        </li>
        <li>
          <HeaderLink to="/search" onClick={onBurgerClose}>
            {' '}
            <HeaderSearchLinkWrapper>
              <SearchIcon />
              {isMobileDevice && 'Search'}
            </HeaderSearchLinkWrapper>
          </HeaderLink>
        </li>
      </HeaderNavLinksWrapper>
    </nav>
  );
};
export default Navigation;
