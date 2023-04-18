import {
  fetchRecipe,
  fetchRecipesMainPage,
  fetchCategoryList,
  fetchRecipesByCategory,
  fetchMyRecipes,
  fetchFavoritRecipes,
  addRecipe,
  removeRecipeFromMyList,
  removeRecipeFromFavoriteList,
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
  favoriteRecipeStatus: {},
  removeRecipeStatus: {},
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
      // ---- GET Favorite Recipes ----
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
      // ---- delete Favorite Recipe ----
      .addCase(removeRecipeFromFavoriteList.pending, state => {
        state.favoriteRecipeStatus = {};
        state.isLoading = true;
        state.error = false;
      })
      .addCase(removeRecipeFromFavoriteList.fulfilled, (state, action) => {
        state.favoriteRecipeStatus = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(removeRecipeFromFavoriteList.rejected, state => {
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
      })

      // ---- delete My Recipe ----
      .addCase(removeRecipeFromMyList.pending, state => {
        state.removeRecipeStatus = {};
        state.isLoading = true;
        state.error = false;
      })
      .addCase(removeRecipeFromMyList.fulfilled, (state, action) => {
        state.removeRecipeStatus = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(removeRecipeFromMyList.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      // ---- ADD Recipe ----
      .addCase(addRecipe.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(addRecipe.fulfilled, (state, action) => {
        state.currentRecipe = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(addRecipe.rejected, state => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const recipesReducer = recipesSlice.reducer;
