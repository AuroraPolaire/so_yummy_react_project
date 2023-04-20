import React, { useEffect, lazy, Suspense } from 'react';
import { PrivateRoute } from './PrivateRoute';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../redux/auth/authSelectors';
import { selectTheme } from '../redux/theme/themeSelectors';
import { fetchCurrentUser } from '../redux/auth/authOperations';
import { GlobalStyles } from './theme/GlobalStyles';
import { ThemeProvider } from 'styled-components';

import WelcomePage from 'pages/WelcomePage/WelcomePage';
import SharedLayout from './SharedLayout/SharedLayout';
import Loader from './Loader/Loader';

const SignInPage = lazy(() => import('pages/SignInPage/SignInPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
// const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const CategoriesPage = lazy(() =>
  import('pages/CategoriesPage/CategoriesPage')
);
const AddRecipesPage = lazy(() =>
  import('pages/AddRecipesPage/AddRecipesPage')
);
const FavouritePage = lazy(() => import('pages/FavouritePage/FavouritePage'));
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage/MyRecipesPage'));
const SearchPage = lazy(() => import('pages/SearchPage/SearchPage'));
const ShoppingListPage = lazy(() =>
  import('pages/ShoppingListPage/ShoppingListPage')
);
const RecipePage = lazy(() => import('pages/RecipePage/RecipePage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

// import MainPage from 'pages/MainPage/MainPage';
// import CategoriesPage from 'pages/CategoriesPage/CategoriesPage';
// import AddRecipesPage from 'pages/AddRecipesPage/AddRecipesPage';
// import FavouritePage from 'pages/FavouritePage/FavouritePage';
// import MyRecipesPage from 'pages/MyRecipesPage/MyRecipesPage';
// import SearchPage from 'pages/SearchPage/SearchPage';
// import ShoppingListPage from 'ShoppingListPage';
// import RecipePage from 'pages/RecipePage/RecipePage';
// import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const themeMode = useSelector(selectTheme);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <ThemeProvider theme={{ mode: themeMode }}>
        <GlobalStyles />
        <div>
          {isRefreshing ? null : (
            <Suspense fallback={<Loader />}>
              <Routes>
                <Route
                  path="/welcome"
                  element={
                    <RestrictedRoute
                      redirectTo="/"
                      component={<WelcomePage />}
                    />
                  }
                />
                <Route
                  path="/register"
                  element={
                    <RestrictedRoute
                      redirectTo="/"
                      component={<RegisterPage />}
                    />
                  }
                />
                <Route
                  path="/login"
                  element={
                    <RestrictedRoute
                      redirectTo="/"
                      component={<SignInPage />}
                    />
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
                  <Route
                    index
                    element={
                      <PrivateRoute
                        redirectTo="/welcome"
                        component={<MainPage />}
                      />
                    }
                  />
                  <Route
                    path="/main"
                    element={
                      <PrivateRoute
                        redirectTo="/welcome"
                        component={<MainPage />}
                      />
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
                      <PrivateRoute
                        redirectTo="welcome"
                        component={<RecipePage />}
                      />
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
                    }
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
            </Suspense>
          )}
        </div>
      </ThemeProvider>
    </>
  );
};
