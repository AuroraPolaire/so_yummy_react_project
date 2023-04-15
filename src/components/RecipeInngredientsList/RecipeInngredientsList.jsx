import React from 'react';
import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';
import DefaultThumb from 'images/icons/page-not-found.svg';
import {
  Measure,
  RecipeIngredientsContainer,
  RecipeInngredientsHead,
  RecipeInngredientsItem,
  RecipeInngredientsListStyled,
} from './RecipeInngredientsList.styled';
import { addProductToShoppingList } from 'redux/shoppingList/shoppingListOperations';

export default function RecipeInngredientsList({ ingredients }) {
  const dispatch = useDispatch();
  // const handleChecked = () => dispatch(toggleCompleted(task));
  const handleOnChange = (productId, measure) => {
    console.log(productId);
    console.log(measure);
    // const product = { productId, measure };
    // console.log(product);
    dispatch(addProductToShoppingList({ productId, measure }));
  };

  return (
    <RecipeIngredientsContainer>
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
            <input
              type="checkbox"
              name="shoppingList"
              // checked={handleChecked}
              onChange={() => {
                handleOnChange(_id, measure);
              }}
            />
          </RecipeInngredientsItem>
        ))}
      </RecipeInngredientsListStyled>
    </RecipeIngredientsContainer>
  );
}

RecipeInngredientsList.propTypes = {
  ingredients: PropTypes.array.isRequired,
};
