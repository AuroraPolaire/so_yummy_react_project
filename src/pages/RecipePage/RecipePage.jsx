import RecipeInngredientsList from 'components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import { Section, Wrapper } from 'components/theme/GlobalContainer';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipe } from 'redux/recipes/recipesOperations';
import { selectCurrentRecipe } from 'redux/recipes/recipesSelectors';

// /recipe/640cd5ac2d9fecf12e8898a6 --- to test
// 640cd5ac2d9fecf12e8898a3 ---- to test time in hours
// 640cd5ac2d9fecf12e8898ae --- to test no time and no description
const RecipePage = props => {
  const dispatch = useDispatch();
  const { recipeId } = useParams();

  useEffect(() => {
    dispatch(fetchRecipe(recipeId));
  }, [dispatch, recipeId]);

  const currentRecipe = useSelector(selectCurrentRecipe);

  if (currentRecipe !== null) {
    const {
      title,
      description,
      time,
      instructions,
      ingredients,
      favorite,
      previewImg,
    } = currentRecipe;

    return (
      <Section>
        <Wrapper>
          <RecipePageHero
            title={title}
            description={description}
            time={time}
            favorite={favorite}
          />
          <RecipeInngredientsList ingredients={ingredients} />
          {instructions && (
            <RecipePreparation
              instructions={instructions}
              previewImg={previewImg}
              alt={title}
            />
          )}
        </Wrapper>
      </Section>
    );
  }
};

export default RecipePage;