import React from 'react';

import { RecipeCardBox, StyledLink } from './LargeRecipeCard.styled';
import Time from 'components/Time/Time';
// import Skeleton from '@mui/material/Skeleton';

const LargeRecipeCard = ({ recipe, type }) => {
  return recipe.map(item => {
    return (
      <RecipeCardBox key={item._id}>
        <img src={item.preview} alt={item.title} />

        <div className="description-conainer">
          <h3>{item.title}</h3>
          <p className="description">{item.description}</p>
          <div className="btn-conainer">
            <Time minutes={Number(item.time)}></Time>
            <StyledLink
              type={type}
              key={item._id}
              to={`/recipe/${item._id}`}
              className="link"
            >
              See recipe
            </StyledLink>
          </div>
        </div>
      </RecipeCardBox>
    );
  });
};

export default LargeRecipeCard;
