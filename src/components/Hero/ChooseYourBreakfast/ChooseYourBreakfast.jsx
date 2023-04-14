import React from 'react';
import { NavLink } from 'react-router-dom';
import SVG from '../../../images/icons/sprite.svg';
import { StyledBox } from './ChooseYourBreakfast.styled';

const ChooseYourBreakfast = () => {
  return (
    <StyledBox>
      <p>
        <span>Delicious and healthy</span> way to enjoy a variety of fresh
        ingredients in one satisfying meal
      </p>
      <div>
        <NavLink to="/categories/breakfast">
          <span>See recipes</span>
        </NavLink>
        <svg>
          <use href={`${SVG}#icon-arrow-right`}></use>
        </svg>
      </div>
    </StyledBox>
  );
};

export default ChooseYourBreakfast;
