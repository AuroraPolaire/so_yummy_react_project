import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Section, Wrapper } from 'components/theme/GlobalContainer';
import { fetchShoppingList } from 'redux/shoppingList/shoppingListOperations';
import IngredientsShoppingList from 'components/IngredientsShoppingList/IngredientsShoppingList';
import { selectShoppingList } from 'redux/shoppingList/shoppingListSelectors';
import Squares from 'components/Squares/Squares';
import PageTitle from 'components/PageTitle/PageTitle';

const ShoppingListPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectShoppingList);

  useEffect(() => {
    if (products === null) {
      dispatch(fetchShoppingList());
    }
  }, [dispatch, products]);

  return (
    <>
      <Squares />
      <Section>
        <Wrapper>
          <PageTitle type={'shoppingListPage'}>Shopping list</PageTitle>
          {/* <MainTitle text="Shopping list"></MainTitle> */}

          <IngredientsShoppingList />
        </Wrapper>
      </Section>
    </>
  );
};

export default ShoppingListPage;
