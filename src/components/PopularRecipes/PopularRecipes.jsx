import React from 'react';
import { List, Title } from './PopularRecipes.styled';
import { useSelector } from 'react-redux';
import { selectAllRecipe } from 'redux/recipes/recipesSelectors';
import PopularRecipesItem from 'components/PopularRecipesItem/PopularRecipesItem';

const PopularRecipes = () => {
  const responce = useSelector(selectAllRecipe);
  const allRecipes = Object.entries(responce);
  return (
    <>
      {allRecipes.map((item, key) => {
        return (
          <div key={item[0]}>
            {key === 0 ? (
              <>
                <Title>Popular recipe</Title>
                <List className={item[1]}>
                  <PopularRecipesItem recipe={item[1]}></PopularRecipesItem>
                </List>
              </>
            ) : null}
          </div>
        );
      })}
    </>
  );
};

export default PopularRecipes;
