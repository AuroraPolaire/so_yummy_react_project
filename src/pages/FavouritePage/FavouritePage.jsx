import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import MuiProviderTheme from 'components/MuiProviderTheme/MuiProviderTheme';
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
  const [currentPage, setCurrentPage] = React.useState(1);
  const response = useSelector(selectRecipesByCategoryList);
  const favoritRecipesList = Object.entries(response);
  let pages = Math.ceil(response.total / response.limit)
    ? Math.ceil(response.total / response.limit)
    : 1;

  useEffect(() => {
    dispatch(fetchRecipesByCategory({ limit: 4 }));
    dispatch(fetchFavoritRecipes({}));
  }, [dispatch]);
  const handleChangePagination = (e, value) => {
    setCurrentPage(value);
    dispatch(fetchRecipesByCategory({ limit: 4, page: value }));
  };
  return (
    <ThemeProvider theme={MuiProviderTheme}>
      <Section>
        <Wrapper>
          <PageTitle type="mainPage">Favorites</PageTitle>
          <PreviewRecipesList
            type="favorite"
            recipesList={favoritRecipesList}
          ></PreviewRecipesList>
          <Stack spacing={2}>
            <Pagination
              count={pages}
              onChange={handleChangePagination}
              page={currentPage}
            />
          </Stack>
        </Wrapper>
      </Section>
    </ThemeProvider>
  );
};

// FavouritePage.propTypes = {}

export default FavouritePage;
