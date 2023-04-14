import React from 'react';
import SVG from '../../images/icons/sprite.svg';
import { StyledBox } from './ChooseYourBreakfast.styled';

const ChooseYourBreakfast = () => {
  return (
    <StyledBox>
      <p>
        <span>Delicious and healthy</span> way to enjoy a variety of fresh
        ingredients in one satisfying meal
      </p>
      <div>
        <span>See recipes</span>
        <svg>
          <use href={`${SVG}#icon-arrow-right`}></use>
        </svg>
      </div>
    </StyledBox>
  );
};

export default ChooseYourBreakfast;
