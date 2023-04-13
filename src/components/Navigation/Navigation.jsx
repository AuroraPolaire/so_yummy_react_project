import React from 'react';
import { useMediaQuery } from '@mui/material';

import {
  HeaderLink,
  SearchIcon,
  HeaderSearchLinkWrapper,
  HeaderNavLinksWrapper,
} from './Navigation.styled';

const Navigation = ({ onBurgerClose }) => {
  const isMobileDevice = useMediaQuery('(max-width: 1199px)');
  return (
    <nav>
      <HeaderNavLinksWrapper>
        <li>
          <HeaderLink to="/categories/:categoryName" onClick={onBurgerClose}>
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

// const Navigation = props => {
//   return (
//     <nav>
//       <NavLink to="/categories/:categoryName">Categories</NavLink>
//       <NavLink to="/add">Add recipes</NavLink>
//       <NavLink to="/my">My recipes</NavLink>
//       <NavLink to="/favourite">Favourite</NavLink>
//       <NavLink to="/shopping-list">Shopping list</NavLink>
//       <NavLink to="/search">SearchIcon</NavLink>
//     </nav>
//   );
// };

// // Navigation.propTypes = {}

// export default Navigation;
