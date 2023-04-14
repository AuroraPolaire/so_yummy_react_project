import PageTitle from 'components/PageTitle/PageTitle';
import RecipeCard from 'components/RecipeCard/RecipeCard';
import React, { useLayoutEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { selectRecipesMainPage } from 'redux/recipes/recipesSelectors';
import {
  ButtonContainer,
  List,
  SeeAllButton,
} from './PreviewCategories.styled';

const PreviewCategories = () => {
  const randomRecipes = useSelector(selectRecipesMainPage);
  const list = Object.entries(randomRecipes);

  const [size, setSize] = useState([0, 0]);

  useLayoutEffect(() => {
    function updateSize() {
      setSize([window.innerWidth]);
    }
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const filteredRecipesList = recipe => {
    if (!recipe) return;

    if (Number(size) < 767) {
      const mobileList = recipe.slice(0, 1);
      return mobileList;
    }

    if (Number(size) >= 767 && Number(size) < 1440) {
      const tabletList = recipe.slice(0, 2);
      return tabletList;
    }

    return recipe;
  };

  return list.flatMap(item => {
    return (
      <div key={item[0]}>
        <PageTitle type="categoryPage">{item[0]}</PageTitle>
        <List>
          <RecipeCard recipe={filteredRecipesList(item[1])} />
        </List>
        <ButtonContainer>
          <SeeAllButton type="button">See all</SeeAllButton>
        </ButtonContainer>
      </div>
    );
  });
};

export default PreviewCategories;
