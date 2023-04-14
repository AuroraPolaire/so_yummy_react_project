import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import MainTitle from 'components/MainTitle/MainTitle';
import { Section, Wrapper } from 'components/theme/GlobalContainer';
import { fetchShoppingList } from 'redux/shoppingList/shoppingListOperations';
import IngredientsShoppingList from 'components/IngredientsShoppingList/IngredientsShoppingList';

const ShoppingListPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchShoppingList());
  }, [dispatch]);

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
