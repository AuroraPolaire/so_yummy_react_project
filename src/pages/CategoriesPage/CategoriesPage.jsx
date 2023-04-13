import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Wrapper } from 'components/theme/GlobalContainer';
import CategoriesTabPanel from 'components/CategoriesTabPanel/CategoriesTabPanel';
import PageTitle from 'components/PageTitle/PageTitle';
import {
  fetchCategoryList,
  fetchRecipesByCategory,
} from 'redux/recipes/recipesOperations';

const CategoriesPage = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    const query = location.pathname.split('/')[2];
    const formattedQuery = query.charAt(0).toUpperCase() + query.slice(1);

    dispatch(fetchCategoryList());
    dispatch(
      fetchRecipesByCategory({
        categoryName: formattedQuery,
      })
    );
  }, [dispatch, location]);
  return (
    <>
      <Wrapper>
        <PageTitle type="mainPage">Categories</PageTitle>
        <CategoriesTabPanel state={{ from: location }}></CategoriesTabPanel>
      </Wrapper>
    </>
  );
};

export default CategoriesPage;
