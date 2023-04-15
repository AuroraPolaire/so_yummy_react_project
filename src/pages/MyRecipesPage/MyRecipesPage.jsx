import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import PropTypes from 'prop-types'
// =======================
import { Section, Wrapper } from 'components/theme/GlobalContainer';
import PageTitle from 'components/PageTitle/PageTitle';
import { fetchMyRecipes } from 'redux/recipes/recipesOperations';
import { selectMyRecipesList } from 'redux/recipes/recipesSelectors';
import PreviewRecipesList from 'components/PreviewRecipesList/PreviewRecipesList';

import { fetchRecipesByCategory } from 'redux/recipes/recipesOperations';
import { selectRecipesByCategoryList } from 'redux/recipes/recipesSelectors';

const MyRecipesPage = () => {
  const dispatch = useDispatch();
  const myRecipesList = Object.entries(
    useSelector(selectRecipesByCategoryList)
  );

  useEffect(() => {
    dispatch(fetchRecipesByCategory({}));
    dispatch(fetchMyRecipes({}));
  }, [dispatch]);
  return (
    <Section>
      <Wrapper>
        <PageTitle type="mainPage">My recipes</PageTitle>
        <PreviewRecipesList
          type="my"
          recipesList={myRecipesList}
        ></PreviewRecipesList>
      </Wrapper>
    </Section>
  );
};

// MyRecipesPage.propTypes = {}

export default MyRecipesPage;
