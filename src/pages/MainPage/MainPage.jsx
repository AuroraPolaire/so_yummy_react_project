// import ChooseYurBreakfast from 'components/ChooseYourBreakfast/ChooseYourBreakfast';
import { Button, ButtonContainer } from './MainPage.styled';
import Hero from 'components/Hero/Hero';
import PreviewCategories from 'components/PreviewCategories/PreviewCategories';
import { Wrapper } from 'components/theme/GlobalContainer';
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { fetchRecipesMainPage } from 'redux/recipes/recipesOperations';
import { Link } from 'react-router-dom';

const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRecipesMainPage());
  }, [dispatch]);

  return (
    <>
      <Hero />
      <Wrapper>
        <PreviewCategories />
        <ButtonContainer>
          <Link to="/categories/beef">
            <Button onClick={e => window.scrollTo(0, 0)}>
              Other Categories
            </Button>
          </Link>
        </ButtonContainer>
      </Wrapper>
    </>
  );
};

export default MainPage;
