import AddRecipeForm from 'components/AddRecipeForm/AddRecipeForm';
import PageTitle from 'components/PageTitle/PageTitle';
import { Section, Wrapper } from 'components/theme/GlobalContainer';
import React from 'react';
// import PropTypes from 'prop-types'

const AddRecipesPage = () => {
  
  return <Section>
    <Wrapper>
    <PageTitle type='addRecipe'>Add Recipe</PageTitle>
    <AddRecipeForm />
    </Wrapper>
  </Section>;

};

// AddRecipesPage.propTypes = {}

export default AddRecipesPage;
