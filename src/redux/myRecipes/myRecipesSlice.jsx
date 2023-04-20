import { fetchMyRecipes, deleteMyRecipes } from './myRecipesOperations';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myRecipes: {
    recipes: [],
    total: 0,
  },
  isLoading: false,
  error: false,
};

const myRecipesSlice = createSlice({
  name: 'myRecipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchMyRecipes.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchMyRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.myRecipes.recipes = action.payload.recipes;
        state.myRecipes.total = action.payload.total;
      })
      .addCase(fetchMyRecipes.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(deleteMyRecipes.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(deleteMyRecipes.fulfilled, (state, action) => {
        console.log('action.payload', action.payload.message);
        const message = action.payload.message;
        const responceId = message.split(' ')[1];
        console.log('responceId', responceId);

        state.myRecipes.recipes = state.myRecipes.recipes.filter(
          recipe => recipe._id !== responceId
        );
        state.isLoading = false;
        state.error = false;
      })
      .addCase(deleteMyRecipes.rejected, state => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export const myRecipesReducer = myRecipesSlice.reducer;
