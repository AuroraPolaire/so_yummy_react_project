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

import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import WelcomePage from 'pages/WelcomePage/WelcomePage';

import SharedLayout from './SharedLayout/SharedLayout';
import { PrivateRoute } from './PrivateRoute';
import {
  selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/auth/authSelectors';
import { fetchCurrentUser, refreshToken } from '../redux/auth/authOperations';
import { useEffect } from 'react';
import { RestrictedRoute } from './RestrictedRoute';

export const App = () => {
  const dispatch = useDispatch();
  // const token = useSelector(selectToken);
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    !isLoggedIn &&
      dispatch(fetchCurrentUser())
        .unwrap()
        .then(result => {
          console.log(result);
          !result && dispatch(refreshToken());
        })
        .catch(error => dispatch(refreshToken()));
  }, [dispatch, isLoggedIn]);

  return (
    <>
      {isRefreshing ? null : (
        <Routes>
          <Route
            path="/welcome"
            element={
              <RestrictedRoute redirectTo="/" component={<WelcomePage />} />
            }
          />
          <Route
            path="/register"
            element={
              <RestrictedRoute redirectTo="/" component={<RegisterPage />} />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/" component={<SignInPage />} />
            }
          />
          <Route
            path="/"
            element={
              <PrivateRoute
                redirectTo="/welcome"
                component={<SharedLayout />}
              />
            }
          >
            <Route index element={<MainPage />} />
            <Route path="main" element={<MainPage />} />
            <Route
              path="categories/:categoryName"
              element={<CategoriesPage />}
            />
            <Route path="add" element={<AddRecipesPage />} />
            <Route path="my" element={<MyRecipesPage />} />
            <Route path="favourite" element={<FavouritePage />} />
            {/* <Route path="recipe/:recipeId" element={<RecipePage />} /> */}
            <Route
              path="recipe/:recipeId"
              element={
                <PrivateRoute redirectTo="welcome" component={<RecipePage />} />
              }
            />
            <Route path="shopping-list" element={<ShoppingListPage />} />
            <Route path="search" element={<SearchPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      )}
    </>
  );
};
