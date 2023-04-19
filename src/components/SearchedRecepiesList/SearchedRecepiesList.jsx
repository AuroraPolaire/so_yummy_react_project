import React from 'react';
import { useSelector } from 'react-redux';
import { selectResults, selectStatus } from 'redux/search/searchSelectors';
import RecipeCard from 'components/RecipeCard/RecipeCard';
import { List } from 'components/CategoriesTabPanel/CategoriesTabPanel.styled';
import { Loader } from 'components/Loader/Loader';
import {
  LoaderWrapper,
  RecipeNotFoundImage,
  RecipeNotFoundText,
} from './SearchedRecepiesList.styled';

const SearchedRecipiesList = () => {
  const recipes = useSelector(selectResults);
  // console.log(recipes);
  const { isLoading, isResolved } = useSelector(selectStatus);
  return (
    <>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <List>
          <RecipeCard recipe={recipes} />
        </List>
      )}
      {isResolved && recipes.length === 0 && (
        <>
          <RecipeNotFoundImage />
          <RecipeNotFoundText>
            Try looking for something else..
          </RecipeNotFoundText>
        </>
      )}
    </>
  );
};
export default SearchedRecipiesList;
