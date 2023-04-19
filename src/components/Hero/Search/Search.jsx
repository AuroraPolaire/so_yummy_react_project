import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { SearchBox, StyledInput } from './Search.styled';
import { changeSearchType } from 'redux/search/searchSlice';
import { useDispatch } from 'react-redux';

const Search = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams('');
  const searchQuery = searchParams.get('query') ?? '';
  console.log(searchQuery);

  // useEffect(() => {
  //   const currentParams = Object.fromEntries([...searchParams]);
  //   console.log(currentParams.query); // get new values onchange
  // }, [searchParams]);

  // const updateQueryString = e => {
  //   let query = e.target.value;
  //   console.log(query);
  //   const nextParams = query !== '' ? { query } : {};
  //   setSearchParams(nextParams);
  // };

  const validationSchema = Yup.object().shape({
    searchQuery: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  return (
    <Formik
      initialValues={{ query: '' }}
      validationSchema={validationSchema}
      onSubmit={({ query }) => {
        console.log(query);
        dispatch(changeSearchType('title'));
        navigate({
          pathname: '/search',
          search: `?query=${query}`,
        });
        window.scrollTo(0, 0);
      }}
    >
      {({ errors, handleSubmit }) => {
        return (
          <SearchBox>
            <div width="500px">
              <StyledInput
                onSubmit={handleSubmit}
                type="text"
                name="query"
                placeholder="Enter the text"
              />
              {errors.searchQuery ? (
                <div className="error">{errors.searchQuery}</div>
              ) : null}
              <button type="submit">Search</button>
            </div>
          </SearchBox>
        );
      }}
    </Formik>
  );
};

export default Search;
