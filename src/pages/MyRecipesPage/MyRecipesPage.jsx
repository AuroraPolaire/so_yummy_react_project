import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types'
// =======================
import { Section, Wrapper } from 'components/theme/GlobalContainer';
import PageTitle from 'components/PageTitle/PageTitle';
import { fetchMyRecipes } from 'redux/recipes/recipesOperations';

import { fetchRecipesByCategory } from 'redux/recipes/recipesOperations';

const MyRecipesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipesByCategory({}));
    dispatch(fetchMyRecipes({}));
  }, [dispatch]);
  return (
    <Section>
      <Wrapper>
        <PageTitle type="mainPage">My recipes</PageTitle>
      </Wrapper>
    </Section>
  );
};

// MyRecipesPage.propTypes = {}

export default MyRecipesPage;
