import PageTitle from 'components/PageTitle/PageTitle';
import RecipeCard from 'components/RecipeCard/RecipeCard';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectRecipesMainPage } from 'redux/recipes/recipesSelectors';
import { List } from './PreviewCategories.styled';

const PreviewCategories = () => {
  const randomRecipes = useSelector(selectRecipesMainPage);
  const list = Object.entries(randomRecipes);

  // let mobileMedia = window.matchMedia('(max-width: 376px)');
  // let tabletMedia = window.matchMedia(
  //   '(min-width: 377px) and (max-width: 768px)'
  // );
  // let desktopMedia = window.matchMedia('(min-width: 769px)');
  // console.log(mobileMedia);
  // console.log(tabletMedia);

  // console.log(desktopMedia);

  // console.log((document.querySelector('.mq-value').innerText = mql.matches));

  return list.flatMap(item => {
    return (
      <div key={item[0]}>
        <PageTitle type="mainPage">{item[0]}</PageTitle>
        <List>
          <RecipeCard recipe={item[1]} />
          {/* {item[1].map(item => {
            return (
              <div className="card" key={item._id}>
                <img src={item.preview} alt={item.title} />
                <p className="title">{item.title}</p>
              </div>
            );
          })} */}
        </List>
        <button type="button">See all</button>
      </div>
    );
  });
};

export default PreviewCategories;
