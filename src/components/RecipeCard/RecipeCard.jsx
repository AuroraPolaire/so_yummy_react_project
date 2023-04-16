import React from 'react';
import { NavLink } from 'react-router-dom';
import { RecipeCardBox } from './RecipeCard.styled';

const RecipeCard = ({ recipe }) => {
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
            <img src={item.preview} alt={item.title} />
            <p className="title">{truncateTitle(item.title)}</p>
          </div>
        </RecipeCardBox>
      </NavLink>
    );
  });
};

export default RecipeCard;
