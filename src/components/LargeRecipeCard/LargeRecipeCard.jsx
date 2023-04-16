import React from 'react';

import {
  RecipeCardBox,
  StyledLink,
  StyledTime,
} from './LargeRecipeCard.styled';

// import Skeleton from '@mui/material/Skeleton';

const LargeRecipeCard = ({ recipe, type }) => {
  const splitText = (stringToSplit, separator) => {
    return stringToSplit.split(separator).slice(0, -1);
  };
  return recipe.map(item => {
    return (
      <RecipeCardBox key={item._id}>
        <img src={item.preview} alt={item.title} />

        <div className="description-conainer">
          <h3>{item.title}</h3>
          <div className="description">
            {splitText(item.description, '.').map(item => {
              return <div key={item}>{item}.</div>;
            })}
          </div>
          <div className="btn-conainer">
            <StyledTime minutes={Number(item.time)}></StyledTime>
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
