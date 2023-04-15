import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types'
// =======================
import { Section, Wrapper } from 'components/theme/GlobalContainer';
import PageTitle from 'components/PageTitle/PageTitle';
import { fetchFavoritRecipes } from 'redux/recipes/recipesOperations';
// import { selectFavoritRecipesList } from 'redux/recipes/recipesSelectors';
import PreviewRecipesList from 'components/PreviewRecipesList/PreviewRecipesList';

import { fetchRecipesByCategory } from 'redux/recipes/recipesOperations';
import { selectRecipesByCategoryList } from 'redux/recipes/recipesSelectors';
const FavouritePage = () => {
  const dispatch = useDispatch();
  const favoritRecipesList = Object.entries(
    useSelector(selectRecipesByCategoryList)
  );

  useEffect(() => {
    dispatch(fetchRecipesByCategory({}));
    dispatch(fetchFavoritRecipes({}));
  }, [dispatch]);
  return (
    <Section>
      <Wrapper>
        <PageTitle type="mainPage">Favorites</PageTitle>
        <PreviewRecipesList
          type="favorit"
          recipesList={favoritRecipesList}
        ></PreviewRecipesList>
      </Wrapper>
    </Section>
  );
};

// FavouritePage.propTypes = {}

export default FavouritePage;
