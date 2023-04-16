import { useSelector } from 'react-redux';

import { selectResults, selectStatus } from 'redux/search/searchSelectors';

import { Loader } from 'components/Loader/Loader';

import {
  LoaderWrapper,
  RecipeNotFoundImage,
  RecipeNotFoundText,
} from './SearchedRecepiesList.styled';
import RecipeCard from 'components/RecipeCard/RecipeCard';
import { List } from 'components/CategoriesTabPanel/CategoriesTabPanel.styled';
import { Wrapper } from 'components/theme/GlobalContainer';

const SearchedRecipiesList = () => {
  const recipes = useSelector(selectResults);
  console.log(recipes);
  const { isLoading, isResolved } = useSelector(selectStatus);

  return (
    <>
      {isLoading ? (
        <LoaderWrapper>
          <Loader />
        </LoaderWrapper>
      ) : (
        <Wrapper>
          <List>
            <RecipeCard recipe={recipes} />
          </List>
        </Wrapper>
        // <RecipesList>
        //   {recipes.map(({ _id, title, preview }) => {
        //     return (
        //       <SearchedRecipesItem
        //         key={_id}
        //         title={title}
        //         preview={preview}
        //         id={_id}
        //       />
        //     );
        //   })}
        // </RecipesList>
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
