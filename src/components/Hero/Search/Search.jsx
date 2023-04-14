import React from 'react';

import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { SearchBox, StyledInput } from './Search.styled';

const Search = () => {
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ searchQuery: '' }}
      // validationSchema={}
      onSubmit={values => {
        // dispatch(register(values))
        //   .unwrap()
        //   .then(data => navigate('/contacts'))
        //   .catch(error => navigate('/'));
        navigate('/search'); // Переход на страницу SearchPage
      }}
    >
      {({ isSubmitting, errors }) => (
        <SearchBox>
          <div width="500px">
            <StyledInput
              type="text"
              name="category"
              placeholder="Enter the text"
            ></StyledInput>
            {errors.name}
            <button type="searchQuery" mr={3} disabled={isSubmitting}>
              Search
            </button>
          </div>
        </SearchBox>
      )}
    </Formik>
  );
};

export default Search;
