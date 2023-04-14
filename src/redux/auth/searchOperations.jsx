import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const searchRecipes = createAsyncThunk(
  'search/searchRecipes',
  async ({ query, page }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/recipes/search?title=${query}&page=${page}&limit=12`
      );

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const searchIngredient = createAsyncThunk(
  'search/searchIngredient',
  async ({ query, page }, thunkAPI) => {
    try {
      const response = await axios.get(
        `/recipes/search?ingredient=${query}&page=${page}&limit=12`
      );

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);