import Time from 'components/Time/Time';
import React from 'react';
import { RecipeHeroBox } from './RecipePageHero.styled';
import SVG from '../../images/icons/sprite.svg';

export default function RecipePageHero({ title, description, favorite, time }) {
  return (
    <RecipeHeroBox>
      <h1>{title}</h1>
      {description && <p>{description}</p>}
      {!favorite && <button>Add to favorite recipes</button>}
      {favorite && <button>Remove from favorite recipes</button>}
      {time.length > 0 && (
        <div>
          <svg>
            <use href={`${SVG}#icon-clock`}></use>
          </svg>
          <Time minutes={parseInt(time)} />
        </div>
      )}
    </RecipeHeroBox>
  );
}
