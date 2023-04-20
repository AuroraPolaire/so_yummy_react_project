// PopularRecipesItem;
import React from 'react';
import PropTypes from 'prop-types';
import { RecipeCardBox, Title, StyledLink } from './PopularRecipesItem.styled';

const PopularRecipesItem = ({ recipe }) => {
  function truncateTitle(str) {
    const shortTitle = str.split(' ');
    return shortTitle.length < 4
      ? shortTitle.join(' ')
      : shortTitle.slice(0, 2).join(' ');
  }
  const splitText = (stringToSplit, separator) => {
    return stringToSplit.split(separator).slice(0, -1);
  };
  return recipe.map(item => {
    return (
      <RecipeCardBox key={item._id}>
        <StyledLink key={item._id} to={`/recipe/${item._id}`}>
          <img src={item.preview} alt={item.title} />

          <div className="description-conainer">
            <Title>{truncateTitle(item.title)}</Title>

            <div className="description">
              {splitText(item.description, '.')[0]}.
            </div>
          </div>
        </StyledLink>
      </RecipeCardBox>
    );
  });
};

PopularRecipesItem.propTypes = {
  recipe: PropTypes.array.isRequired,
};

export default PopularRecipesItem;
