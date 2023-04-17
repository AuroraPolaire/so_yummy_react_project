import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '../store';

axios.defaults.baseURL = 'https://so-yumi.p.goit.global/api';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401) {
      store.dispatch(refreshToken());
    }

    return Promise.reject(error);
  }
);

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const signIn = createAsyncThunk(
  'auth/signIn',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/login', credentials);
      token.set(data.accesstoken);
      return data;
    } catch (error) {
      alert('Wrong email or password! Please try again');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    token.unset();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// RefreshUser:
export const fetchCurrentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//..... Refresh token .....//
export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.refreshToken;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    try {
      const { data } = await axios.post('/users/refresh', {
        refreshToken: persistedToken,
      });
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const subscribeUser = createAsyncThunk(
  'auth/subscribe',
  async (email, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const persistedToken = state.auth.token;

      if (persistedToken === null) {
        return thunkAPI.rejectWithValue();
      }
      token.set(persistedToken);

      const response = await axios.post('/users/subscribe', email);

      return response.data.user;
    } catch (e) {
      if (e.response && e.response.status === 409) {
        // Обработка ошибки 409
        // Можно выполнить соответствующие действия, например, показать сообщение пользователю
        // и предложить выполнить другое действие
        alert('Subscription with this email already exists. Please try again with a different email.');
      }
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/update',
  async (userData, thunkAPI) => {
    try {
      const { data } = await axios.put('/users/update', userData);
      return data;
    } catch (error) {
      alert('Oops, something went wrong.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
const operations = {
  register,
  logout,
  signIn,
  fetchCurrentUser,
  subscribeUser,
  updateUser,
};
export default operations;
