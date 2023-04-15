import Time from 'components/Time/Time';
import React from 'react';
import { RecipeBackground, RecipeHeroBox } from './RecipePageHero.styled';
import SVG from '../../images/icons/sprite.svg';
import { Section, Wrapper } from 'components/theme/GlobalContainer';

export default function RecipePageHero({ title, description, favorite, time }) {
  return (
    <RecipeBackground>
      <Section>
        <Wrapper>
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
        </Wrapper>
      </Section>
    </RecipeBackground>
  );
}
