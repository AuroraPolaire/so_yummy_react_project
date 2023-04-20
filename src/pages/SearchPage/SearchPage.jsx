import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchedRecipesList from 'components/SearchedRecepiesList/SearchedRecepiesList';
import { searchIngredient, searchRecipes } from 'redux/search/searchOperations';
import {
  selectTotalResults,
  selectSearchType,
  // selectSearchResults,
  selectLimitResults,
} from 'redux/search/searchSelectors';
import { Section, Wrapper } from 'components/theme/GlobalContainer';
import PageTitle from 'components/PageTitle/PageTitle';
import Squares from 'components/Squares/Squares';
import Pagination from '@mui/material/Pagination';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import MuiProviderTheme from 'components/MuiProviderTheme/MuiProviderTheme';
import { emptySearchResults } from 'redux/search/searchSlice';

const SearchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  // const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const searchType = useSelector(selectSearchType);
  const totalResults = useSelector(selectTotalResults);
  const limit = useSelector(selectLimitResults);

  let countPages = Math.ceil(totalResults / limit)
    ? Math.ceil(totalResults / limit)
    : 1;

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    dispatch(searchRecipes({ query, page: 1 }));

    return () => dispatch(emptySearchResults());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChangePagination = (e, value) => {
    if (searchType === 'title') {
      dispatch(searchRecipes({ query: query, page: value }));
    }
    if (searchType === 'ingredient') {
      dispatch(searchIngredient({ query: query, page: value }));
    }
    window.scrollTo(0, 0);
    setCurrentPage(value);
  };

  return (
    <>
      <Squares />
      <Section>
        <Wrapper>
          <PageTitle type={'searchPage'}>Search</PageTitle>
          <SearchBar searchType={searchType} query={query} />
          <SearchedRecipesList />
          {totalResults > 0 && (
            <Fade in={true}>
              <Stack spacing={2}>
                <ThemeProvider theme={MuiProviderTheme}>
                  <Pagination
                    page={currentPage}
                    count={countPages}
                    onChange={handleChangePagination}
                    color="primary"
                  />
                </ThemeProvider>
              </Stack>
            </Fade>
          )}
        </Wrapper>
      </Section>
    </>
  );
};

export default SearchPage;
