import { useDispatch } from 'react-redux';

import {
  SelectorWrapper,
  SelectorText,
  TypeSelector,
  SelectorOption,
} from './SearchTypeSelector.styled';

import { changeSearchType } from 'redux/search/searchSlice';

const SearchTypeSelector = ({ searchType }) => {
  const dispatch = useDispatch();

  const handleChange = e => {
    dispatch(changeSearchType(e.target.value));
  };

  return (
    <SelectorWrapper>
      <SelectorText>Search by:</SelectorText>
      <TypeSelector defaultValue={searchType} onChange={handleChange}>
        <SelectorOption value="title">Title</SelectorOption>
        <SelectorOption value="ingredient">Ingredient</SelectorOption>
      </TypeSelector>
    </SelectorWrapper>
  );
};

export default SearchTypeSelector;
