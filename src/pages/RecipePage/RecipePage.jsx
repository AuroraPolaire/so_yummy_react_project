import IngredientsTable from 'components/IngredientsTable/IngredientsTable';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import { Wrapper } from 'components/theme/GlobalContainer';
import Time from 'components/Time/Time';
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
  console.log(recipeId);
  // const recipeId = '640cd5ac2d9fecf12e8898a6';

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
      <Wrapper>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {!favorite && <button>Add to favorite recipes</button>}
        {time.length > 0 && <Time minutes={parseInt(time)} />}
        <IngredientsTable ingredients={ingredients} />
        {instructions && (
          <RecipePreparation
            instructions={instructions}
            previewImg={previewImg}
            alt={title}
          />
        )}
      </Wrapper>
    );
  }
};

export default RecipePage;
