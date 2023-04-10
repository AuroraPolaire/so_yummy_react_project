import AddRecipesPage from 'pages/AddRecipesPage';
import CategoriesPage from 'pages/CategoriesPage';
import FavouritePage from 'pages/FavouritePage';
import MainPage from 'pages/MainPage';
import MyRecipesPage from 'pages/MyRecipesPage';
import RecipePage from 'pages/RecipePage';
import SearchPage from 'pages/SearchPage';
import ShoppingListPage from 'pages/ShoppingListPage';
import { Route, Routes } from 'react-router-dom';

import SharedLayout from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route
            path="/categories/:categoryName"
            element={<CategoriesPage />}
          />
          <Route path="/add" element={<AddRecipesPage />} />
          <Route path="/my" element={<MyRecipesPage />} />
          <Route path="/favourite" element={<FavouritePage />} />
          <Route path="/recipe/:recipeId" element={<RecipePage />} />
          <Route path="/shopping-list" element={<ShoppingListPage />} />
          <Route path="/search" element={<SearchPage />} />
        </Route>
      </Routes>
    </>
  );
};
