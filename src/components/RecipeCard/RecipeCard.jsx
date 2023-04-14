import React from 'react';
import { NavLink } from 'react-router-dom';
import { RecipeCardBox } from './RecipeCard.styled';
import Skeleton from '@mui/material/Skeleton';

const RecipeCard = ({ recipe, isSkeleton }) => {
  function truncateTitle(str) {
    const shortTitle = str.split(' ');
    return shortTitle.length < 4
      ? shortTitle.join(' ')
      : shortTitle.slice(0, 2).join(' ');
  }

  return recipe.map(item => {
    return (
      <NavLink key={item._id} to={`/recipe/${item._id}`}>
        <RecipeCardBox>
          <div>
            {isSkeleton ? (
              <Skeleton variant="rectangular" animation="wave">
                <img src={item.preview} alt={item.title} />
                <p className="title">{truncateTitle(item.title)}</p>
              </Skeleton>
            ) : (
              <>
                <img src={item.preview} alt={item.title} />
                <p className="title">{truncateTitle(item.title)}</p>
              </>
            )}
          </div>
        </RecipeCardBox>
      </NavLink>
    );
  });
};

export default RecipeCard;
