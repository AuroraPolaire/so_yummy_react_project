import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types'
// =======================
import { Section, Wrapper } from 'components/theme/GlobalContainer';
import PageTitle from 'components/PageTitle/PageTitle';
import { fetchFavoritRecipes } from 'redux/recipes/recipesOperations';

import { fetchRecipesByCategory } from 'redux/recipes/recipesOperations';

const FavouritePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipesByCategory({}));
    dispatch(fetchFavoritRecipes({}));
  }, [dispatch]);
  return (
    <Section>
      <Wrapper>
        <PageTitle type="mainPage">Favorites</PageTitle>
      </Wrapper>
    </Section>
  );
};

// FavouritePage.propTypes = {}

export default FavouritePage;
