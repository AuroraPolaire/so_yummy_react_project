import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchIngredientsList = createAsyncThunk(
  'ingredients/all',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/recipes/ingredients');
      return data.ingredients;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);