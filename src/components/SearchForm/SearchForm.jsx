import { Formik } from 'formik';
import { useDispatch } from 'react-redux';

import { useSearchParams } from 'react-router-dom';
import { searchIngredient } from 'redux/search/searchOperations';

import {
  Form,
  SearchContainer,
  SearchValue,
  SearchBtn,
} from './SearchForm.styled';

const SearchForm = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const onSubmit = ({ query }) => {
    const trimmedQuery = query.trim();

    if (trimmedQuery === '') {
      setSearchParams();

      return null;
    }
    setSearchParams({ query: trimmedQuery, page: 1 });
    dispatch(searchIngredient(trimmedQuery, 1));
  };

  return (
    <Formik
      initialValues={{ query: searchParams.get('query') || '' }}
      onSubmit={onSubmit}
    >
      {({ handleSubmit, handleChange, values }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <SearchContainer>
              <SearchValue
                type="text"
                name="query"
                value={values.query}
                placeholder="Enter the text"
                onChange={handleChange}
              />
              <SearchBtn type="submit">Search</SearchBtn>
            </SearchContainer>
          </Form>
        );
      }}
    </Formik>
  );
};

export default SearchForm;
