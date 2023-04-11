import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRecipesMainPage } from 'redux/recipes/recipesOperations';
import { selectRecipesMainPage } from 'redux/recipes/recipesSelectors';

const MainPage = () => {
  const dispatch = useDispatch();
  const randomRecipes = useSelector(selectRecipesMainPage);

  useEffect(() => {
    dispatch(fetchRecipesMainPage());
  }, [dispatch]);
  console.log(randomRecipes);
  return <div>MainPage</div>;
};

export default MainPage;
