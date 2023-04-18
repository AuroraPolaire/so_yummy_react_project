import { fetchMyRecipes, deleteMyRecipes } from './myRecipesOperations';

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myRecipes: {
    recipes: [
      {
        _id: '640cd5ac2d9fecf12e8898fa',
        title: 'Beef Rendang',
        category: 'Beef',
        description:
          'A spicy and aromatic Indonesian curry made with tender beef slow-cooked in coconut milk and a blend of flavorful spices like lemongrass, galangal, and turmeric. Served with a side of steamed rice for a hearty meal.',
        preview:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561437/y7ytkxdg8brzbzxhvylv.jpg',
        time: '120',
        popularity: 12,
        like: false,
        favorite: true,
      },
      {
        _id: '640cd5ac2d9fecf12e8898c7',
        title:
          'Beef Banh Mi Bowls with Sriracha Mayo, Carrot & Pickled Cucumber',
        category: 'Beef',
        description:
          'These beef banh mi bowls are a deconstructed version of the classic Vietnamese sandwich, featuring marinated beef, pickled vegetables, and a spicy sriracha mayo sauce.',
        preview:
          'https://res.cloudinary.com/ddbvbv5sp/image/upload/v1678561362/hscfabcvi2mjkqudfs6s.jpg',
        time: '45',
        popularity: 8,
        like: false,
        favorite: true,
      },
    ],
    total: 0,
  },
  isLoading: false,
  error: false,
};

const myRecipesSlice = createSlice({
  name: 'myRecipes',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchMyRecipes.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchMyRecipes.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        // state.myRecipes.recipes = action.payload.recipes;
        state.myRecipes.total = action.payload.total;
      })
      .addCase(fetchMyRecipes.rejected, state => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(deleteMyRecipes.pending, state => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(deleteMyRecipes.fulfilled, (state, action) => {
        console.log('action.payload', action.payload.message);
        const message = action.payload.message;
        const responceId = message.split(' ')[1];
        console.log('responceId', responceId);

        state.myRecipes.recipes = state.myRecipes.recipes.filter(
          recipe => recipe._id !== responceId
        );
        state.isLoading = false;
        state.error = false;
      })
      .addCase(deleteMyRecipes.rejected, state => {
        state.error = true;
        state.isLoading = false;
      });
  },
});

export const myRecipesReducer = myRecipesSlice.reducer;
