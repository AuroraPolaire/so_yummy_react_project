import React from 'react';
import { RecipeCardBox } from './RecipeCard.styled';

const RecipeCard = ({ recipe }) => {
  console.log(recipe);
  return recipe.map(item => {
    return (
      <RecipeCardBox key={item._id}>
        <img src={item.preview} alt={item.title} />
        <p className="title">{item.title}</p>
      </RecipeCardBox>
    );
  });
};

export default RecipeCard;
