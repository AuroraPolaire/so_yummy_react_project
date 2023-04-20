import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const searchRecipes = createAsyncThunk(
  'search/searchRecipes',
  async ({ query, page }, thunkAPI) => {
    console.log('page in operation', page);
    try {
      const { data } = await axios.get(
        `/recipes/title/${query}?page=${page}&limit=12`
      );
      return data;
    } catch (e) {}
  }
);

export const searchIngredient = createAsyncThunk(
  'search/searchIngredient',
  async ({ query, page }, thunkAPI) => {
    console.log(page);
    // console.log('page in operation', page);
    try {
      const { data } = await axios.get(
        `/recipes/ingredient/${query}?page=${page}&limit=12`
      );
      return data;
    } catch (e) {}
  }
);

export const fetchIngredientsList = createAsyncThunk(
  'search/getAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/recipes/ingredients');
      return data.ingredients;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
