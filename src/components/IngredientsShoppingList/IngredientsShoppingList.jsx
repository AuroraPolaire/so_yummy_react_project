import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IconButton, Tooltip } from '@mui/material';

import DefaultThumb from 'images/icons/page-not-found.svg';
import {
  IngredientsShoppingListHead,
  IngredientsShoppingListItem,
  IngredientsShoppingListMeasure,
  IngredientsShoppingListStyled,
} from './IngredientsShoppingList.styled';
import { removeProductFromShoppingList } from 'redux/shoppingList/shoppingListOperations';
import { selectShoppingList } from 'redux/shoppingList/shoppingListSelectors';

export default function IngredientsShoppingList() {
  const dispatch = useDispatch();
  const products = useSelector(selectShoppingList);

  return (
    <div>
      <IngredientsShoppingListHead>
        <p>Products</p>
        <p>Number</p>
        <p>Remove</p>
      </IngredientsShoppingListHead>
      <IngredientsShoppingListStyled>
        {products.map(({ productId, title, thumb, measure }) => (
          <IngredientsShoppingListItem key={productId}>
            <img src={thumb ?? DefaultThumb} alt={title} />
            <p>{title}</p>
            {/* <p>{desc}</p> */}
            <IngredientsShoppingListMeasure>
              {measure}
            </IngredientsShoppingListMeasure>

            <Tooltip title="Remove">
              <IconButton
                onClick={() =>
                  dispatch(
                    removeProductFromShoppingList({ productId, measure })
                  )
                }
              >
                X
              </IconButton>
            </Tooltip>
          </IngredientsShoppingListItem>
        ))}
      </IngredientsShoppingListStyled>
    </div>
  );
}