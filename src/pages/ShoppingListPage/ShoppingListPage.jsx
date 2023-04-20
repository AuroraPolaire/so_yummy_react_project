import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Section, Wrapper } from 'components/theme/GlobalContainer';
import { fetchShoppingList } from 'redux/shoppingList/shoppingListOperations';
import IngredientsShoppingList from 'components/IngredientsShoppingList/IngredientsShoppingList';
import {
  selectShoppingList,
  selectShoppingListError,
  selectShoppingListIsLoading,
} from 'redux/shoppingList/shoppingListSelectors';
import Squares from 'components/Squares/Squares';
import PageTitle from 'components/PageTitle/PageTitle';
import Loader from 'components/Loader/Loader';
import { ShoppingListLoader } from './ShoppingListPage.styled';
import { Notify } from 'notiflix';

const ShoppingListPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectShoppingList);
  const isLoading = useSelector(selectShoppingListIsLoading);
  const error = useSelector(selectShoppingListError);

  useEffect(() => {
    if (products === null) {
      dispatch(fetchShoppingList());
    }

    if (error !== null) {
      Notify.failure(error);
    }
  }, [dispatch, products, error]);

  return (
    <>
      <Squares />
      <Section>
        <Wrapper>
          <PageTitle type={'shoppingListPage'}>Shopping list</PageTitle>

          <IngredientsShoppingList />

          {isLoading && (
            <ShoppingListLoader>
              <Loader />
            </ShoppingListLoader>
          )}
        </Wrapper>
      </Section>
    </>
  );
};

export default ShoppingListPage;
