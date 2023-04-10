import React from 'react';
import { NavLink } from 'react-router-dom';
// import PropTypes from 'prop-types'

const Navigation = props => {
  return (
    <nav>
      <NavLink to="/categories/:categoryName">Categories</NavLink>
      <NavLink to="/add">Add recipes</NavLink>
      <NavLink to="/my">My recipes</NavLink>
      <NavLink to="/favourite">Favourite</NavLink>
      <NavLink to="/shopping-list">Shopping list</NavLink>
      <NavLink to="/search">SearchIcon</NavLink>
    </nav>
  );
};

// Navigation.propTypes = {}

export default Navigation;
