import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import AddRecipesPage from 'pages/AddRecipesPage/AddRecipesPage';
import CategoriesPage from 'pages/CategoriesPage/CategoriesPage';
import FavouritePage from 'pages/FavouritePage/FavouritePage';
import MainPage from 'pages/MainPage/MainPage';
import MyRecipesPage from 'pages/MyRecipesPage/MyRecipesPage';
import RecipePage from 'pages/RecipePage/RecipePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import SearchPage from 'pages/SearchPage/SearchPage';
import ShoppingListPage from 'pages/ShoppingListPage/ShoppingListPage';
import SignInPage from 'pages/SignInPage/SignInPage';

import SharedLayout from './SharedLayout/SharedLayout';
import { PrivateRoute } from './PrivateRoute';
import { selectIsRefreshing } from '../redux/auth/authSelectors';
import { fetchCurrentUser } from 'redux/auth/authOperations';
import { useEffect } from 'react';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? null : (
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/" element={<SharedLayout />}>
          {/* <Route
            path="/"
            element={
              <PrivateRoute
                redirectTo="/register"
                component={<SharedLayout />}
              />
            }
          > */}
            {/* <PrivateRoute redirectTo="/login" component={<Contacts />} */}
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
      )}
    </>
  );
};
