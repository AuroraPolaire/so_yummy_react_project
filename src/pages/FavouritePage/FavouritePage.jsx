import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Fade from '@mui/material/Fade';
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
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const response = useSelector(selectRecipesByCategoryList);
  const favoritRecipesList = Object.entries(response);
  let pages = Math.ceil(response.total / response.limit)
    ? Math.ceil(response.total / response.limit)
    : 1;

  useEffect(() => {
    dispatch(fetchRecipesByCategory({ limit: 4 }));
    dispatch(fetchFavoritRecipes({}));
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, [dispatch]);
  const handleChangePagination = (e, value) => {
    setCurrentPage(value);
    dispatch(fetchRecipesByCategory({ limit: 4, page: value }));
    window.scrollTo(0, 0);
  };
  return (
    <ThemeProvider theme={MuiProviderTheme}>
      <Section>
        <Wrapper>
          <PageTitle type="mainPage">Favorites</PageTitle>
          <Fade in={show}>
            <div>
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
            </div>
          </Fade>
        </Wrapper>
      </Section>
    </ThemeProvider>
  );
};

// FavouritePage.propTypes = {}

export default FavouritePage;
