import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';
// import DefaultThumb from 'images/icons/page-not-found.svg';
import {
  CheckboxChecked,
  CheckboxUnchecked,
  Measure,
  RecipeIngredientsContainer,
  RecipeInngredientsHead,
  RecipeInngredientsItem,
  RecipeInngredientsListStyled,
} from './RecipeInngredientsList.styled';
import {
  addProductToShoppingList,
  removeProductFromShoppingList,
} from 'redux/shoppingList/shoppingListOperations';
import { selectShoppingList } from 'redux/shoppingList/shoppingListSelectors';

import { DefaultIngredientPicture } from 'components/DefaultIngredientPicture/DefaultIngredientPicture';

export default function RecipeInngredientsList({ ingredients }) {
  const dispatch = useDispatch();
  const products = useSelector(selectShoppingList);

  const handleChecked = (productId, measure) => {
    if (products === null) return false;
    return products.some(
      p => p.productId === productId && p.measure.some(m => m === measure)
    );
  };

  const handleOnChange = (productId, measure) => {
    if (
      products.some(
        p => p.productId === productId && p.measure.some(m => m === measure)
      )
    ) {
      dispatch(removeProductFromShoppingList({ productId, measure }));
    } else {
      dispatch(addProductToShoppingList({ productId, measure }));
    }
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
            {thumb ? (
              <img src={thumb} alt={title} />
            ) : (
              <DefaultIngredientPicture />
            )}
            <p>{title}</p>
            {/* <p>{desc}</p> */}
            <Measure>{measure}</Measure>
            {/* <input
              type="checkbox"
              name="shoppingList"
              checked={handleChecked(_id, measure)}
              onChange={() => {
                handleOnChange(_id, measure);
              }}
            /> */}
            {handleChecked(_id, measure) ? (
              <CheckboxChecked
                onClick={() => {
                  handleOnChange(_id, measure);
                }}
              />
            ) : (
              <CheckboxUnchecked
                onClick={() => {
                  handleOnChange(_id, measure);
                }}
              />
            )}
          </RecipeInngredientsItem>
        ))}
      </RecipeInngredientsListStyled>
    </RecipeIngredientsContainer>
  );
}

RecipeInngredientsList.propTypes = {
  ingredients: PropTypes.array.isRequired,
};
