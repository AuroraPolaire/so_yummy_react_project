import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const searchRecipes = createAsyncThunk(
  'search/searchRecipes',
  async (query, thunkAPI) => {
    try {
      const response = await axios.get(
        `/recipes/title/${query}?page=1&limit=12`
      );

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);

export const searchIngredient = createAsyncThunk(
  'search/searchIngredient',
  async (query, thunkAPI) => {
    // const { query, page } = data;
    try {
      const response = await axios.get(
        `/recipes/ingredient/${query}?page=1&limit=12`
      );
      console.log(response.data);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  }
);
