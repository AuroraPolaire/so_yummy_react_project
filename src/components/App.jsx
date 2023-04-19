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
  // selectIsLoggedIn,
  selectIsRefreshing,
} from '../redux/auth/authSelectors';
import { fetchCurrentUser } from '../redux/auth/authOperations';
import React, { useEffect } from 'react';
import { RestrictedRoute } from './RestrictedRoute';
import { selectTheme } from '../redux/theme/themeSelectors';
import { GlobalStyles } from './theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const themeMode = useSelector(selectTheme);


  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <ThemeProvider theme={{ mode: themeMode }}>
      <>
        <GlobalStyles />
        <div>
          {isRefreshing ? null : (
            <Routes>
              <Route
                path="/welcome"
                element={
                  <RestrictedRoute redirectTo="/" component={<WelcomePage />} />
                }
              />

            }
          >
            <Route
              index
              element={
                <PrivateRoute redirectTo="/welcome" component={<MainPage />} />
              }
            />
            <Route
              path="/main"
              element={
                <PrivateRoute redirectTo="/welcome" component={<MainPage />} />
              }
            />
            <Route
              path="/categories/:categoryName"
              element={
                <PrivateRoute
                  redirectTo="/welcome"
                  component={<CategoriesPage />}
                />
              }
            />
            <Route
              path="/add"
              element={
                <PrivateRoute
                  redirectTo="/welcome"
                  component={<AddRecipesPage />}
                />
              }
            />
            <Route
              path="/my"
              element={
                <PrivateRoute
                  redirectTo="/welcome"
                  component={<MyRecipesPage />}
                />
              }
            />
            <Route
              path="/favourite"
              element={
                <PrivateRoute
                  redirectTo="/welcome"
                  component={<FavouritePage />}
                />
              }
            />
            <Route
              path="/recipe/:recipeId"
              element={
                <PrivateRoute redirectTo="welcome" component={<RecipePage />} />
              }
            />
            <Route
              path="/shopping-list"
              element={
                <PrivateRoute
                  redirectTo="/welcome"
                  component={<ShoppingListPage />}
                />
              }
            />
            <Route
              path="/search"
              element={
                <PrivateRoute
                  redirectTo="/welcome"
                  component={<SearchPage />}
                />
                <Route
                  path="*"
                  element={
                    <PrivateRoute
                      redirectTo="/welcome"
                      component={<NotFoundPage />}
                    />
                  }
                />
              </Route>
            </Routes>
          )}
        </div>
      </>
    </ThemeProvider>
  );
};
