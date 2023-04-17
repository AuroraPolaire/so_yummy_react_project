import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import MainTitle from 'components/MainTitle/MainTitle';
import { Section, Wrapper } from 'components/theme/GlobalContainer';
import { fetchShoppingList } from 'redux/shoppingList/shoppingListOperations';
import IngredientsShoppingList from 'components/IngredientsShoppingList/IngredientsShoppingList';
import { selectShoppingList } from 'redux/shoppingList/shoppingListSelectors';

const ShoppingListPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectShoppingList);

  useEffect(() => {
    if (products.length < 1) {
      dispatch(fetchShoppingList());
    }
  }, [dispatch, products]);

  return (
    <Section>
      <Wrapper>
        <MainTitle text="Shopping list"></MainTitle>

        <IngredientsShoppingList />
      </Wrapper>
    </Section>
  );
};

export default ShoppingListPage;
