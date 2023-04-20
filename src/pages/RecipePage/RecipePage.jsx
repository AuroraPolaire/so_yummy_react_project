import RecipeInngredientsList from 'components/RecipeInngredientsList/RecipeInngredientsList';
import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import { Wrapper } from 'components/theme/GlobalContainer';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipe } from 'redux/recipes/recipesOperations';
import { fetchOneRecipe } from 'redux/recipes/recipesOperations';
import { selectCurrentRecipe } from 'redux/recipes/recipesSelectors';
import { selectOneOwnRecipe } from 'redux/recipes/recipesSelectors';
import { fetchShoppingList } from 'redux/shoppingList/shoppingListOperations';
import {
  selectShoppingList,
  selectShoppingListError,
  selectShoppingListIsLoading,
} from 'redux/shoppingList/shoppingListSelectors';
import Loader from 'components/Loader/Loader';
import { ShoppingListLoader } from 'pages/ShoppingListPage/ShoppingListPage.styled';
import { Notify } from 'notiflix';
import defMobile1 from '../../images/ingredients/ingredient-def@1px.jpg';
import defMobile2 from '../../images/ingredients/ingredient-def@2px.jpg';
import defTablet1 from '../../images/ingredients/ingredient-def-768@1px.jpg';
import defTablet2 from '../../images/ingredients/ingredient-def-768@2px.jpg';
import defDesktop1 from '../../images/ingredients/ingredient-def-1400@1px.jpg';
import defDesktop2 from '../../images/ingredients/ingredient-def-1400@2px.jpg';

// /recipe/640cd5ac2d9fecf12e8898a6 --- to test
// 640cd5ac2d9fecf12e8898a3 ---- to test time in hours
// 640cd5ac2d9fecf12e8898ae --- to test no time and no description
function DefaultIngredientPicture() {
  return (
    <picture>
      <source srcSet={`${defMobile1} 1x, ${defMobile2} 2x`} media="(max-width: 768px)" />
      <source srcSet={`${defTablet1} 1x, ${defTablet2} 2x`} media="(min-width: 769px) and (max-width: 1439px)" />
      <source srcSet={`${defDesktop1} 1x, ${defDesktop2} 2x`} media="(min-width: 1440px)" />
      <img src={defDesktop1} alt="default ingredient" />
    </picture>
  );
}

const RecipePage = props => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { recipeId } = useParams();
  const prevPage = location.state && location.state.pathname;
  const products = useSelector(selectShoppingList);
  const shoppingListIsLoading = useSelector(selectShoppingListIsLoading);
  const shoppingListError = useSelector(selectShoppingListError);

  useEffect(() => {
    if (prevPage === '/my') {
      dispatch(fetchOneRecipe(recipeId));
    } else {
      dispatch(fetchRecipe(recipeId));
    }
  }, [dispatch, prevPage, recipeId]);

  useEffect(() => {
    if (products === null) {
      dispatch(fetchShoppingList());
    }

    if (shoppingListError !== null) {
      if (shoppingListError === 'Request failed with status code 403') {
        Notify.failure(
          'You have reached the maximum length (100) of your shopping list'
        );
      } else {
        Notify.failure(shoppingListError);
      }
    }
  }, [dispatch, products, shoppingListError]);

  const currentRecipe = useSelector(
    prevPage === '/my' ? selectOneOwnRecipe : selectCurrentRecipe
  );

  if (currentRecipe !== null) {
    const {
      title,
      description,
      time,
      instructions,
      ingredients,
      favorite,
      previewImg,
      preview,
    } = currentRecipe;

    return (
      <>
        <RecipePageHero
          title={title}
          description={description}
          time={time}
          favorite={favorite}
          id={recipeId}
        />
        <Wrapper>
          <RecipeInngredientsList ingredients={ingredients} />
          {instructions && (
            <RecipePreparation
              instructions={instructions}
              previewImg={previewImg || preview}
              alt={title}
            />
          )}

          {shoppingListIsLoading && (
            <ShoppingListLoader>
              <Loader />
            </ShoppingListLoader>
          )}
        </Wrapper>
      </>
    );
  }
};

export default RecipePage;
