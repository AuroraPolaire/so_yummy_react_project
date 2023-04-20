import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IconButton, Tooltip } from '@mui/material';

import DefaultThumb from 'images/icons/page-not-found.svg';
import {
  CrossIcon,
  ImgWrapper,
  IngredientsShoppingListHead,
  IngredientsShoppingListItem,
  IngredientsShoppingListMeasure,
  IngredientsShoppingListMeasureWrapper,
  IngredientsShoppingListStyled,
  ShoppingListMeasure,
} from './IngredientsShoppingList.styled';
import { removeProductFromShoppingList } from 'redux/shoppingList/shoppingListOperations';
import { selectShoppingList } from 'redux/shoppingList/shoppingListSelectors';

// import NestedList from 'components/NestedList/NestedList';

export default function IngredientsShoppingList() {
  const dispatch = useDispatch();
  const products = useSelector(selectShoppingList);

  return (
    <div>
      {products !== null && products.length > 0 ? (
        <IngredientsShoppingListHead>
          <p>Products</p>
          <p>Number</p>
          <p>Remove</p>
        </IngredientsShoppingListHead>
      ) : (
        <p>Your shopping list is empty</p>
      )}

      <IngredientsShoppingListStyled>
        {products &&
          products.map(({ productId, title, thumb, measure }) => (
            <IngredientsShoppingListItem key={productId}>
              <ImgWrapper>
                <img src={thumb ?? DefaultThumb} alt={title} />
              </ImgWrapper>

              <p>{title}</p>

              {/* {measure.length > 2 ? (
              <NestedList measures={measure} productId={productId} />
            ) : ( */}
              <ShoppingListMeasure>
                {measure.map((measure, i) => {
                  return (
                    <IngredientsShoppingListMeasureWrapper key={i}>
                      <IngredientsShoppingListMeasure>
                        {measure}
                      </IngredientsShoppingListMeasure>

                      <Tooltip title="Remove">
                        <IconButton
                          onClick={() =>
                            dispatch(
                              removeProductFromShoppingList({
                                productId,
                                measure,
                              })
                            )
                          }
                        >
                          <CrossIcon />
                        </IconButton>
                      </Tooltip>
                    </IngredientsShoppingListMeasureWrapper>
                  );
                })}
              </ShoppingListMeasure>
              {/* )} */}
            </IngredientsShoppingListItem>
          ))}
      </IngredientsShoppingListStyled>
    </div>
  );
}
