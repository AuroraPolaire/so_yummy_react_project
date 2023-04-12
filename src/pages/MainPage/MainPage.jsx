import ChooseYourBreakfast from 'components/ChooseYourBreakfast/ChooseYourBreakfast';
import Hero from 'components/Hero/Hero';
import PreviewCategories from 'components/PreviewCategories/PreviewCategories';
import Search from 'components/Search/Search';
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
      <Hero />
      <ChooseYourBreakfast />
      <Search />
      <PreviewCategories />
    </>
  );
};

export default MainPage;
