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
import { fetchMyRecipes } from 'redux/myRecipes/myRecipesOperations';
import PreviewRecipesList from 'components/PreviewRecipesList/PreviewRecipesList';
import { selectMyRecipes } from 'redux/myRecipes/myRecipesSelectors';
import Squares from 'components/Squares/Squares';
// import { useLocation } from 'react-router-dom';

const MyRecipesPage = () => {
  const dispatch = useDispatch();
  // const location = useLocation();
  const [show, setShow] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const response = useSelector(selectMyRecipes);
  const myRecipesList = Object.entries(response);
  let pages = Math.ceil(response.total / response.limit)
    ? Math.ceil(response.total / response.limit)
    : 1;

  useEffect(() => {
    dispatch(fetchMyRecipes({ limit: 4 }));
    const timer = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(timer);
  }, [dispatch]);

  const handleChangePagination = (e, value) => {
    setCurrentPage(value);
    dispatch(fetchMyRecipes({ limit: 4, page: value }));
    window.scrollTo(0, 0);
  };

  return (
    <ThemeProvider theme={MuiProviderTheme}>
      <Squares />
      <Section>
        <Wrapper>
          <PageTitle type="mainPage">My recipes</PageTitle>
          <Fade in={show}>
            <div>
              <PreviewRecipesList
                type="my"
                recipesList={myRecipesList}
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

export default MyRecipesPage;
