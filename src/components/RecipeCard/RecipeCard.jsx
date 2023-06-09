import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { RecipeCardBox } from './RecipeCard.styled';

const RecipeCard = ({ recipe }) => {
  function truncateTitle(str) {
    if (str === undefined) return;
    const shortTitle = str.split(' ');
    return shortTitle.length < 4
      ? shortTitle.join(' ')
      : shortTitle.slice(0, 2).join(' ');
  }

  // Проверка на существование recipe и его длину
  if (!recipe || recipe.length === 0) {
    return;
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
RecipeCard.propTypes = {
  recipe: PropTypes.array.isRequired,
};
export default RecipeCard;
