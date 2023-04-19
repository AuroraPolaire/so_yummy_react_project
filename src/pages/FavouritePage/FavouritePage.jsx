import React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Pagination from '@mui/material/Pagination';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import MuiProviderTheme from 'components/MuiProviderTheme/MuiProviderTheme';
import { Section, Wrapper } from 'components/theme/GlobalContainer';
import PageTitle from 'components/PageTitle/PageTitle';
import { fetchFavouriteRecipes } from 'redux/favourite/favouriteOperations';
import PreviewRecipesList from 'components/PreviewRecipesList/PreviewRecipesList';
import { selectFavouriteRecipes } from 'redux/favourite/favouriteSelectors';
import Squares from 'components/Squares/Squares';

const FavouritePage = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const response = useSelector(selectFavouriteRecipes);
  const favoritRecipesList = Object.entries(response);
  let pages = Math.ceil(response.total / response.limit)
    ? Math.ceil(response.total / response.limit)
    : 1;

  useEffect(() => {
    dispatch(fetchFavouriteRecipes({ limit: 4 }));
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, [dispatch]);
  const handleChangePagination = (e, value) => {
    setCurrentPage(value);
    dispatch(fetchFavouriteRecipes({ limit: 4, page: value }));
    window.scrollTo(0, 0);
  };
  return (
    <ThemeProvider theme={MuiProviderTheme}>
      <Squares />
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

export default FavouritePage;
