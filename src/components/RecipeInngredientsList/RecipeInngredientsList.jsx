import React from 'react';
import PropTypes from 'prop-types';
import DefaultThumb from 'images/icons/page-not-found.svg';
import { Measure, RecipeInngredientsHead, RecipeInngredientsItem, RecipeInngredientsListStyled } from './RecipeInngredientsList.styled';

export default function RecipeInngredientsList({ingredients}) {
  return (
    <div>
      <RecipeInngredientsHead>
        <p>Ingredients</p>
        <p>Number</p>
        <p>Add to list</p>
      </RecipeInngredientsHead>
      <RecipeInngredientsListStyled>
        {ingredients.map(({ measure, title, _id, thumb, desc }) => (
          <RecipeInngredientsItem key={_id}>
            <img src={thumb ?? DefaultThumb} alt={title} />
            <p>{title}</p>
            {/* <p>{desc}</p> */}
            <Measure>{measure}</Measure>
            <input type="checkbox" name="shoppingList" />
          </RecipeInngredientsItem>
        ))}
      </RecipeInngredientsListStyled>
    </div>
  )
}

RecipeInngredientsList.propTypes = {
    ingredients: PropTypes.array.isRequired,
}