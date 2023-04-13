import PageTitle from 'components/PageTitle/PageTitle';
import RecipeCard from 'components/RecipeCard/RecipeCard';
import React from 'react';
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

  let mobileMedia = window.matchMedia('(max-width: 767px)');
  let tabletMedia = window.matchMedia(
    '(min-width: 768px) and (max-width: 1240px)'
  );
  let desktopMedia = window.matchMedia('(min-width: 1240px)');

  const filteredRecipesList = recipe => {
    if (!recipe) return;
    if (mobileMedia.matches) {
      const mobileList = recipe.slice(0, 1);
      return mobileList;
    } else if (tabletMedia.matches) {
      const tabletList = recipe.slice(0, 2);
      return tabletList;
    } else if (desktopMedia.matches) {
      return recipe;
    }
  };

  return list.flatMap(item => {
    return (
      <div key={item[0]}>
        <PageTitle type="mainPage">{item[0]}</PageTitle>
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
