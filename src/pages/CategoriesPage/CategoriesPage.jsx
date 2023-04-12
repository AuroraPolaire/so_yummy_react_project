import React from 'react';
import PageTitle from 'components/PageTitle/PageTitle';
import { Wrapper } from 'components/theme/GlobalContainer';
import CategoriesTabPanel from 'components/CategoriesTabPanel/CategoriesTabPanel';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCategoryList } from 'redux/recipes/recipesOperations';
// import PropTypes from 'prop-types'

const CategoriesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoryList());
  }, [dispatch]);
  return (
    <>
      <Wrapper>
        <PageTitle>Categories</PageTitle>
        <CategoriesTabPanel></CategoriesTabPanel>
      </Wrapper>
    </>
  );
};

// CategoriesPage.propTypes = {}

export default CategoriesPage;
