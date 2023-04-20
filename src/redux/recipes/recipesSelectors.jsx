export const selectRecipesMainPage = state => state.recipes.recipesMainPage;
export const selectIsLoading = state => state.recipes.isLoading;
export const selectError = state => state.recipes.error;
export const selectCurrentRecipe = state => state.recipes.currentRecipe;
export const selectOneOwnRecipe = state => state.recipes.oneOwnRecipe;
export const selectCategoryList = state => state.recipes.categoryList;
export const selectRecipesByCategoryList = state =>
  state.recipes.recipesByCategoryList;
export const selectAllRecipe = state => state.recipes.allRecipe;
