import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';

import { SearchBox, StyledInput } from './Search.styled';

const Search = () => {
  const navigate = useNavigate();
  // const [searchParams, setSearchParams] = useSearchParams('');
  // const searchQuery = searchParams.get('query') ?? '';
  // console.log(searchQuery);

  // useEffect(() => {
  //   const currentParams = Object.fromEntries([...searchParams]);
  //   console.log(currentParams.query); // get new values onchange
  // }, [searchParams]);

  // const updateQueryString = query => {
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
      initialValues={{ searchQuery: '' }}
      validationSchema={validationSchema}
      onSubmit={values => {
        console.log(values);
        navigate({
          pathname: '/search',
          search: `?query=${values.searchQuery}`,
        });
      }}
    >
      {({ errors }) => (
        <SearchBox>
          <div width="500px">
            <StyledInput
              type="text"
              name="searchQuery"
              placeholder="Enter the text"
            />
            {errors.searchQuery ? <div>{errors.searchQuery}</div> : null}
            <button type="submit">Search</button>
          </div>
        </SearchBox>
      )}
    </Formik>
  );
};

export default Search;
