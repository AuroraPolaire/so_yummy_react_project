import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const fetchShoppingList = createAsyncThunk(
  'shopping-list/all',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) return thunkAPI.rejectWithValue();

    setAuthHeader(persistedToken);
    try {
      const { data } = await axios.get('/users/shopping-list');
      return data.shoppingList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addProductToShoppingList = createAsyncThunk(
  'shopping-list/add',

  async (product, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/shopping-list', product);
      return data.shoppingList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeProductFromShoppingList = createAsyncThunk(
  'shopping-list/remove',
  async (product, thunkAPI) => {
    try {
      const { data } = await axios.patch('/users/shopping-list', product);
      return data.shoppingList;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
