import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { NavLink, useSearchParams } from 'react-router-dom';

import { SearchBox, StyledInput } from './Search.styled';

const Search = () => {
  // const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams('');
  const searchQuery = searchParams.get('query') ?? '';

  const updateQueryString = query => {
    const nextParams = query !== '' ? { query } : {};
    setSearchParams(nextParams);
  };

  const searchSchema = Yup.object().shape({
    searchQuery: Yup.string()
      .min(3, 'Too Short!')
      .max(40, 'Must be 40 characters or less')
      .required('Required')
      .matches(
        /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
        'Name may contain only letters, apostrophe, dash and spaces.'
      ),
  });

  return (
    <Formik
      initialValues={{ searchQuery: '' }}
      validationSchema={searchSchema}
      // onSubmit={values => {
      //   navigate(`/categories/${searchQuery}`);
      // }}
    >
      {props => (
        <SearchBox>
          {/* <FormObserver /> */}
          <div width="500px">
            <StyledInput
              type="text"
              name="searchQuery"
              placeholder="Enter the text"
              onChange={e => {
                updateQueryString(e.target.value);
              }}
              // value={updateQueryString(props.values.searchQuery)}
              value={searchQuery}
            />
            <NavLink to={`/search/${searchQuery}`}>
              <button type="submit">Search</button>
            </NavLink>
          </div>
        </SearchBox>
      )}
    </Formik>
  );
};

export default Search;
