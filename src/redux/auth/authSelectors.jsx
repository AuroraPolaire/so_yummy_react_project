export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectUserEmail = state => state.auth.user.email;
export const selectorSwicherTheme = state => state.auth.theme;
