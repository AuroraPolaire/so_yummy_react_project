import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchedRecipesList from 'components/SearchedRecepiesList/SearchedRecepiesList';
import { searchRecipes } from 'redux/search/searchOperations';
import { selectResults, selectTotalResults, selectSearchType } from 'redux/search/searchSelectors';
import { Section, Wrapper } from 'components/theme/GlobalContainer';
import PageTitle from 'components/PageTitle/PageTitle';
import Squares from 'components/Squares/Squares';
import Pagination from '@mui/material/Pagination';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import MuiProviderTheme from 'components/MuiProviderTheme/MuiProviderTheme';

const SearchPage = () => {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const [page, setPage] = useState(1);
  const searchType = useSelector(selectSearchType);
  const totalResults = useSelector(selectTotalResults);
  const results = useSelector(selectResults);
  

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    dispatch(searchRecipes(query));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePageChange = (event, value) => {
  setPage(value);
  dispatch(searchRecipes(query, value, searchType)); // добавляем searchType
};

  return (
    <>
      <Squares />
      <Section>
        <Wrapper>
          <PageTitle type={'searchPage'}>Search</PageTitle>
          <SearchBar searchType={searchType} query={query} />
          <SearchedRecipesList results={results.items} />
          {totalResults > 0 && (
            <Fade in={true}>
              <Stack spacing={2}>
                <ThemeProvider theme={MuiProviderTheme}>
                  <Pagination
                    count={Math.ceil(totalResults / 12)}
                    color="primary"
                    page={page}
                    onChange={handlePageChange}
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