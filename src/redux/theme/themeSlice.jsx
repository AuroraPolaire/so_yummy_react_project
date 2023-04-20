import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
    value: "light"
}

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        toggle: (state) => {
            state.value = state.value === "light" ? "dark" : "light"
        }
    }
})

const persistConfig = {
    key: 'theme',
    storage,
    whitelist: ["value"],
};

export const themeReducer = persistReducer(persistConfig, themeSlice.reducer);

export const { toggle } = themeSlice.actions;