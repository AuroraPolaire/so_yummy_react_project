import Time from 'components/Time/Time';
import React, { useState } from 'react';
import { RecipeBackground, RecipeHeroBox } from './RecipePageHero.styled';
import SVG from '../../images/icons/sprite.svg';
import { Section, Wrapper } from 'components/theme/GlobalContainer';
import { useDispatch } from 'react-redux';
import { toggleFavouriteRecipes } from 'redux/favourite/favouriteOperations';

export default function RecipePageHero({
  title,
  description,
  favorite,
  time,
  id,
}) {
  // console.log(favorite);
  const [favouriteRecipe, setFavourite] = useState(favorite);
  const dispatch = useDispatch();
  return (
    <RecipeBackground>
      <Section page={'recipePage'}>
        <Wrapper>
          <RecipeHeroBox>
            <h1>{title}</h1>
            {description && <p>{description}</p>}
            <button
              className={favouriteRecipe ? 'favourite' : 'not-favourite'}
              onClick={() =>
                dispatch(
                  toggleFavouriteRecipes(id),
                  setFavourite(!favouriteRecipe)
                )
              }
            >
              {favouriteRecipe
                ? 'Remove from favorite recipes'
                : 'Add to favorite recipes'}
            </button>

            {/* {!favorite && (
              <button onClick={dispatch(toggleFavouriteRecipes(id))}>
                Add to favorite recipes
              </button>
            )}
            {favorite && (
              <button onClick={() => dispatch(toggleFavouriteRecipes(id))}>
                Remove from favorite recipes
              </button>
            )} */}
            {time.length > 0 && (
              <div>
                <svg>
                  <use href={`${SVG}#icon-clock`}></use>
                </svg>
                <Time minutes={parseInt(time)} />
              </div>
            )}
          </RecipeHeroBox>
        </Wrapper>
      </Section>
    </RecipeBackground>
  );
}
