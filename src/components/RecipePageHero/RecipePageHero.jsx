import Time from 'components/Time/Time';
import React from 'react';
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
  // const [favouriteRecipe, setFavourite] = useState(false);
  const dispatch = useDispatch();
  return (
    <RecipeBackground>
      <Section>
        <Wrapper>
          <RecipeHeroBox>
            <h1>{title}</h1>
            {description && <p>{description}</p>}

            {/* {favorite ? (
              <button onClick={() => dispatch(toggleFavouriteRecipes(id))}>
                Remove from favorite recipes
              </button>
            ) : (
              <button
                onClick={
                  (() => setFavourite(true),
                  dispatch(toggleFavouriteRecipes(id)))
                }
              >
                Add to favorite recipes
              </button>
            )} */}

            {!favorite && (
              <button onClick={dispatch(toggleFavouriteRecipes(id))}>
                Add to favorite recipes
              </button>
            )}
            {favorite && (
              <button onClick={() => dispatch(toggleFavouriteRecipes(id))}>
                Remove from favorite recipes
              </button>
            )}
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
