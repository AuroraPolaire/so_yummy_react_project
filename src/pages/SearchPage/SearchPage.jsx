import { useSearchParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainTitle from 'components/MainTitle/MainTitle';
import SearchBar from 'components/SearchBar/SearchBar';
import SearchedRecipesList from 'components/SearchedRecepiesList/SearchedRecepiesList';
import { searchRecipes, searchIngredient } from 'redux/auth/searchOperations';
import {
  selectSearchType,
  selectTotalResults,
  selectStatus,
} from 'redux/auth/authSelectors';

const SearchPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchType = useSelector(selectSearchType);
  const totalResults = useSelector(selectTotalResults);

  const dispatch = useDispatch();
  const query = searchParams.get('query');

  const page = searchParams.get('page') ? Number(searchParams.get('page')) : 1;

  useEffect(() => {
    if (!query) {
      return;
    }

    if (searchType === 'title') {
      dispatch(searchRecipes({ query, page }));
    } else {
      dispatch(searchIngredient({ query, page }));
    }
  }, [dispatch, page, query, searchType, totalResults]);
  return (
    <>
      <MainTitle text="Search" />
      <SearchBar />
      <SearchedRecipesList />
      </>
  );
};

export default SearchPage;