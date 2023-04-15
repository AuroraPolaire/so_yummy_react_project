import {
  fetchRecipe,
  fetchRecipesMainPage,
  fetchCategoryList,
  fetchRecipesByCategory,
  fetchMyRecipes,
  fetchFavoritRecipes,
} from './recipesOperations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipesMainPage: {},
  isLoading: false,
  error: false,
  currentRecipe: null,

  categoryList: [],
  recipesByCategoryList: {},
  favoritRecipesList: {},
  myRecipesList: {},
};

//   ------------------Random 4 categories for main page -----------//

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchRecipesMainPage.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchRecipesMainPage.fulfilled, (state, action) => {
        state.recipesMainPage = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchRecipesMainPage.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      // ---- GET RECIPE BY ID FROM GENERAL RECIPES DATABASE ----
      .addCase(fetchRecipe.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchRecipe.fulfilled, (state, action) => {
        state.currentRecipe = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchRecipe.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      // ---- GET CATEGORY LIST ----
      .addCase(fetchCategoryList.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchCategoryList.fulfilled, (state, action) => {
        state.categoryList = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchCategoryList.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      // ---- GET Recipes by Category ----
      .addCase(fetchRecipesByCategory.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchRecipesByCategory.fulfilled, (state, action) => {
        state.recipesByCategoryList = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchRecipesByCategory.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      // ---- GET Favorit Recipes ----
      .addCase(fetchFavoritRecipes.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchFavoritRecipes.fulfilled, (state, action) => {
        state.favoritRecipesList = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchFavoritRecipes.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      // ---- GET My Recipes ----
      .addCase(fetchMyRecipes.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchMyRecipes.fulfilled, (state, action) => {
        state.myRecipesList = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchMyRecipes.rejected, state => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const recipesReducer = recipesSlice.reducer;
