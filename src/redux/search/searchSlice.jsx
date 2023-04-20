import { createSlice } from '@reduxjs/toolkit';

import {
  searchRecipes,
  searchIngredient,
  fetchIngredientsList,
} from './searchOperations';

const initialState = {
  results: [],
  searchResults: [],
  totalResults: null,
  limit: null,
  status: 'idle',
  searchType: 'title',
  query: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    changeSearchType(state, action) {
      // console.log(action);
      state.searchType = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(searchRecipes.pending, state => {
        state.status = 'loading';
      })
      .addCase(searchRecipes.fulfilled, (state, action) => {
        // console.log(action);
        state.searchResults = action.payload.recipes;
        state.totalResults = action.payload.total;
        state.limit = action.payload.limit;
        state.status = 'resolved';
      })
      .addCase(searchRecipes.rejected, state => {
        // state.searchResults = 'error';
        state.searchResults = [];
        state.totalResults = 0;
      })
      .addCase(searchIngredient.fulfilled, (state, action) => {
        // console.log(action);
        state.searchResults = action.payload.recipes;
        state.totalResults = action.payload.total;
        state.limit = action.payload.limit;
        state.status = 'resolved';
      })
      .addCase(searchIngredient.pending, state => {
        state.status = 'loading';
      })
      .addCase(searchIngredient.rejected, state => {
        state.status = 'error';
        state.searchResults = [];
        state.totalResults = 0;
      })
      .addCase(fetchIngredientsList.fulfilled, (state, action) => {
        state.results = action.payload;
        state.totalResults = action.payload.total;
        state.status = 'resolved';
      })
      .addCase(fetchIngredientsList.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchIngredientsList.rejected, state => {
        state.status = 'error';
      });
  },
});

export const { changeSearchType } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
