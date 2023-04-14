import statusConfig from 'utils/statusConfig';

export const selectIsLoggedIn = state => state.auth.isLoggedIn;
export const selectIsRefreshing = state => state.auth.isRefreshing;
export const selectUser = state => state.auth.user;
export const selectToken = state => state.auth.token;
export const selectUserEmail = state => state.auth.user.email;
export const selectUserId = state => state.auth.user.id;
export const selectorIsSubscribed = state => state.auth.isSubscribed;
export const selectorSwicherTheme = state => state.auth.theme;
export const selectResults = state => state.search.results;
export const selectStatus = state => statusConfig(state.search.status);
export const selectSearchType = state => state.search.searchType;
export const selectTotalResults = state => state.search.totalResults;