import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
// import { useSelector } from 'react-redux';
// import { selectToken } from './authSelectors';
// import { useStore } from 'react-redux';

// const useToken = () => {
//   const token = useSelector(selectToken);
//   if (!token) return null;
//   return token;
// };

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
      // console.log(data);
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
      // console.log(status);

      return data;
    } catch (error) {
      // console.log(error);
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

export const setupInterceptors = store => {
  const { dispatch } = store;
  axios.interceptors.response.use(
    response => response,
    error => {
      const originalRequest = error.config;
      console.log('originalRequest', originalRequest);

      if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          dispatch(refreshToken());
          return axios(originalRequest);
        } catch (error) {
          dispatch(logout());
        }
      }

      return Promise.reject(error);
    }
  );
};

// axios.interceptors.response.use(
//   response => response,
//   error => {
//     const originalRequest = error.config;

//     if (error.response.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;
//       return useRefreshToken()
//         .then(() => {
//           return axios(originalRequest);
//         })
//         .catch(error => logout());
//     }

//     return Promise.reject(error);
//   }
// );
