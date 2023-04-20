import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { IconButton, Tooltip } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';

import DefaultThumb from 'images/icons/page-not-found.svg';
import {
  ImgWrapper,
  IngredientsShoppingListHead,
  IngredientsShoppingListItem,
  IngredientsShoppingListMeasure,
  IngredientsShoppingListMeasureWrapper,
  IngredientsShoppingListStyled,
} from './IngredientsShoppingList.styled';
import { removeProductFromShoppingList } from 'redux/shoppingList/shoppingListOperations';
import { selectShoppingList } from 'redux/shoppingList/shoppingListSelectors';
// import NestedList from 'components/NestedList/NestedList';

export default function IngredientsShoppingList() {
  const dispatch = useDispatch();
  const products = useSelector(selectShoppingList);

  console.log(products);

  return (
    <div>
      <IngredientsShoppingListHead>
        <p>Products</p>
        <p>Number</p>
        <p>Remove</p>
      </IngredientsShoppingListHead>
      <IngredientsShoppingListStyled>
        {products &&
          products.map(({ productId, title, thumb, measure }) => (
            <IngredientsShoppingListItem key={productId}>
              <ImgWrapper>
                <img src={thumb ?? DefaultThumb} alt={title} />
              </ImgWrapper>

              <p>{title}</p>
              {/* <IngredientsShoppingListMeasure> */}
              {/* {measure.length > 2 ? (
              <NestedList measures={measure} productId={productId} />
            ) : ( */}
              <div>
                {measure.map((measure, i) => {
                  return (
                    <IngredientsShoppingListMeasureWrapper key={i}>
                      <IngredientsShoppingListMeasure>
                        {measure}
                      </IngredientsShoppingListMeasure>

                      {/* <button
                        onClick={() =>
                          dispatch(
                            removeProductFromShoppingList({
                              productId,
                              measure,
                            })
                          )
                        }
                      >
                        X
                      </button> */}
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
                          <ClearIcon />
                        </IconButton>
                      </Tooltip>
                    </IngredientsShoppingListMeasureWrapper>
                  );
                })}
              </div>
              {/* )} */}

              {/* </IngredientsShoppingListMeasure> */}
            </IngredientsShoppingListItem>
          ))}
      </IngredientsShoppingListStyled>
    </div>
  );
}
