import React from 'react';
import { useSelector } from 'react-redux';
import { selectRecipesMainPage } from 'redux/recipes/recipesSelectors';
import { List } from './PreviewCategories.styled';

const PreviewCategories = () => {
  const randomRecipes = useSelector(selectRecipesMainPage);
  const list = Object.entries(randomRecipes);

  return list.flatMap(item => {
    return (
      <div key={item[0]}>
        <h2>{item[0]}</h2>
        <List>
          {item[1].map(item => {
            return (
              <div className="card" key={item._id}>
                <img src={item.preview} alt={item.title} />
                <p className="title">{item.title}</p>
              </div>
            );
          })}
        </List>
      </div>
    );
  });
};

export default PreviewCategories;
