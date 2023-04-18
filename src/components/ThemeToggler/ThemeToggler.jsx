import React from 'react';
import { ThemeTogglerStyled } from './ThemeToggler.styled';
// import PropTypes from 'prop-types'

const ThemeToggler = props => {
  return <ThemeTogglerStyled>
    <input class="tgl tgl-light" id="cb1" type="checkbox" />
    <label class="tgl-btn" for="cb1"></label>
  </ThemeTogglerStyled>;
};

ThemeToggler.propTypes = {

}

export default ThemeToggler;
