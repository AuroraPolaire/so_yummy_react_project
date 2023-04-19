import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchedRecipesList from 'components/SearchedRecepiesList/SearchedRecepiesList';
import { searchRecipes } from 'redux/search/searchOperations';
import { selectSearchType } from 'redux/search/searchSelectors';
import { Section, Wrapper } from 'components/theme/GlobalContainer';
import PageTitle from 'components/PageTitle/PageTitle';
import Squares from 'components/Squares/Squares';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchType = useSelector(selectSearchType);

  const dispatch = useDispatch();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;
    dispatch(searchRecipes(query));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Squares />
      <Section>
        <Wrapper>
          <PageTitle type={'searchPage'}>Search</PageTitle>
          <SearchBar searchType={searchType} query={query} />
          <SearchedRecipesList />
        </Wrapper>
      </Section>
    </>
  );
};
export default SearchPage;
