import PreviewCategories from 'components/PreviewCategories/PreviewCategories';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchRecipesMainPage } from 'redux/recipes/recipesOperations';

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipesMainPage());
  }, [dispatch]);
  return (
    <>
      <PreviewCategories />
    </>
  );
};

export default MainPage;
