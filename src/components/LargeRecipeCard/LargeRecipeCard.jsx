import React from 'react';
import { NavLink } from 'react-router-dom';
import { RecipeCardBox } from './LargeRecipeCard.styled';
import Time from 'components/Time/Time';
// import Skeleton from '@mui/material/Skeleton';

const LargeRecipeCard = ({ recipe }) => {
  // function truncateTitle(str) {
  //   const shortTitle = str.split(' ');
  //   return shortTitle.length < 4
  //     ? shortTitle.join(' ')
  //     : shortTitle.slice(0, 2).join(' ');
  // }

  return recipe.map(item => {
    return (
      <NavLink key={item._id} to={`/recipe/${item._id}`}>
        <RecipeCardBox>
          <img src={item.preview} alt={item.title} />

          <div>
            <h3>{item.title}</h3>
            <p className="description">{item.description}</p>
            <Time minutes={item.time}></Time>
          </div>
        </RecipeCardBox>
      </NavLink>
    );
  });
};

export default LargeRecipeCard;
