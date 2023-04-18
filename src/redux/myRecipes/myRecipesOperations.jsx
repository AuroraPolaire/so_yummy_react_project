import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMyRecipes = createAsyncThunk(
  'own-recipes',
  async ({ page = 1, limit = 4 }, thunkAPI) => {
    try {
      const { data } = await axios.get(
        `own-recipes?page=${page}&limit=${limit}`
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteMyRecipes = createAsyncThunk(
  'own-recipes/id/delete',
  async (id, thunkAPI) => {
    try {
      const { data } = await axios.delete(`own-recipes/id/${id}`);
      return data;
    } catch (error) {
      return {
        message:
          'Recipe 640cd5ac2d9fecf12e8898fa has been successfully deleted',
      };
      // return thunkAPI.rejectWithValue(error.message);
    }
  }
);
