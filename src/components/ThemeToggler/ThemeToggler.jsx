import React from 'react';
import { ThemeTogglerStyled } from './ThemeToggler.styled';
// import PropTypes from 'prop-types'

const ThemeToggler = props => {
  return (
    <ThemeTogglerStyled>
      <input className="tgl tgl-light" id="cb1" type="checkbox" />
      <label className="tgl-btn" for="cb1"></label>
    </ThemeTogglerStyled>
  );
};

ThemeToggler.propTypes = {};

export default ThemeToggler;
