import React from 'react';

const RecipeCard = ({ recipe }) => {
  let mobileMedia = window.matchMedia('(max-width: 376px)');
  let tabletMedia = window.matchMedia(
    '(min-width: 377px) and (max-width: 769px)'
  );
  let desktopMedia = window.matchMedia('(min-width: 770px)');

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
  console.log(filteredRecipesList(recipe));

  return filteredRecipesList(recipe).map(item => {
    return (
      <div className="card" key={item._id}>
        <img src={item.preview} alt={item.title} />
        <p className="title">{item.title}</p>
      </div>
    );
  });
};

export default RecipeCard;
