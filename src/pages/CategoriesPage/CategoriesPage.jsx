import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Section, Wrapper } from 'components/theme/GlobalContainer';
import CategoriesTabPanel from 'components/CategoriesTabPanel/CategoriesTabPanel';
import PageTitle from 'components/PageTitle/PageTitle';
import {
  fetchCategoryList,
  fetchRecipesByCategory,
} from 'redux/recipes/recipesOperations';
import Squares from 'components/Squares/Squares';

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
    window.scrollTo(0, 100);
  }, [dispatch, location]);

  return (
    <>
      <Squares />
      <Section>
        <Wrapper>
          <PageTitle type="mainPage">Categories</PageTitle>
          <CategoriesTabPanel></CategoriesTabPanel>
        </Wrapper>
      </Section>
    </>
  );
};

export default CategoriesPage;
