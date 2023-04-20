import {
  fetchRecipe,
  fetchRecipesMainPage,
  fetchCategoryList,
  fetchRecipesByCategory,
  fetchAllRecipes,
  fetchOneRecipe,
  addRecipe,
} from './recipesOperations';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  recipesMainPage: {},
  isLoading: false,
  error: false,
  currentRecipe: null,
  allRecipe: {},
  categoryList: [],
  recipesByCategoryList: {},
  oneOwnRecipe: null,
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
      // ---------All RECIPES-----------
      .addCase(fetchAllRecipes.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchAllRecipes.fulfilled, (state, action) => {
        state.allRecipe = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchAllRecipes.rejected, state => {
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
      // ---- GET oneOwnRecipe ----
      .addCase(fetchOneRecipe.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchOneRecipe.fulfilled, (state, action) => {
        state.oneOwnRecipe = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(fetchOneRecipe.rejected, state => {
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
