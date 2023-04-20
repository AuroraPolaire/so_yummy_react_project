import { createSlice } from '@reduxjs/toolkit';
import { fetchIngredientsList } from './ingredientsOperations';

const initialState = {
  results: [],
  status: 'idle',
};

export const ingredientsSlice = createSlice({
  name: 'ingredients',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchIngredientsList.fulfilled, (state, action) => {
        state.results = action.payload;
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

export const ingredientsReducer = ingredientsSlice.reducer;