import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchRecipe } from 'redux/recipes/recipesOperations';
import {
  selectCurrentRecipe,
  // selectError,
  // selectIsLoading,
} from 'redux/recipes/recipesSelectors';
// import PropTypes from 'prop-types'

// /recipe/640cd5ac2d9fecf12e8898a6 --- Salmon Eggs Eggs Benedict
const RecipePage = props => {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);
  const { recipeId } = useParams();

  useEffect(() => {
    dispatch(fetchRecipe(recipeId));
  }, [dispatch, recipeId]);

  const currentRecipe = useSelector(selectCurrentRecipe);

  if (currentRecipe !== null) {
    const { title, description, time, instructions, ingredients } =
      currentRecipe;
    return (
      <>
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {/* TODO: Додати перевірку, чи власний це рецепт, або з загальної бази даних. Власні рецепти користувача не мають такої кнопки */}
        <button>Add to favorite recipes</button>
        {time && <p>{time} min</p>}
        <table>
          <thead>
            <tr>
              <th colSpan="2">Ingredients</th>
              <th>Number</th>
              <th>Add to list</th>
            </tr>
          </thead>
          <tbody>
            {ingredients.map(({ measure, title, _id, thumb }) => (
              <tr key={_id}>
                <td>
                  <img src={thumb} alt={title} />
                </td>
                <td>{title}</td>
                <td>{measure}</td>
                <td>
                  <input type="checkbox" name="shoppingList" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h2>Recipe Preparation</h2>
        {/* TODO: Додати зображення + якщо це рецепт поточного користувача, то потрібно розбити інстуркції на кроки */}
        {instructions && <p>{instructions}</p>}
      </>
    );
  }
};

// RecipePage.propTypes = {}

export default RecipePage;
