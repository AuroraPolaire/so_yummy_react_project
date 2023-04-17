import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainTitle from 'components/MainTitle/MainTitle';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchedRecipesList from 'components/SearchedRecepiesList/SearchedRecepiesList';
import { searchRecipes, searchIngredient } from 'redux/search/searchOperations';
import {
  selectSearchType,
  selectTotalResults,
} from 'redux/search/searchSelectors';
import { Section, Wrapper } from 'components/theme/GlobalContainer';
import PageTitle from 'components/PageTitle/PageTitle';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const searchType = useSelector(selectSearchType);
  const totalResults = useSelector(selectTotalResults);

  const dispatch = useDispatch();
  const query = searchParams.get('query');
  console.log(query);

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  useEffect(() => {
    if (!query) {
      return;
    }

    if (searchType === 'title') dispatch(searchRecipes({ query, page }));

    if (searchType === 'ingredient')
      dispatch(searchIngredient({ query, page }));
  }, [dispatch, page, query, searchType, totalResults]);
  return (
    <>
      <Section>
        <Wrapper>
          <PageTitle type={'searchPage'}>Search</PageTitle>
          {/* <MainTitle text="Search" /> */}
          <SearchBar />
          <SearchedRecipesList />
        </Wrapper>
      </Section>
    </>
  );
};

export default SearchPage;
