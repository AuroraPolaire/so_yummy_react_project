import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  NavBurger,
  NavContainer,
  NavMenu,
  NavMenuItem,
} from './Navigation.styled';
import SearchIcon from '@mui/icons-material/Search';

const Navigation = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleBurgerClick = () => {
    setIsOpen(!isOpen);
  };

  // const handleLinkClick = () => {
  //   setIsOpen(false);
  // };

  return (
    <>
      <NavContainer>
        <NavBurger onClick={handleBurgerClick}>
          <div />
          <div />
          <div />
        </NavBurger>

        <NavMenu style={{ display: isOpen ? 'flex' : 'none' }}>
          <NavMenuItem>
            <NavLink to="/categories/:categoryName">Categories</NavLink>
          </NavMenuItem>

          <NavMenuItem>
            <NavLink to="/add">Add recipes</NavLink>
          </NavMenuItem>

          <NavMenuItem>
            <NavLink to="/my">My recipes</NavLink>
          </NavMenuItem>

          <NavMenuItem>
            <NavLink to="/favourite">Favourite</NavLink>
          </NavMenuItem>

          <NavMenuItem>
            <NavLink to="/shopping-list">Shopping list</NavLink>
          </NavMenuItem>

          <NavMenuItem>
            <NavLink to="/search">
              {' '}
              <SearchIcon sx={{ fontSize: 24 }} />
            </NavLink>
          </NavMenuItem>
        </NavMenu>
      </NavContainer>
    </>
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
