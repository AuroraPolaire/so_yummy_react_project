import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://so-yumi.p.goit.global/api';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchRecipesMainPage = createAsyncThunk(
  'recipes/random',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) return thunkAPI.rejectWithValue();

    setAuthHeader(persistedToken);
    try {
      const { data } = await axios.get('/recipes/main-page');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchRecipe = createAsyncThunk(
  'recipe/fetchById',

  async (id, thunkAPI) => {
    try {
      const response = await axios.get(`/recipes/id/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchCategoryList = createAsyncThunk(
  'recipes/category/list',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`recipes/category/list`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
