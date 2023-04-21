import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFavouriteRecipes = createAsyncThunk(
  'recipes/favorite',
  async ({ page = 1, limit = 4, sort = 'title' }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `recipes/favorite?page=${page}&limit=${limit}&sort=${sort}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const toggleFavouriteRecipes = createAsyncThunk(
  'recipes/toggleFavourite',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.patch(`recipes/favorite/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
