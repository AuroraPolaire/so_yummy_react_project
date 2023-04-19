import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import PageTitle from 'components/PageTitle/PageTitle';
import PopularRecipes from 'components/PopularRecipes/PopularRecipes';
import Squares from 'components/Squares/Squares';
import { Section, Wrapper } from 'components/theme/GlobalContainer';
import { fetchAllRecipes } from 'redux/recipes/recipesOperations';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Content } from './AddRecipesPage.styled';
// import PropTypes from 'prop-types'

const AddRecipesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllRecipes({ page: 1, limit: 4, sort: 'popular' }));
  }, [dispatch]);
  return (
    <>
      <Section>
        <Squares />
        <Wrapper>
          <PageTitle type="addRecipe">Add Recipe</PageTitle>
          <Content>
            <AddRecipeForm />
            <PopularRecipes></PopularRecipes>
          </Content>
        </Wrapper>
      </Section>
    </>
  );
};

// AddRecipesPage.propTypes = {}

export default AddRecipesPage;
