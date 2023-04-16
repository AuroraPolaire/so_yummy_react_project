import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchFavouriteRecipes = createAsyncThunk(
  'recipes/favorite',
  async ({ limit = 4, sort = 'title' }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `recipes/favorite?page=1&limit=${limit}&sort=${sort}`
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
      console.log(id);
      const { data } = await axios.patch(`recipes/favorite/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
