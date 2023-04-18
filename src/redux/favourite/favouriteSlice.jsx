import {
  fetchFavouriteRecipes,
  toggleFavouriteRecipes,
} from './favouriteOperations';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  favouriteRecipes: {
    recipes: [],
    total: 0,
  },
  isLoading: false,
  error: false,
};

const favouriteRecipesSlice = createSlice({
  name: 'favouriteRecipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchFavouriteRecipes.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchFavouriteRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.favouriteRecipes.recipes = action.payload.recipes;
        state.favouriteRecipes.total = action.payload.total;
      })
      .addCase(fetchFavouriteRecipes.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(toggleFavouriteRecipes.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(toggleFavouriteRecipes.fulfilled, (state, action) => {
        console.log(action.payload);
        const index = state.favouriteRecipes.recipes.findIndex(
          recipe => recipe._id === action.payload._id
        );
        state.favouriteRecipes.recipes[index] = action.payload;
        state.isLoading = false;
        state.error = false;
      })
      .addCase(toggleFavouriteRecipes.rejected, state => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export const favouriteRecipesReducer = favouriteRecipesSlice.reducer;
