import React from 'react';
import { ThemeTogglerStyled } from './ThemeToggler.styled';
import PropTypes from 'prop-types'


const ThemeToggler = ({ value, onToggle }) => {
  return <ThemeTogglerStyled>
    <input className="tgl tgl-light" id="cb1" type="checkbox" checked={value} onChange={onToggle ? (e) => onToggle(e.target.value) : undefined} />
    <label className="tgl-btn" htmlFor="cb1"></label>
  </ThemeTogglerStyled>;
};

ThemeToggler.propTypes = {
  value: PropTypes.bool,
  onToggle: PropTypes.func
}


export default ThemeToggler;
