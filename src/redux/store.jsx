import { configureStore } from '@reduxjs/toolkit';

import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './auth/authSlice';
import { searchReducer } from 'redux/auth/searchSlice';
import { recipesReducer } from './recipes/recipesSlice';
import { shoppingListReducer } from './shoppingList/shoppingListSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
    recipes: recipesReducer,
    shoppingList: shoppingListReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
