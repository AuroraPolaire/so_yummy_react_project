import React from 'react';
import { List, Title } from './PopularRecipes.styled';
import { useSelector } from 'react-redux';
import { selectAllRecipe } from 'redux/recipes/recipesSelectors';
import PopularRecipesItem from 'components/PopularRecipesItem/PopularRecipesItem';
import { FollowUs } from 'components/FollowUs/FollowUs';

const PopularRecipes = () => {
  const responce = useSelector(selectAllRecipe);
  const allRecipes = Object.entries(responce);
  return (
    <div>
      <Title className="linksTitle"> Follow us</Title>
      <FollowUs type="addRecipePage"></FollowUs>
      {allRecipes.map((item, key) => {
        return key === 0 ? (
          <div key={item[0]}>
            <Title>Popular recipe</Title>
            <List className={item[1]}>
              <PopularRecipesItem recipe={item[1]}></PopularRecipesItem>
            </List>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default PopularRecipes;
