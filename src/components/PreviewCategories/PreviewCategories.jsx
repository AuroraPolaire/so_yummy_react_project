import React from 'react';
import { useSelector } from 'react-redux';
import { selectRecipesMainPage } from 'redux/recipes/recipesSelectors';

const PreviewCategories = () => {
  const randomRecipes = useSelector(selectRecipesMainPage);
  const list = Object.entries(randomRecipes);

  return list.flatMap(item => {
    return (
      <>
        <h2>{item[0]}</h2>
        <ul>
          {item[1].map(item => {
            return (
              <>
                <img src={item.preview} alt={item.title} />
                <p>{item.title}</p>
              </>
            );
          })}
        </ul>
      </>
    );
  });
};

export default PreviewCategories;
