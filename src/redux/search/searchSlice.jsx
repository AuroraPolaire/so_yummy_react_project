import { createSlice } from '@reduxjs/toolkit';

import { searchRecipes, searchIngredient } from './searchOperations';

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
      state.searchType = action.payload;
    },
    emptySearchResults(state, action) {
      state.searchResults = [];
    },
  },
  extraReducers: builder => {
    builder
      .addCase(searchRecipes.pending, state => {
        state.status = 'loading';
      })
      .addCase(searchRecipes.fulfilled, (state, action) => {
        state.searchResults = action.payload.recipes;
        state.totalResults = action.payload.total;
        state.limit = action.payload.limit;
        state.status = 'resolved';
      })
      .addCase(searchRecipes.rejected, state => {
        state.searchResults = [];
        state.totalResults = 0;
      })
      .addCase(searchIngredient.fulfilled, (state, action) => {
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
      });
  },
});

export const { changeSearchType, emptySearchResults } = searchSlice.actions;

export const searchReducer = searchSlice.reducer;
