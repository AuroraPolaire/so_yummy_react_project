import { useDispatch, useSelector } from 'react-redux';

import {
  SelectorWrapper,
  SelectorText,
  TypeSelector,
  SelectorOption,
} from './SearchTypeSelector.styled';

import { changeSearchType } from 'redux/search/searchSlice';

import { selectSearchType } from 'redux/auth/authSelectors';
import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchTypeSelector = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();
  const searchType = useSelector(selectSearchType);
  const queryType = searchParams.get('type');

  const handleChange = e => {
    dispatch(changeSearchType(e.target.value));
  };

  useEffect(() => {
    if (queryType === 'ingredients') {
      dispatch(changeSearchType(queryType));
      searchParams.delete('type');
      setSearchParams(searchParams);
    }
  }, [dispatch, queryType, searchParams, setSearchParams]);

  return (
    <SelectorWrapper>
      <SelectorText>Search by:</SelectorText>
      <TypeSelector value={searchType} onChange={handleChange}>
        <SelectorOption value="title">Title</SelectorOption>
        <SelectorOption value="ingredients">Ingredients</SelectorOption>
      </TypeSelector>
    </SelectorWrapper>
  );
};

export default SearchTypeSelector;
