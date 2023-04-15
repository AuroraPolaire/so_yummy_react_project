export const selectRecipesMainPage = state => state.recipes.recipesMainPage;
export const selectIsLoading = state => state.recipes.isLoading;
export const selectError = state => state.recipes.error;
export const selectCurrentRecipe = state => state.recipes.currentRecipe;
export const selectCategoryList = state => state.recipes.categoryList;
export const selectRecipesByCategoryList = state =>
  state.recipes.recipesByCategoryList;
export const selectFavoritRecipesList = state =>
  state.recipes.favoritRecipesList;
export const selectMyRecipesList = state => state.recipes.myRecipesList;
