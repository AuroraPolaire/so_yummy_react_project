import React from 'react';
// import { NavLink } from 'react-router-dom';
import {
  NavBurger,
  NavContainer,
  HeaderLinkWrap,
  HeaderLink,
  HeaderSection,
} from './Navigation.styled';
import SearchIcon from '@mui/icons-material/Search';
// import Logo from 'components/Logo/Logo';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };

  // const handleLinkClick = () => {
  //   setIsOpen(false);
  // };

  return (
    <HeaderSection>
      <NavContainer>
        <NavBurger onClick={handleBurgerClick}>
          {/* <div />
          <div />
          <div /> */}
        </NavBurger>

        <HeaderLinkWrap style={{ display: isOpen ? 'flex' : 'none' }}>
          <li>
            <HeaderLink to="/categories/:categoryName">Categories</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/add">Add recipes</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/my">My recipes</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/favourite">Favourite</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/shopping-list">Shopping list</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/search">
              {' '}
              <SearchIcon sx={{ fontSize: 24 }} />
            </HeaderLink>
          </li>
        </HeaderLinkWrap>
      </NavContainer>
    </HeaderSection>
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
