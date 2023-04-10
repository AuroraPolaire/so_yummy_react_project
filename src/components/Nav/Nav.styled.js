import React from 'react';
import { NavLink } from 'react-router-dom';

// import PropTypes from 'prop-types'

const Nav = props => {
  return (
    <nav>
      <NavLink to="/search">Ingredients</NavLink>
      <NavLink to="/add">Add recipes</NavLink>
      <NavLink to="/my">My recipes</NavLink>
      <NavLink to="/favourite">Favourite</NavLink>
      <NavLink to="/shopping-list">Shopping list</NavLink>
    </nav>
  );
};

// Nav.propTypes = {}

export default Nav;
