import { createSlice } from '@reduxjs/toolkit';

import {
  fetchShoppingList,
  addProductToShoppingList,
  removeProductFromShoppingList,
} from './shoppingListOperations';

const initialState = {
  products: null,
  isLoading: false,
  error: null,
};

const shoppingListSlice = createSlice({
  name: 'shoppingList',
  initialState,

  extraReducers: builder => {
    builder
      .addCase(fetchShoppingList.pending, pendingReducer)
      .addCase(fetchShoppingList.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchShoppingList.rejected, errorReducer)

      // --------------------------------------------------------------------

      .addCase(addProductToShoppingList.pending, pendingReducer)
      .addCase(addProductToShoppingList.fulfilled, (state, { payload }) => {
        state.products = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(addProductToShoppingList.rejected, errorReducer)

      // --------------------------------------------------------------------

      .addCase(removeProductFromShoppingList.pending, pendingReducer)
      .addCase(
        removeProductFromShoppingList.fulfilled,
        (state, { payload }) => {
          //  check when few products have the same id

          state.products = payload;
          state.isLoading = false;
          state.error = null;
        }
      )
      .addCase(removeProductFromShoppingList.rejected, errorReducer);
  },
});

function pendingReducer(state) {
  state.isLoading = true;
  state.error = null;
}
function errorReducer(state, { payload }) {
  state.isLoading = false;
  state.error = payload;
}

export const shoppingListReducer = shoppingListSlice.reducer;
