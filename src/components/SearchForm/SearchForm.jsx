import { Formik } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';

import { useSearchParams } from 'react-router-dom';
import { searchIngredient, searchRecipes } from 'redux/search/searchOperations';

import {
  Form,
  SearchContainer,
  SearchValue,
  SearchBtn,
} from './SearchForm.styled';

const SearchForm = ({ searchType }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams('');
  const searchQuery = searchParams.get('query') ?? '';

  const updateQueryString = e => {
    let query = e.target.value;
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const validationSchema = Yup.object().shape({
    query: Yup.string('Only Latin Letters!')
      .matches(/^([^0-9]*)$/, 'Only Latin letters!')
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),
  });

  return (
    <Formik
      initialValues={{ query: '' }}
      validationSchema={validationSchema}
      onSubmit={values => {
        searchType === 'title' &&
          dispatch(searchRecipes({ query: searchQuery, page: 1 }));
        searchType === 'ingredient' &&
          dispatch(searchIngredient({ query: searchQuery, page: 1 }));
      }}
    >
      {({ handleSubmit, errors, setFieldValue }) => {
        return (
          <Form onSubmit={handleSubmit}>
            <SearchContainer>
              {errors.query ? (
                <div className="error">{errors.query}</div>
              ) : null}
              <SearchValue
                type="text"
                name="query"
                defaultValue={searchQuery}
                placeholder="Enter the text"
                onChange={event => {
                  updateQueryString(event);
                  setFieldValue('query', event.target.value);
                }}
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
