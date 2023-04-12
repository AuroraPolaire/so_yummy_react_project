import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://so-yumi.p.goit.global/api';

export const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const { data } = await axios.post('/users/signup', credentials);
      // token.set();
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
/*
 * GET @ /users/current
 * headers:
 *    Authorization: Bearer token
 *
 * 1. Забираем токен из стейта через getState()
 * 2. Если токена нет, выходим не выполняя никаких операций
 * 3. Если токен есть, добавляет его в HTTP-заголовок и выполянем операцию
 */

// RefreshUser:
export const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/users/current');
      // console.log(data);
      return data;
    } catch (error) {
      // TODO: Добавить обработку ошибки error.message
    }
  }
);

//..... Refresh token .....//
// export const refreshToken = createAsyncThunk(
//   'auth/refreshToken',
//   async (_, thunkAPI) => {
//     const state = thunkAPI.getState();
//     const persistedToken = state.auth.token;
//     // console.log(persistedToken);

//     if (persistedToken === null) {
//       return thunkAPI.rejectWithValue();
//     }

//     token.set(persistedToken);
//     const credentials = {};
//     credentials['refreshToken'] = persistedToken;
//     // console.log(JSON.stringify(credentials));

//     try {
//       const result = await axios.get('/users/refresh', credentials);
//       console.log(result);
//       return result;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

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

      return response.data.data.user;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
const operations = {
  register,
  logout,
  signIn,
  fetchCurrentUser,
  subscribeUser,
};
export default operations;
