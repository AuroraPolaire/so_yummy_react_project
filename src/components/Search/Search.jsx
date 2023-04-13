import React from 'react';
import { Formik } from 'formik';
import { SearchBox, StyledInput } from './Search.styled';

const Search = () => {
  return (
    <Formik
      initialValues={{ searchQuery: '' }}
      // validationSchema={}
      onSubmit={values => {
        // dispatch(register(values))
        //   .unwrap()
        //   .then(data => navigate('/contacts'))
        //   .catch(error => navigate('/'));
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
