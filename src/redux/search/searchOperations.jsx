import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const searchRecipes = createAsyncThunk(
  'search/searchRecipes',
  async ({ query, page }, thunkAPI) => {
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
    try {
      const { data } = await axios.get(
        `/recipes/ingredient/${query}?page=${page}&limit=12`
      );
      return data;
    } catch (e) {}
  }
);
